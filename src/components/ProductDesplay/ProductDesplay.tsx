import Image from 'next/image';
import { Star, StarHalf, Minus, Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Product = {
    id: number
    name: string
    price: number
    originalPrice: number
    productImages: string
    rating: number
    badge?: {
      text: string
      variant: "sale" | "hot" | "new"
    }
  }
const ProductDesplay = ({productThumbnail,name, description}:Product) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Product Images */}
                <div>
                    <div className="border rounded-md overflow-hidden mb-4">
                        <Image
                            src={productThumbnail}
                            alt="Men's Hoodie"
                            width={500}
                            height={500}
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className={`border rounded-md overflow-hidden cursor-pointer ${i === 5 ? "ring-2 ring-blue-500" : ""}`}
                            >
                                <Image
                                    src="/placeholder.svg?height=80&width=80"
                                    alt={`Thumbnail ${i}`}
                                    width={80}
                                    height={80}
                                    unoptimized
                                    className="w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-2xl font-bold mb-2">{name}</h1>
                    <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 mr-2">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <StarHalf className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-gray-600">4.5</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600">154 orders</span>
                        <span className="ml-2 text-green-600">In stock</span>
                    </div>

                    <div className="text-2xl font-bold mb-4">
                        $75.00 <span className="text-sm font-normal text-gray-500">per box</span>
                    </div>

                    <p className="text-gray-700 mb-4">
                        Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
                        conventions of mainstream fashion. Made in Italy, these black and brown clothing line top shirts for men.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <div className="font-medium mb-1">Type:</div>
                            <div>Regular</div>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Color:</div>
                            <div>Brown</div>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Material:</div>
                            <div>Cotton, Jeans</div>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Brand:</div>
                            <div>Reebok</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label htmlFor="size" className="block font-medium mb-2">
                                Size
                            </label>
                            <select
                                id="size"
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>X-Large</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block font-medium mb-2">
                                Quantity
                            </label>
                            <div className="flex">
                                <button className="border rounded-l-md px-3 py-2 bg-gray-100 hover:bg-gray-200">
                                    <Minus className="w-4 h-4" />
                                </button>
                                <input type="text" id="quantity" value="14" className="w-full border-t border-b text-center py-2" />
                                <button className="border rounded-r-md px-3 py-2 bg-gray-100 hover:bg-gray-200">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 px-6">BUY NOW</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 px-6 flex items-center gap-2">
                            <span className="sr-only md:not-sr-only">ADD TO CART</span>
                        </Button>
                        <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Save</span>
                        </Button>
                    </div>
                </div>
            </div>
    );
};

export default ProductDesplay;