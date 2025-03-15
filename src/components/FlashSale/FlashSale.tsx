"use client";

import { useState, useEffect, JSX } from "react";
import {  ProductCard } from "../ProductCardProps/ProductCardProps";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";

export function FlashSale() {
  const { data } = useFindAllProductQuery({});

  // Set the end time for the flash sale (e.g., 2 hours from now)
  const saleEndTime = new Date().getTime() + 2 * 60 * 60 * 1000; 

  const [timeLeft, setTimeLeft] = useState(saleEndTime - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = saleEndTime - new Date().getTime();
      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds to hh:mm:ss format
  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className=" py-8">
      <div className="flex justify-between items-center mb-6 border-b ">
        <h2 className="text-2xl font-medium text-gray-800 ">Flash Sale</h2>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6 ">
            {/* Flash sale countdown timer */}
          
            <div className="bg-red-500 text-white px-4 py-2  text-lg font-semibold">
              {formatTime(timeLeft)}
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.data?.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
