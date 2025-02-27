import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroBanner } from "@/components/HeroBanner/HeroBanner";
import { Newsletter } from "@/components/Newsletter/Newsletter";
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
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">New Products</h2>
                <div className="flex gap-2">
                  <button className="size-8 flex items-center justify-center border rounded">
                    <span className="sr-only">Grid view</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  </button>
                  <button className="size-8 flex items-center justify-center border rounded">
                    <span className="sr-only">List view</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" x2="21" y1="6" y2="6" />
                      <line x1="8" x2="21" y1="12" y2="12" />
                      <line x1="8" x2="21" y1="18" y2="18" />
                      <line x1="3" x2="3.01" y1="6" y2="6" />
                      <line x1="3" x2="3.01" y1="12" y2="12" />
                      <line x1="3" x2="3.01" y1="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
             
            </div>
           
         
           
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

