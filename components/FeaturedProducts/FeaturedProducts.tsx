"use client";
import { cn } from "@/lib/utils"
import { Product, ProductCard } from "../ProductCardProps/ProductCardProps"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function FeaturedProducts() {
     const [activeCategory, setActiveCategory] = useState("ALL")
    
  const categories = ["ALL", "CLOTHING", "ELECTRONICS", "SHOES"]

    const products: Product[] = [
        {
          id: 1,
          name: "Floral Print Buttoned",
          price: 450.99,
          originalPrice: 800,
          image: "/placeholder.svg?height=400&width=300",
          rating: 4,
          badge: { text: "SALE", variant: "sale" },
        },
        {
          id: 2,
          name: "Floral Print Buttoned",
          price: 450.99,
          originalPrice: 800,
          image: "/placeholder.svg?height=400&width=300",
          rating: 4,
          badge: { text: "HOT", variant: "hot" },
        },
        {
          id: 3,
          name: "Floral Print Buttoned",
          price: 450.99,
          originalPrice: 800,
          image: "/placeholder.svg?height=400&width=300",
          rating: 4,
          badge: { text: "SALE", variant: "sale" },
        },
        {
          id: 4,
          name: "Floral Print Buttoned",
          price: 450.99,
          originalPrice: 800,
          image: "/placeholder.svg?height=400&width=300",
          rating: 4,
          badge: { text: "NEW", variant: "new" },
        },
        {
          id: 5,
          name: "Floral Print Buttoned",
          price: 450.99,
          originalPrice: 800,
          image: "/placeholder.svg?height=400&width=300",
          rating: 4,
          badge: { text: "NEW", variant: "new" },
        },
      ]

  return (
    <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Featured Products</h2>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeCategory === category ? "text-blue-600" : "text-gray-500 hover:text-gray-800",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded bg-gray-100 text-gray-600">
              <ChevronLeft size={16} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded bg-gray-100 text-gray-600">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
    </div>
    
   

  )
}

