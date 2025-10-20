"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"

interface OfferDetailsProps {
  slotsRemaining: number
}

export default function OfferDetails({ slotsRemaining }: OfferDetailsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("offer-details")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const features = [
    "Responsive design (mobile & desktop)",
    "Free domain + hosting",
    "WhatsApp chat integration",
    'Professional Email',
    "SEO Setup",
    "Delivery in 72 hours",
  ]

  const totalSlots = 10
  const slotsTaken = totalSlots - slotsRemaining

  return (
    <section id="offer-details" className="px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative h-96 rounded-lg overflow-hidden glow-border">
              <img src="/me.jpeg" alt="Web design showcase" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right side - Features */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-primary">What You Get</span>
            </h2>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground group-hover:text-primary transition-colors">{feature}</p>
                </div>
              ))}
            </div>

            {/* Slots progress */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 glow-border">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-muted-foreground">SLOTS AVAILABLE</span>
                <span className="text-2xl font-bold text-primary">
                  {slotsRemaining}/{totalSlots}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500 rounded-full"
                  style={{ width: `${(slotsTaken / totalSlots) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                {slotsTaken} slot{slotsTaken !== 1 ? "s" : ""} taken • {slotsRemaining} remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
