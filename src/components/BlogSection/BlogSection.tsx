import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Voluptatem accusantium doloremque laudantium",
      excerpt: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "/placeholder.svg?height=200&width=400",
      date: "August 24, 2023",
    },
    {
      id: 2,
      title: "Dolorem eum fugiat quo voluptas nulla pariatur",
      excerpt: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "/placeholder.svg?height=200&width=400",
      date: "August 18, 2023",
    },
    {
      id: 3,
      title: "Quis autem vel eum iure reprehenderit",
      excerpt: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "/placeholder.svg?height=200&width=400",
      date: "August 10, 2023",
    },
  ]

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Latest from Blog</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <span className="sr-only">Previous</span>
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">Next</span>
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
              <Link href="#" className="text-primary hover:underline text-sm font-medium">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 p-8 rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">AMAZING SUNGLASSES</h3>
            <p className="text-muted-foreground">Get 40% off on selected items.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

