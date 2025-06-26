'use client'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-[#F9F6F2] py-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold text-[#4A2E2A] mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg text-[#4B4B4B] max-w-xl mb-8">
          Whether you're a brand, partner, or chocolate innovator we’d love to hear from you.
        </p>

        <div className="bg-white shadow-lg border border-[#E8E6E1] rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2 text-[#4A2E2A]">Reach Out</h2>
          <p className="text-[#4B4B4B] mb-4">
            Email us at{' '}
            <a
              href="mailto:hello@chocovatelabs.com"
              className="text-[#4A2E2A] underline hover:text-[#6A423C] transition"
            >
              hello@chocovatelabs.com
            </a>
          </p>

          {/* Optional: Embed form or social links here */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
