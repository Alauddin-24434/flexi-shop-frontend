"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "../Sidebar/Sidebar"
import { useGetAllcategoryQuery } from "@/redux/features/category/categoryApi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data } = useGetAllcategoryQuery({})

  return (
    <header className="bg-header border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <Link href="/account" className="text-white">
              My Account
            </Link>
            <Link href="/wishlist" className="text-white">
              Wishlist
            </Link>
            <Link href="/cart" className="text-white">
              My Cart
            </Link>
            <Link href="/checkout" className="text-white">
              Checkout
            </Link>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <div className="bg-yellow-400 logo-text rounded-full w-10 h-10 flex items-center justify-center font-bold mr-2">
              FS
            </div>
            <span className="text-2xl font-bold text-primary">FlexiShop</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative flex w-full">
              <Input type="search" placeholder="Search here..." className="rounded-r-none border-r-0" />
              <Button className="rounded-l-none">
                <Search size={18} />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center">
              <div className="mr-2">
                <ShoppingCart size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Shopping Cart</div>
                <div className="font-bold">$5680</div>
              </div>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <Sidebar />
                </SheetContent>
              </Sheet>
            </div>

            <Button variant="outline" size="icon" className="md:hidden">
              <Search />
            </Button>

            <Button variant="outline" size="icon">
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>

        <nav className="text-black py-3 px-4 rounded-t-md hidden md:block">
          <ul className="flex gap-6">
            <li className="font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                 <span className="cursor-pointer ">Categories</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mt-3 ml-32 w-60">
                  {data?.data?.map((category) => (
                    <DropdownMenuSub key={category.id} >
                      <DropdownMenuSubTrigger>{category.name}</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {category.children?.map((subcategory) => (
                            <DropdownMenuItem key={subcategory.id}>
                              <Link href={`/category/${subcategory.slug}`}>{subcategory.name}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="font-medium">
              <Link href="/clothing" className="hover:text-yellow-300">
                Clothing
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/electronics" className="hover:text-yellow-300">
                Electronics
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/health-beauty" className="hover:text-yellow-300">
                Health & Beauty
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/watches" className="hover:text-yellow-300">
                Watches
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/jewellery" className="hover:text-yellow-300">
                Jewellery
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/shoes" className="hover:text-yellow-300">
                Shoes
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/kids" className="hover:text-yellow-300">
                Kids & Girls
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
