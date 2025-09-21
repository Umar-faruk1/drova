"use client"

import { useState } from "react"
import { Search, Upload, MoreVertical, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-semibold text-gray-900">Storage</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="CVdesign"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <Button className="bg-brand hover:bg-brand/90 text-white">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <Grid3X3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/documents"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Documents</span>
            </Link>
            <Link href="/images" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-brand text-white">
              <div className="w-5 h-5 bg-white rounded"></div>
              <span>Images</span>
            </Link>
            <Link
              href="/media"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Media</span>
            </Link>
            <Link
              href="/others"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Others</span>
            </Link>
          </nav>

          {/* Bottom illustration */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* User profile */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JS
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Adrian JSM</div>
              <div className="text-xs text-gray-500">adrianjsm@gmail.com</div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Images</h1>
                <p className="text-sm text-gray-500">Total: 12GB</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Sort by:</span>
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
              </div>
            </div>

            {/* File grid */}
            <div className="grid grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
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
                    <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{file.name}</h3>
                    <div className="flex justify-between text-xs text-gray-500">
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
    </div>
  )
}
