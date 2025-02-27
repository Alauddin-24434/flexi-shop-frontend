import { BarChart3, Heart, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"

export type Product = {
    id: number
    name: string
    price: number
    originalPrice: number
    image: string
    rating: number
    badge?: {
      text: string
      variant: "sale" | "hot" | "new"
    }
  }
  
export function ProductCard({ id, name, price, originalPrice, image, rating, badge }: Product) {
  return (

  

      <div key={id} className="group relative border border-gray-200 bg-white">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-[300px] object-cover"
          />

          {badge && (
            <div
              className={cn(
                "absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold uppercase",
                badge.variant === "sale" && "bg-yellow-400 text-yellow-800",
                badge.variant === "hot" && "bg-red-400 text-white",
               badge.variant === "new" && "bg-blue-400 text-white",
              )}
            >
              {badge.text}
            </div>
          )}

          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors">
              <ShoppingCart size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Heart size={16} />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <BarChart3 size={16} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium">{name}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300",
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-medium">${price.toFixed(2)}</span>
            <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>


  )
}

