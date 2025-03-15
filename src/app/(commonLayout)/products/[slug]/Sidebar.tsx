"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetAllcategoryChildrenQuery } from "@/redux/features/category/categoryApi";
import { useRouter } from "next/navigation"; // Add this import for Next.js router

interface SidebarProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export default function Sidebar({ priceRange, setPriceRange, categories, setCategories }: SidebarProps) {
  const [minPrice, setMinPrice] = useState(priceRange[0].toString());
  const [maxPrice, setMaxPrice] = useState(priceRange[1].toString());
  const [sliderValue, setSliderValue] = useState([priceRange[0], priceRange[1]]);
  const router = useRouter();

  const handlePriceFilter = () => {
    setPriceRange([Number.parseInt(minPrice) || 0, Number.parseInt(maxPrice) || 30]);
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setMinPrice(value[0].toString());
    setMaxPrice(value[1].toString());
    setPriceRange(value);
  };

  // Modify toggleCategory to handle single selection
  const toggleCategory = (category: string) => {
    const newCategories = categories.includes(category) ? [] : [category];
    setCategories(newCategories);

    // Only push to router if there's a category selected
    if (newCategories.length > 0) {
      router.push(`/products/${newCategories[0]}`); // If category is selected, update the URL with the category
    }
    // No need to change the URL when no category is selected.
  };

  const { data } = useGetAllcategoryChildrenQuery({});

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Widget price filter</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div>
              <label className="text-xs text-gray-500">Min price</label>
              <Input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="h-8"
                min={0}
              />
            </div>
            <div className="pt-4">-</div>
            <div>
              <label className="text-xs text-gray-500">Max price</label>
              <Input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="h-8"
                min={0}
              />
            </div>
          </div>

          <div className="px-1">
            <Slider
              defaultValue={[0, 30]}
              max={30}
              step={1}
              value={sliderValue}
              onValueChange={handleSliderChange}
              className="my-4"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              Price: ${priceRange[0]} — ${priceRange[1]}
            </div>
            <Button onClick={handlePriceFilter} size="sm" className="h-8">
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Product Categories</h3>
        <div className="space-y-2">
          {data?.data?.map((category: any) => (
            <div key={category?.id} className="flex items-center space-x-2">
              {/* Checkbox to toggle category */}
              <Checkbox
                id={category?.slug}
                checked={categories.includes(category?.slug)}
                onCheckedChange={() => toggleCategory(category?.slug)} // Toggle category
              />
              <label htmlFor={category?.slug} className="text-sm cursor-pointer flex justify-between w-full">
                <span>{category?.name}</span>
                <Plus className="h-4 w-4" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
