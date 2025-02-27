import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import { NewProducts } from "@/components/NewProduct/NewProducts";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { Sidebar } from "@/components/Sidebar/Sidebar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <Sidebar />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5">
            <HeroBanner />
        
           <NewProducts/>
            <FeaturedProducts/>
        
           
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

