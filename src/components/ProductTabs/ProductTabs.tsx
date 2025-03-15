"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("specification")

  return (
    <div className="mb-10">
      <Tabs defaultValue="specification" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="specification">SPECIFICATION</TabsTrigger>
          <TabsTrigger value="warranty">WARRANTY INFO</TabsTrigger>
          <TabsTrigger value="shipping">SHIPPING INFO</TabsTrigger>
          <TabsTrigger value="seller">SELLER PROFILE</TabsTrigger>
        </TabsList>
        <TabsContent value="specification" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <p>
              With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className="mt-4">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Some great feature name here
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Lorem ipsum dolor sit amet, consectetur
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Duis aute irure dolor in reprehenderit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Optical heart sensor
              </li>
            </ul>

            <table className="w-full mt-6 border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Display</td>
                  <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Processor capacity</td>
                  <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Camera quality</td>
                  <td className="py-2">720p FaceTime HD camera</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Memory</td>
                  <td className="py-2">8 GB RAM or 16 GB RAM</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Graphics</td>
                  <td className="py-2">Intel Iris Plus Graphics 640</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="warranty" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3>Warranty Information</h3>
            <p>
              This product comes with a 30-day warranty that covers manufacturing defects. Please keep your receipt as
              proof of purchase.
            </p>
            <h4>What's Covered:</h4>
            <ul>
              <li>Manufacturing defects</li>
              <li>Material issues</li>
              <li>Stitching problems</li>
            </ul>
            <h4>What's Not Covered:</h4>
            <ul>
              <li>Normal wear and tear</li>
              <li>Damage from misuse</li>
              <li>Improper washing or care</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="shipping" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3>Shipping Information</h3>
            <p>We ship to most countries worldwide. Shipping times and costs vary depending on your location.</p>
            <h4>Estimated Delivery Times:</h4>
            <ul>
              <li>United States: 3-5 business days</li>
              <li>Europe: 5-7 business days</li>
              <li>Asia: 7-10 business days</li>
              <li>Rest of the world: 10-14 business days</li>
            </ul>
            <p>All orders are processed within 1-2 business days after payment confirmation.</p>
          </div>
        </TabsContent>
        <TabsContent value="seller" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3>Seller Information</h3>
            <p>
              This product is sold and shipped by Fashion Trends Inc., a trusted partner with over 10 years of
              experience in the fashion industry.
            </p>
            <h4>Seller Ratings:</h4>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 mr-2">
                <span className="text-lg">★★★★☆</span>
              </div>
              <span>4.8 out of 5 stars (1,245 ratings)</span>
            </div>
            <h4>Contact Information:</h4>
            <p>
              Email: support@fashiontrends.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Hours: Monday-Friday, 9am-5pm EST
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

