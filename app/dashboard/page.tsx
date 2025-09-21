"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Search, Upload, MoreHorizontal, FileText, ImageIcon, Video, File, Folder } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", icon: Folder, active: true, href: "/dashboard" },
  { name: "Documents", icon: FileText, active: false, href: "/documents" },
  { name: "Images", icon: ImageIcon, active: false, href: "/images" },
  { name: "Media", icon: Video, active: false, href: "/media" },
  { name: "Others", icon: File, active: false, href: "/others" },
]

const recentFiles = [
  { name: "CVdesigner.docx", type: "docx", size: "2 GB", time: "10:15pm, 10 Oct", color: "bg-blue" },
  { name: "WebKit.png", type: "png", size: "15 MB", time: "10:15pm, 10 Oct", color: "bg-green" },
  { name: "Next JS Course Transcript.cc", type: "cc", size: "2 GB", time: "10:15pm, 10 Oct", color: "bg-yellow" },
  { name: "My-Joba-listing.mp4", type: "mp4", size: "15 MB", time: "10:15pm, 10 Oct", color: "bg-red" },
  { name: "Project Requirements.docx", type: "docx", size: "2 GB", time: "10:15pm, 10 Oct", color: "bg-blue" },
  { name: "Thumbnail.jpg", type: "jpg", size: "15 MB", time: "10:15pm, 10 Oct", color: "bg-green" },
  { name: "Pie Chart of Audiences.pptx", type: "pptx", size: "2 GB", time: "10:15pm, 10 Oct", color: "bg-yellow" },
  { name: "JM Pro Platform flow.mp4", type: "mp4", size: "15 MB", time: "10:15pm, 10 Oct", color: "bg-red" },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-light-300 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-light-400 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-light-400">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-brand rounded-sm"></div>
              </div>
            </div>
            <span className="text-lg font-semibold text-light-100">Storage</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    item.active ? "bg-brand text-white" : "text-light-200 hover:bg-light-300"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Storage Illustration */}
        <div className="p-4">
          <div className="bg-light-300 rounded-lg p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-3 relative">
              <div className="w-12 h-10 bg-blue rounded-lg transform rotate-12"></div>
              <div className="absolute -top-1 -right-1 w-8 h-6 bg-red rounded-lg"></div>
              <div className="absolute bottom-0 left-2 w-4 h-4 bg-yellow rounded-full"></div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-light-400">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-light-100 rounded-full flex items-center justify-center text-white text-sm font-medium">
              A
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-light-100">Adrian JSM</p>
              <p className="text-xs text-light-200">adrianjsm@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

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
                  placeholder="CVdesign"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-light-400 focus:border-brand focus:ring-brand"
                />
              </div>
            </div>
            <Button className="bg-brand hover:bg-brand-100 text-white ml-4">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-light-100 mb-6">Dashboard</h1>

            {/* Storage Stats */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-light-400">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Storage Usage */}
                <div className="lg:col-span-1">
                  <div className="bg-brand rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white/80 text-sm">Available Storage</p>
                        <p className="text-2xl font-bold">65%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80 text-sm">Space used</p>
                        <p className="text-lg">50GB / 100GB</p>
                      </div>
                    </div>
                    <Progress value={65} className="bg-white/20" />
                  </div>
                </div>

                {/* File Type Stats */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-light-300 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-light-100">12 GB</p>
                      <p className="text-light-200 text-sm">Documents</p>
                      <p className="text-xs text-light-200">Last update: 10:15pm, 10 Oct</p>
                    </div>

                    <div className="bg-light-300 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-2">
                        <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-light-100">20 GB</p>
                      <p className="text-light-200 text-sm">Images</p>
                      <p className="text-xs text-light-200">Last update: 10:15pm, 10 Oct</p>
                    </div>

                    <div className="bg-light-300 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-light-100">20 GB</p>
                      <p className="text-light-200 text-sm">Video, Audio</p>
                      <p className="text-xs text-light-200">Last update: 10:15pm, 10 Oct</p>
                    </div>

                    <div className="bg-light-300 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                        <File className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-light-100">38 GB</p>
                      <p className="text-light-200 text-sm">Others</p>
                      <p className="text-xs text-light-200">Last update: 10:15pm, 10 Oct</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-lg border border-light-400">
              <div className="p-6 border-b border-light-400">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-light-100">Recent files uploaded</h2>
                  <div className="flex items-center text-sm text-light-200">
                    <span className="mr-4">Sort by:</span>
                    <select className="border border-light-400 rounded px-2 py-1">
                      <option>Date Created (newest)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {recentFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 hover:bg-light-300 rounded-lg px-2"
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${file.color} rounded-full flex items-center justify-center mr-3`}>
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div>
                          <p className="font-medium text-light-100">{file.name}</p>
                          <p className="text-sm text-light-200">{file.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-light-200 mr-4">{file.size}</span>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
