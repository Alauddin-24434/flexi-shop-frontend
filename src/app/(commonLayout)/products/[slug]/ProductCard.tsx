"use client"

import { useState } from "react"
import type { Product } from "@/lib/data"
import { Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product, viewMode }: { product: Product; viewMode: "grid" | "list" }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0

  return (
    <div
      className={`group relative border rounded-md p-2 transition-all hover:shadow-md ${viewMode === "list" ? "flex gap-4" : ""}`}
    >
      {product.salePrice && (
        <Badge className="absolute top-3 left-3 z-10 bg-red-500 hover:bg-red-600">{discountPercentage}%</Badge>
      )}

      {product.organic && (
        <Badge className="absolute top-3 right-12 z-10 bg-green-500 hover:bg-green-600">ORGANIC</Badge>
      )}

      <button
        className={`absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white shadow flex items-center justify-center transition-all ${isFavorite ? "text-red-500" : "text-gray-400"} hover:text-red-500`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
      </button>

      <div className={viewMode === "list" ? "w-1/4" : ""}>
        <div className="relative aspect-square mb-2 overflow-hidden rounded-md">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>

      <div className={viewMode === "list" ? "w-3/4" : ""}>
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-3 w-3 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500">{product.reviewCount}</span>
        </div>

        <h3 className="font-medium text-sm mb-1">{product.name}</h3>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-green-600">${product.salePrice?.toFixed(2) || product.price.toFixed(2)}</span>
          {product.salePrice && <span className="text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>}
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="h-8 w-8 p-0 bg-green-600 hover:bg-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Button>

          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium">IN STOCK</span>
          ) : (
            <span className="text-xs text-red-500 font-medium">OUT OF STOCK</span>
          )}
        </div>
      </div>
    </div>
  )
}

