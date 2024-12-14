"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
]

export function Nav() {
  const [activeItem, setActiveItem] = useState("")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setActiveItem(href)
    }
  }

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gradient-to-r from-[#fdf6e4] to-[#e0f7f7] backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="text-3xl font-bold text-slate-900">
          tofu
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-slate-700 hover:text-slate-900 transition-colors text-lg font-medium ${
                activeItem === item.href ? "font-semibold" : ""
              }`}
              onClick={(e) => handleScroll(e, item.href)}
            >
              {item.name}
              {activeItem === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#38B2AC] rounded-full"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 text-slate-900 bg-white/50 hover:bg-[#38B2AC] hover:text-white transition-colors shadow-md"
        >
          Contact us
        </Button>
      </div>
    </motion.nav>
  )
}
