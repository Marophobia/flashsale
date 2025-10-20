"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up md:hidden">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full shadow-lg glow-border-hover animate-glow-pulse"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=2348112949474&text=Hello%20Maro,%20I'm%20interested%20in%20the%203-day%20website%20flash%20sale", "_blank")}
          >
            Book Now
          </Button>
        </div>
      )}
    </>
  )
}
