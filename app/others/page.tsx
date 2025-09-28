"use client"

import { useState } from "react"
import { Search, Upload, MoreVertical, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Sidebar from "@/app/components/sidebar"
import UploadButton from "@/app/components/upload-button"

// Mock other files data
const otherFiles = [
  { id: 1, name: "App School.cc", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 2, name: "BC company.dar", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "dar" },
  { id: 3, name: "Because I love you.dft", size: "15 MB", lastModified: "10:15pm, 10 Oct", type: "dft" },
  { id: 4, name: "Company.MV.cc", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 5, name: "company ABC.cc", size: "6 MB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 6, name: "My CV.dft", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "dft" },
  { id: 7, name: "My Jobs.cc", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 8, name: "Photoshop.cc", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 9, name: "Pig Pig Pig.cc", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "cc" },
  { id: 10, name: "system.ddr", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "ddr" },
  { id: 11, name: "school.dds", size: "15 MB", lastModified: "10:15pm, 10 Oct", type: "dds" },
  { id: 12, name: "Water.dds", size: "2 GB", lastModified: "10:15pm, 10 Oct", type: "dds" },
]

export default function OthersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFiles = otherFiles.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-light-300 flex">
      <Sidebar />
      {/* Main content */}
      <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
              <h1 className="text-2xl font-bold text-light-100">Others</h1>
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
                <div key={file.id} className="bg-white rounded-lg border border-light-400 p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
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
