"use client";
import { useParams } from "next/navigation";
import Sidebar from "./Sidebar";
import ActiveFilters from "./ActiveFilters";
import ProductGrid from "./ProductGrid";

import { useState } from "react";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";

const ProductPage = () => {
  const { slug } = useParams();
  console.log("slug", slug);

  const {data:products}=useFindAllProductQuery({
    search:'',
    category:slug ,
    page:1 ,
    limit:10,

  })

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("latest");

  const clearFilters = () => {
    setPriceRange([0, 30]);
    setCategories([]);
  };

  const clearFilter = (type: string, value?: string) => {
    switch (type) {
      case "price":
        setPriceRange([0, 30]);
        break;
      case "category":
        if (value) {
          setCategories(categories.filter((cat) => cat !== value));
        } else {
          setCategories([]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <Sidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <ActiveFilters
            priceRange={priceRange}
            categories={categories}
            clearFilter={clearFilter}
            clearFilters={clearFilters}
             />
            
          <ProductGrid sortBy={sortBy} setSortBy={setSortBy} products={products?.data}  />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
