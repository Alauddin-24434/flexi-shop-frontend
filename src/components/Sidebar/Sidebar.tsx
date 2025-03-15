"use client"
import { useState } from "react"
import { ChevronRight,  } from "lucide-react"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { useGetAllcategoryQuery } from "@/redux/features/category/categoryApi"

export function Sidebar() {
  const { data } = useGetAllcategoryQuery({})
  const [expandedCategories, setExpandedCategories] = useState({})

  console.log("cat", data)

  return (
    <div className="space-y-6">
      

    
      <div className="border rounded-md p-4">
        <h3 className="font-semibold mb-3">Hot deals</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-2">
              <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
              <div>
                <div className="text-sm font-medium">Floral Print Shirt</div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold mt-1">$450.99</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border rounded-md p-4">
        <h3 className="font-semibold mb-3">Special Offer</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-2">
              <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
              <div>
                <div className="text-sm font-medium">Floral Print Shirt</div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold mt-1">$450.99</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

