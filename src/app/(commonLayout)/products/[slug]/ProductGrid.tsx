"use client"

import { useState } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Grid, LayoutGrid } from "lucide-react"
import { ProductCard } from "@/components/ProductCardProps/ProductCardProps"

export default function ProductGrid({ sortBy,setSortBy, products }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  console.log("p", products)

//   // Ensure products is always an array
//   const validProducts = Array.isArray(products) ? products : []

//   // Filter products
//   const filteredProducts = validProducts.filter((product: any) => {
//     if (!product) return false

//     // Price filter
//     if (product.price < priceRange[0] || product.price > priceRange[1]) {
//       return false
//     }

//     // Category filter
//     if (categories.length > 0 && !categories.includes(product.category)) {
//       return false
//     }

//     return true
//   })

//   // Sort products
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return (a.discount || a.price) - (b.discount || b.price)
//       case "price-high":
//         return (b.discount || b.price) - (a.discount || a.price)
//       default:
//         return 0 // Default to latest
//     }
//   })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">Showing all {products?.length} results</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-8 w-[140px]">
                <SelectValue placeholder="Sort by latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Sort by latest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Sort by rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm">
            <span>{products?.length} items</span>
          </div>
          <div className="flex gap-1">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : "grid-cols-1"} gap-4`}
      >
      
    {
        products?.map((product:any)=>(
          <ProductCard key={product.id} {...product} />
        ))
    }
         
     
       
      </div>
    </div>
  )
}
