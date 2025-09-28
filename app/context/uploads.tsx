"use client"

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"

export type UploadKind = "documents" | "images" | "media" | "others"

export type MediaSubtype = "video" | "audio" | null

export type UploadedItem = {
  id: string
  name: string
  sizeBytes: number
  createdAt: number
  kind: UploadKind
  mediaSubtype: MediaSubtype
  objectUrl?: string
}

type UploadsState = {
  documents: UploadedItem[]
  images: UploadedItem[]
  media: UploadedItem[]
  others: UploadedItem[]
}

type UploadsContextValue = {
  uploads: UploadsState
  addFiles: (files: FileList | File[]) => void
}

const UploadsContext = createContext<UploadsContextValue | null>(null)

function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function formatKindFromFile(file: File): { kind: UploadKind; mediaSubtype: MediaSubtype } {
  const mime = file.type || ""
  const lowerName = file.name.toLowerCase()
  if (mime.startsWith("image/")) return { kind: "images", mediaSubtype: null }
  if (mime.startsWith("video/")) return { kind: "media", mediaSubtype: "video" }
  if (mime.startsWith("audio/")) return { kind: "media", mediaSubtype: "audio" }

  const ext = lowerName.split(".").pop() || ""
  const documentExts = new Set(["pdf", "doc", "docx", "txt", "rtf", "csv", "xls", "xlsx", "ppt", "pptx"])
  if (documentExts.has(ext)) return { kind: "documents", mediaSubtype: null }

  return { kind: "others", mediaSubtype: null }
}

export function UploadsProvider({ children }: { children: React.ReactNode }) {
  const [uploads, setUploads] = useState<UploadsState>({ documents: [], images: [], media: [], others: [] })
  const objectUrlsRef = useRef<string[]>([])

  const addFiles = useCallback((files: FileList | File[]) => {
    const arr = Array.from(files as File[])
    setUploads((prev) => {
      const next: UploadsState = { ...prev, documents: [...prev.documents], images: [...prev.images], media: [...prev.media], others: [...prev.others] }
      for (const file of arr) {
        const { kind, mediaSubtype } = formatKindFromFile(file)
        const id = generateId()
        const createdAt = Date.now()
        const item: UploadedItem = {
          id,
          name: file.name,
          sizeBytes: file.size,
          createdAt,
          kind,
          mediaSubtype,
          objectUrl: undefined,
        }
        if (kind === "images") {
          const url = URL.createObjectURL(file)
          objectUrlsRef.current.push(url)
          item.objectUrl = url
        }
        if (kind === "media") {
          // Optionally preview thumbnails later; keep as is for now
        }
        next[kind] = [...next[kind], item]
      }
      return next
    })
  }, [])

  React.useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((u) => URL.revokeObjectURL(u))
    }
  }, [])

  const value = useMemo(() => ({ uploads, addFiles }), [uploads, addFiles])

  return <UploadsContext.Provider value={value}>{children}</UploadsContext.Provider>
}

export function useUploads() {
  const ctx = useContext(UploadsContext)
  if (!ctx) throw new Error("useUploads must be used within UploadsProvider")
  return ctx
}

export function formatBytes(sizeBytes: number): string {
  if (sizeBytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(sizeBytes) / Math.log(1024))
  const size = sizeBytes / Math.pow(1024, i)
  return `${size.toFixed( i === 0 ? 0 : 1)} ${units[i]}`
}


