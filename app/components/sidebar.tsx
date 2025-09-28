"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, ImageIcon, Video, File, Folder } from "lucide-react"

type SidebarItem = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const NAV_ITEMS: SidebarItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: Folder },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Images", href: "/images", icon: ImageIcon },
  { name: "Media", href: "/media", icon: Video },
  { name: "Others", href: "/others", icon: File },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-light-400 flex flex-col relative">
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

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-brand text-white" : "text-light-200 hover:bg-light-300"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4">
        <div className="bg-light-300 rounded-lg p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-3 relative">
            <div className="w-12 h-10 bg-blue rounded-lg transform rotate-12"></div>
            <div className="absolute -top-1 -right-1 w-8 h-6 bg-red rounded-lg"></div>
            <div className="absolute bottom-0 left-2 w-4 h-4 bg-yellow rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-light-400">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-light-100 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-light-100">Umar Faruk</p>
            <p className="text-xs text-light-200">umarfaruk@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar


