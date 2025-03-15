"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

// Rating distribution data
const ratingDistribution = [
  { label: "FIVE", count: 989, percentage: 75 },
  { label: "FOUR", count: "4.5K", percentage: 60 },
  { label: "THREE", count: 50, percentage: 15 },
  { label: "TWO", count: 16, percentage: 10 },
  { label: "ONE", count: 8, percentage: 5 },
]

// Recent reviews data
const recentReviews = [
  {
    id: 1,
    name: "Robert Karmazov",
    rating: 4,
    comment: "Auctor magnis proin vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Robert Karmazov",
    rating: 4,
    comment: "Auctor magnis proin vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Robert Karmazov",
    rating: 4,
    comment: "Auctor magnis proin vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function ReviewSystem() {
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Rating Distribution and Recent Reviews */}
      <div>
        {/* Rating Distribution */}
        <div className="mb-12">
          {ratingDistribution.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-20 text-left font-medium">{item.label}</div>
              <div className="flex items-center mr-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="flex-grow h-5 bg-yellow-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <div className="w-16 text-right ml-4">{item.count}</div>
            </div>
          ))}
        </div>

        {/* Recent Feedbacks */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Feedbacks</h2>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">{review.name}</h3>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-500">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Overall Rating and Add Review Form */}
      <div>
        {/* Overall Rating */}
        <div className="bg-yellow-50 p-8 rounded-lg mb-8 flex flex-col items-center">
          <div className="text-5xl font-bold text-yellow-500 mb-4">4.3</div>
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="text-lg">50 Ratings</div>
        </div>

        {/* Add a Review */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Add a Review</h2>
          <form>
            <div className="mb-6">
              <label className="block mb-2">
                Add Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer ${
                      (hoverRating || userRating) >= star ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"
                    }`}
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="name" placeholder="John Doe" className="w-full p-3 border rounded-lg" required />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="John.Doe@gmail.com"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="review" className="block mb-2">
                Write Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review"
                placeholder="Write here..."
                className="w-full p-3 border rounded-lg h-32"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

