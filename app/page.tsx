"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import OfferDetails from "@/components/offer-details"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import StickyBookButton from "@/components/sticky-book-button"

export default function Home() {
  const [slotsRemaining, setSlotsRemaining] = useState(7)

  useEffect(() => {
    // Simulate slot updates
    const interval = setInterval(() => {
      setSlotsRemaining((prev) => Math.max(0, prev - Math.floor(Math.random() * 2)))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <OfferDetails slotsRemaining={slotsRemaining} />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <Footer />
        <StickyBookButton />
      </div>
    </main>
  )
}
