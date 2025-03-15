"use client";
import { cn } from "@/lib/utils"
import {  ProductCard } from "../ProductCardProps/ProductCardProps"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";

export function NewProducts() {
     const [activeCategory, setActiveCategory] = useState("ALL")
    
  const categories = ["ALL", "CLOTHING", "ELECTRONICS", "SHOES"]

  const {data}= useFindAllProductQuery({

  })
  console.log(data)


  return (
    <div className=" py-8">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">New Products</h2>
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

      {data?.data?.map((product:any) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
    </div>
    
   

  )
}

