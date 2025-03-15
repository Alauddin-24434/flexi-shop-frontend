import Link from "next/link"

export function PromoBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="bg-slate-800 text-white p-6 rounded-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-sm font-medium mb-1">AMAZING DISCOUNT</div>
          <h3 className="text-2xl font-bold mb-4">Leather Shoes</h3>
          <Link href="#" className="text-sm text-yellow-400 hover:underline">
            Buy Now
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5,9V8H19c0-0.55-0.45-1-1-1h-1V5.5C17,4.67,16.33,4,15.5,4h-8C6.67,4,6,4.67,6,5.5V7H5C4.45,7,4,7.45,4,8H1.5v1 H4c0,0.55,0.45,1,1,1h1v1.5C6,12.33,6.67,13,7.5,13h8c0.83,0,1.5-0.67,1.5-1.5V10h1c0.55,0,1-0.45,1-1h2.5V9z M16,10.5 c0,0.28-0.22,0.5-0.5,0.5h-8C7.22,11,7,10.78,7,10.5v-5C7,5.22,7.22,5,7.5,5h8C15.78,5,16,5.22,16,5.5V10.5z M15,6.5 C15,6.78,14.78,7,14.5,7h-6C8.22,7,8,6.78,8,6.5v0C8,6.22,8.22,6,8.5,6h6C14.78,6,15,6.22,15,6.5L15,6.5z M15,8.5 C15,8.78,14.78,9,14.5,9h-6C8.22,9,8,8.78,8,8.5v0C8,8.22,8.22,8,8.5,8h6C14.78,8,15,8.22,15,8.5L15,8.5z M15,10.5 C15,10.78,14.78,11,14.5,11h-6C8.22,11,8,10.78,8,10.5v0C8,10.22,8.22,10,8.5,10h6C14.78,10,15,10.22,15,10.5L15,10.5z M22.5,14v-1H20c0-0.55-0.45-1-1-1h-1v-1.5c0-0.83-0.67-1.5-1.5-1.5h-8C7.67,9,7,9.67,7,10.5V12H6c-0.55,0-1,0.45-1,1H2.5v1 H5c0,0.55,0.45,1,1,1h1v1.5C7,17.33,7.67,18,8.5,18h8c0.83,0,1.5-0.67,1.5-1.5V15h1c0.55,0,1-0.45,1-1H22.5z M17,15.5 c0,0.28-0.22,0.5-0.5,0.5h-8C8.22,16,8,15.78,8,15.5v-5C8,10.22,8.22,10,8.5,10h8c0.28,0,0.5,0.22,0.5,0.5V15.5z M16,11.5 c0,0.28-0.22,0.5-0.5,0.5h-6C9.22,12,9,11.78,9,11.5v0C9,11.22,9.22,11,9.5,11h6C15.78,11,16,11.22,16,11.5L16,11.5z M16,13.5 c0,0.28-0.22,0.5-0.5,0.5h-6C9.22,14,9,13.78,9,13.5v0C9,13.22,9.22,13,9.5,13h6C15.78,13,16,13.22,16,13.5L16,13.5z M16,15.5 c0,0.28-0.22,0.5-0.5,0.5h-6C9.22,16,9,15.78,9,15.5v0C9,15.22,9.22,15,9.5,15h6C15.78,15,16,15.22,16,15.5L16,15.5z"></path>
          </svg>
        </div>
      </div>

      <div className="bg-pink-100 p-6 rounded-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-sm font-medium text-pink-600 mb-1">NEW COLLECTION</div>
          <h3 className="text-2xl font-bold text-pink-800 mb-4">Women's Cloth</h3>
          <Link href="#" className="text-sm text-pink-600 hover:underline">
            Buy Now
          </Link>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16,21H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2ZM12,3a1,1,0,0,0-1,1V7.59L9.7,6.29a1,1,0,0,0-1.4,1.42l3,3a1,1,0,0,0,1.4,0l3-3a1,1,0,0,0-1.4-1.42L13,7.59V4A1,1,0,0,0,12,3ZM19,13H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
          </svg>
        </div>
      </div>

      <div className="bg-slate-100 p-6 rounded-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-sm font-medium text-slate-600 mb-1">LATEST DIGITAL WORLD</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Marazzo Watch</h3>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            Buy Now
          </Link>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm9.5-4.5a1,1,0,0,0-1,1v.87a8,8,0,0,1-7.33,8A8.1,8.1,0,0,1,4,11.75v-.92a1,1,0,0,0-2,0v.92a10.14,10.14,0,0,0,10,10.25,10,10,0,0,0,9.42-10V9.5A1,1,0,0,0,21.5,8.5Zm-18-3a1,1,0,0,0,1-1V3.63a8,8,0,0,1,7.33-8A8.1,8.1,0,0,1,20,4.25v.92a1,1,0,0,0,2,0V4.25a10.14,10.14,0,0,0-10-10.25A10,10,0,0,0,2.5,4V4.5A1,1,0,0,0,3.5,5.5Z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

