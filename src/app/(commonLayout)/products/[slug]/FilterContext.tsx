"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type FilterContextType = {
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  categories: string[]
  setCategories: (categories: string[]) => void
  colors: string[]
  setColors: (colors: string[]) => void
  brands: string[]
  setBrands: (brands: string[]) => void
  status: string[]
  setStatus: (status: string[]) => void
  sortBy: string
  setSortBy: (sortBy: string) => void
  clearFilters: () => void
  clearFilter: (type: string, value?: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30])
  const [categories, setCategories] = useState<string[]>(["Fruits & Vegetables"])
  const [colors, setColors] = useState<string[]>([])
  const [brands, setBrands] = useState<string[]>([])
  const [status, setStatus] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("latest")

  const clearFilters = () => {
    setPriceRange([0, 30])
    setCategories([])
    setColors([])
    setBrands([])
    setStatus([])
  }

  const clearFilter = (type: string, value?: string) => {
    switch (type) {
      case "price":
        setPriceRange([0, 30])
        break
      case "category":
        if (value) {
          setCategories(categories.filter((cat) => cat !== value))
        } else {
          setCategories([])
        }
        break
      case "color":
        if (value) {
          setColors(colors.filter((color) => color !== value))
        } else {
          setColors([])
        }
        break
      case "brand":
        if (value) {
          setBrands(brands.filter((brand) => brand !== value))
        } else {
          setBrands([])
        }
        break
      case "status":
        if (value) {
          setStatus(status.filter((s) => s !== value))
        } else {
          setStatus([])
        }
        break
      default:
        break
    }
  }

  return (
    <FilterContext.Provider
      value={{
        priceRange,
        setPriceRange,
        categories,
        setCategories,
        colors,
        setColors,
        brands,
        setBrands,
        status,
        setStatus,
        sortBy,
        setSortBy,
        clearFilters,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

