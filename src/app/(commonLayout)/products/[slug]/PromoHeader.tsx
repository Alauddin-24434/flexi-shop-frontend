export default function PromoHeader() {
    return (
      <div className="mb-6">
        <div className="bg-amber-50 p-4 rounded-md mb-4">
          <div className="text-amber-600 text-sm font-medium mb-1">Only This Week</div>
          <h2 className="text-2xl font-bold mb-2">Grocery store with different treasures</h2>
          <p className="text-gray-600 text-sm">We have prepared special discounts for you on grocery products.</p>
          <div className="mt-4">
            <a href="#" className="text-sm font-medium flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Shop Now
              <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  