"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Subtitle with glow */}
        <div
          className={`mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Limited Time Offer</span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Get Your Website in Just 3 Days
          </span>
          <span className="block text-4xl md:text-6xl mt-2">🚀</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          10 slots only. Beautiful, mobile-friendly websites built in 72 hours. Perfect for small businesses,
          professionals, churches, and creatives.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border-hover font-semibold text-base px-8 py-6"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale", "_blank")}
          >
            Book Now on WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-base px-8 py-6 bg-transparent"
            onClick={() => scrollToSection("portfolio")}
          >
            See Samples ↓
          </Button>
        </div>

        {/* Urgency message */}
        {/* <div
          className={`text-sm text-muted-foreground transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p>⏰ Offer ends this Week or when all 10 slots are filled</p>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
