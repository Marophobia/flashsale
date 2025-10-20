"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("final-cta")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set deadline to exactly 5 days from now (end of day)
      const deadline = new Date()
      deadline.setDate(deadline.getDate() + 5)
      deadline.setHours(23, 59, 59, 999) // Set to end of day
      
      const now = new Date()
      const difference = deadline.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="final-cta" className="py-10 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div
          className={`bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 rounded-lg p-12 md:p-16 text-center glow-border transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Online?</h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't miss out on this limited-time offer. Book your slot now and get your professional website in just 72
            hours.
          </p>

          {/* Countdown timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 max-w-lg mx-auto px-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-primary/20 rounded-lg p-3 sm:p-4 min-w-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center">{String(item.value).padStart(2, "0")}</div>
                <div className="text-xs text-muted-foreground mt-1 text-center truncate">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-6 glow-border-hover mb-6"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale", "_blank")}
          >
            Book Now on WhatsApp
          </Button>

          <p className="text-sm text-muted-foreground">Offer ends soon or when all 10 slots are filled</p>
        </div>
      </div>
    </section>
  )
}
