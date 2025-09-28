"use client"

import { useState } from "react"
import Link from "next/link"
import Sidebar from "@/app/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Upload, MoreHorizontal, FileText, ImageIcon, Video, File, Folder } from "lucide-react"
import UploadButton from "@/app/components/upload-button"

const sidebarItems = [
  { name: "Dashboard", icon: Folder, active: false, href: "/dashboard" },
  { name: "Documents", icon: FileText, active: true, href: "/documents" },
  { name: "Images", icon: ImageIcon, active: false, href: "/images" },
  { name: "Media", icon: Video, active: false, href: "/media" },
  { name: "Others", icon: File, active: false, href: "/others" },
]

const documents = [
  { name: "App School.doc", size: "2 GB", time: "10:15pm, 10 Oct", icon: "📄" },
  { name: "BC company.sketch", size: "2 GB", time: "10:15pm, 10 Oct", icon: "💎" },
  { name: "B.UI.kit", size: "15 MB", time: "10:15pm, 10 Oct", icon: "🎨" },
  { name: "Company.MV.fig", size: "2 GB", time: "10:15pm, 10 Oct", icon: "🎨" },
  { name: "company ABC.sketch", size: "6 MB", time: "10:15pm, 10 Oct", icon: "💎" },
  { name: "My CV.pdf", size: "2 GB", time: "10:15pm, 10 Oct", icon: "📄" },
  { name: "My Jobs.csv", size: "2 GB", time: "10:15pm, 10 Oct", icon: "📊" },
  { name: "notes.txt", size: "2 GB", time: "10:15pm, 10 Oct", icon: "📝" },
  { name: "P.N design123.fig", size: "2 GB", time: "10:15pm, 10 Oct", icon: "🎨" },
  { name: "students.docx", size: "2 GB", time: "10:15pm, 10 Oct", icon: "📄" },
  { name: "school.pdf", size: "15 MB", time: "10:15pm, 10 Oct", icon: "📄" },
  { name: "Water design666.fig", size: "2 GB", time: "10:15pm, 10 Oct", icon: "🎨" },
]

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-light-300 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-light-400 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-200 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-light-400 focus:border-brand focus:ring-brand"
                />
              </div>
            </div>
            <div className="ml-4">
              <UploadButton />
            </div>
          </div>
        </header>

        {/* Documents Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-light-100">Documents</h1>
                <p className="text-light-200">Total: 1305GB</p>
              </div>
              <div className="flex items-center text-sm text-light-200">
                <span className="mr-4">Sort by:</span>
                <select className="border border-light-400 rounded px-2 py-1">
                  <option>Date Created (newest)</option>
                </select>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="bg-white rounded-lg border border-light-400 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="bg-light-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl">{doc.icon}</div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="font-medium text-light-100 mb-1 truncate">{doc.name}</h3>
                    <p className="text-sm text-light-200">{doc.size}</p>
                    <p className="text-xs text-light-200">{doc.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
