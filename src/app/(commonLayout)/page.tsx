import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { FlashSale } from "@/components/FlashSale/FlashSale";
import { Footer } from "@/components/Footer/Footer";

import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import { NewProducts } from "@/components/NewProduct/NewProducts";
import { Newsletter } from "@/components/Newsletter/Newsletter";

import { PromoBanners } from "@/components/PromoBanners/PromoBanners";
import { Sidebar } from "@/components/Sidebar/Sidebar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 py-4">
        
          <div className="w-full  ">
            <HeroBanner />
            <FlashSale />
            <NewProducts />
            <PromoBanners />
            <FeaturedProducts />


          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

