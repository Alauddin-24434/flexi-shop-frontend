import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Company
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Specials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Corporation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Suppliers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Authorized Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Street, Anytown, USA 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>support@marazzo.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link href="#" className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link href="#" className="bg-slate-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Marazzo. All rights reserved.</p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Discover" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}

