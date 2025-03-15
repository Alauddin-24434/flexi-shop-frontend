import { Input } from "@/components/ui/input"
import { Search, Bell } from "lucide-react"
import Image from "next/image"

export function DashbordHeader() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
            Home
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 text-sm">Sales</span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search anything"
            className="w-full bg-gray-50 pl-9 focus-visible:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm">
          <span className="text-gray-700">You have</span>
          <span className="mx-1 font-medium">21</span>
          <span className="text-gray-700">new leads</span>
          <span className="ml-1">🎉</span>
        </div>

        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell size={16} className="text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Abigale Heatley</span>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

