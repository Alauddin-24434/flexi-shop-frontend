import Image from "next/image"

export function HeroBanner() {
  return (
    <div className="relative rounded-md overflow-hidden h-[300px] md:h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-transparent z-10"></div>
      <Image
        src="/placeholder.svg?height=400&width=1200"
        alt="New Collections"
        width={1200}
        height={400}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/2 left-12 -translate-y-1/2 z-20">
        <div className="text-sm font-medium text-blue-600 mb-2">TOP BRANDS</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">New Collections</h1>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md">Shop Now</button>
      </div>
    </div>
  )
}

