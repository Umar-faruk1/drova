"use client"

import { useState } from "react"
import { Search, Upload, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Sidebar from "@/app/components/sidebar"
import UploadButton from "@/app/components/upload-button"

// Mock image data
const imageFiles = [
  {
    id: 1,
    name: "App School.png",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "png",
    thumbnail: "/school-app-screenshot.jpg",
  },
  {
    id: 2,
    name: "BC company.jpeg",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/business-card-company-logo.jpg",
  },
  {
    id: 3,
    name: "B.ui.jpeg",
    size: "15 MB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/ui-design-mockup.png",
  },
  {
    id: 4,
    name: "Company.MV.png",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "png",
    thumbnail: "/abstract-logo.png",
  },
  {
    id: 5,
    name: "company ABC.jpeg",
    size: "6 MB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/corporate-branding.jpg",
  },
  {
    id: 6,
    name: "My CV.png",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "png",
    thumbnail: "/resume-cv-document.jpg",
  },
  {
    id: 7,
    name: "My Jobs.jpeg",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/job-listing-screenshot.jpg",
  },
  {
    id: 8,
    name: "Photoshop.png",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "png",
    thumbnail: "/photoshop-interface.jpg",
  },
  {
    id: 9,
    name: "Pig Pig Pig.jpeg",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/cute-pig-illustration.jpg",
  },
  {
    id: 10,
    name: "system.png",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "png",
    thumbnail: "/system-architecture-diagram.png",
  },
  {
    id: 11,
    name: "school.jpeg",
    size: "15 MB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/school-building-exterior.png",
  },
  {
    id: 12,
    name: "Water design1998.jpeg",
    size: "2 GB",
    lastModified: "10:15pm, 10 Oct",
    type: "jpeg",
    thumbnail: "/water-design-pattern.jpg",
  },
]

export default function ImagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredFiles = imageFiles.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-light-300 flex">
      <Sidebar />
      {/* Main content */}
      <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
              <h1 className="text-2xl font-bold text-light-100">Images</h1>
              <p className="text-light-200">Total: 12GB</p>
              </div>
              <div className="flex items-center space-x-4">
              <span className="text-sm text-light-200">Sort by:</span>
              <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Date Created (newest)</SelectItem>
                    <SelectItem value="oldest">Date Created (oldest)</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="size">Size</SelectItem>
                  </SelectContent>
                </Select>
              <UploadButton />
              </div>
            </div>

            {/* File grid */}
            <div className="grid grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                className="bg-white rounded-lg border border-light-400 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <img
                      src={file.thumbnail || "/placeholder.svg"}
                      alt={file.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                  <h3 className="font-medium text-light-100 text-sm mb-1 truncate">{file.name}</h3>
                  <div className="flex justify-between text-xs text-light-200">
                      <span>{file.size}</span>
                      <span>{file.lastModified}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </main>
    </div>
  )
}
