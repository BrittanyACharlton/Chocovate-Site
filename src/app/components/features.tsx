"use client"

import { Package, Cookie, IceCream } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Bars & Snacks",
    description: "Protein bars, energy snacks, and confectionery products",
    icon: Package,
  },
  {
    title: "Bakery",
    description: "Cookies, cakes, pastries, and baked goods applications",
    icon: Cookie,
  },
  {
    title: "Frozen Desserts",
    description: "Ice cream, frozen yogurt, and novelty products",
    icon: IceCream,
  },
]

export default function Features() {
  return (
    <section className="bg-[#FFFCF9] py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2B1C16] mb-4">
          Made for Food Brands <br /> and R&D Teams.
        </h2>
        <p className="text-[#5C4A3D] max-w-xl mx-auto mb-12 text-base sm:text-lg">
          Chocovate fits seamlessly into new or existing products across multiple categories and applications.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white shadow-sm rounded-2xl p-6 border border-[#F3EDE8] transition hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-10 w-10 text-[#A0724F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B1C16] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#6F5649] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
