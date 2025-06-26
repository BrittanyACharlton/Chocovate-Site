'use client'

import { Mail} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo or Name */}
        <div className="text-gray-800 text-sm font-semibold">
          © {new Date().getFullYear()} Chocovate Labs. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="mailto:hello@chocovatelabs.com" aria-label="Email">
            <Mail className="w-5 h-5 text-gray-600 hover:text-black transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}
