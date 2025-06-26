'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Chocovate_Labs_Logo.png"
            alt="Chocovate Labs Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/samples" className="text-gray-800 hover:text-gray-600 font-medium text-sm">
            Request Samples
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium text-sm">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="/samples" className="block py-2 text-gray-800 hover:text-gray-600 font-medium">
            Request Samples
          </Link>
          <Link href="/contact" className="block py-2 text-gray-800 hover:text-gray-600 font-medium">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}


