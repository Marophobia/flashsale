"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
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

    const element = document.getElementById("pricing")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const addOns = [
    { name: "Branding", price: "" },
    { name: "Custom Features", price: "" },
    { name: "AI Integration", price: "" },
  ]

  return (
    <section id="pricing" className="py-10 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Simple Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">No hidden fees, no surprises</p>
        </div>

        {/* Main pricing card */}
        <div
          className={`bg-card border border-primary/30 rounded-lg p-8 md:p-12 glow-border transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-2">Base Package</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold text-primary">₦100,000</span>
              <span className="text-muted-foreground">/3 days</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">₦50,000 deposit to book • Balance on delivery</p>
          </div>

          {/* Add-ons */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">Optional Add-ons</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-muted/50 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground mb-1">{addon.name}</p>
                  <p className="text-primary font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-6 glow-border-hover"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale", "_blank")}
            >
              Book Your Slot Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
