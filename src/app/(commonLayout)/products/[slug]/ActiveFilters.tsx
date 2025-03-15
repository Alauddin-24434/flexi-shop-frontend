"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActiveFiltersProps {
  priceRange: [number, number];
  categories: string[];
  clearFilters: () => void;
  clearFilter: (type: string, value?: string) => void;
}

export default function ActiveFilters({
  priceRange,
  categories,
  clearFilters,
  clearFilter,
}: ActiveFiltersProps) {
  const hasActiveFilters =
    categories.length > 0 || priceRange[0] > 0 || priceRange[1] < 30;

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap items-center bg-amber-600 gap-2 mb-4 p-2 rounded">
      <Button
        variant="outline"
        size="sm"
        className="h-7 px-2 text-xs flex items-center gap-1"
        onClick={clearFilters}
      >
        Clear filters
        <X className="h-3 w-3" />
      </Button>

      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          className="h-7 px-2 text-xs flex items-center gap-1"
          onClick={() => clearFilter("category", category)}
        >
          {category}
          <X className="h-3 w-3" />
        </Button>
      ))}

      {(priceRange[0] > 0 || priceRange[1] < 30) && (
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2 text-xs flex items-center gap-1"
          onClick={() => clearFilter("price")}
        >
          ${priceRange[0]} - ${priceRange[1]}
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
