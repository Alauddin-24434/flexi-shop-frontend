import type React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  User,
  CreditCard,
  Settings,
  Zap,
} from "lucide-react";

export function DashboardSidebar() {
  // Simulating user role (replace this with actual role from context or API)
  const userRole = "ADMIN";

  const routes = (() => {
    switch (userRole) {
      case "ADMIN":
        return [
          { path: "/dashboard", label: "Dashboards", icon: <LayoutDashboard size={18} /> },
          { path: "/product-management", label: "Product Management", icon: <Package size={18} /> },
          {
            path:"/flashSale-management", label:"FlashSale Management",icon: <Zap size={18} />
          },
          { path: "/shop-management", label: "Shop Management", icon: <ShoppingCart size={18} /> },
          { path: "/user-management", label: "User Management", icon: <User size={18} /> },
          { path: "/payment-management", label: "Payment Management", icon: <CreditCard size={18} /> },
          { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
        ];
      case "SELLER":
        return [
          { path: "/dashboard", label: "Dashboards", icon: <LayoutDashboard size={18} /> },
          { path: "/product-management", label: "Product Management", icon: <Package size={18} /> },
          { path: "/shop-management", label: "Shop Management", icon: <ShoppingCart size={18} /> },
          { path: "/payment-management", label: "Payment Management", icon: <CreditCard size={18} /> },
        ];
      case "USER":
        return [
          { path: "/dashboard", label: "Dashboards", icon: <LayoutDashboard size={18} /> },
          { path: "/shop-management", label: "Shop Management", icon: <ShoppingCart size={18} /> },
        ];
      default:
        return [];
    }
  })();

  return (
    <div className="w-64 border-r h-screen bg-white flex flex-col">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
              <path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="space-y-1 px-2">
          {routes.map((route) => (
            <SidebarItem key={route.path} icon={route.icon} label={route.label} href={route.path} />
          ))}
        </nav>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function SidebarItem({ icon, label, href }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
