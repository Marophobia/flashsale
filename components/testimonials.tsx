"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Gabriel Osaghae",
      role: "Owner, SpaceVR Benin",
      quote: "Maro delivered my website with SEO optimization like i've never seen before. It's beautiful, fast, and my customers love it!",
      rating: 5,
    },
    {
      name: "Thelma Sowande",
      role: "Founder, The Mindful Moms",
      quote: "Maro rebranded our website and it's now the hub for all our activities.",
      rating: 5,
    },
    {
      name: "Steve Ozeh",
      role: "Director, RCCG SHIFT",
      quote: "Professional, responsive, and delivered on time. Highly recommended for anyone needing a website.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">What Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">Real feedback from real clients</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card border border-primary/20 rounded-lg p-6 glow-border transition-all duration-1000 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
