import { DashbordHeader } from "@/components/dashboardUi/DashboardHeader/DashboardHeader"
import { DashboardSidebar } from "@/components/dashboardUi/DashbordSidebar/DashboardSidebar"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashbordHeader/>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>

       
      </div>
    </div>
  )
}
