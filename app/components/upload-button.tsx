"use client"

import { useRef, useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useUploads } from "@/app/context/uploads"

export default function UploadButton() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { addFiles } = useUploads()
  const [open, setOpen] = useState(false)

  const onPick = () => {
    inputRef.current?.click()
  }

  const onFilesSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      addFiles(files)
      setOpen(false)
      e.currentTarget.value = ""
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-brand hover:bg-brand-100 text-white" onClick={() => setOpen(true)}>
          <Upload className="w-4 h-4 mr-2" />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <p className="text-sm text-light-200">Select one or more files. We'll sort them into Documents, Images, Media, or Others automatically.</p>
          <div>
            <Button className="bg-brand hover:bg-brand-100 text-white" onClick={onPick}>
              Choose files
            </Button>
            <input ref={inputRef} type="file" multiple className="hidden" onChange={onFilesSelected} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


