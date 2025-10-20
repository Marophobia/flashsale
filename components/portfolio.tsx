"use client"

import { useEffect, useState } from "react"

export default function Portfolio() {
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

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "RCCG SHIFT",
      description: "Talent Hunt Management System",
      image: "/shift.png",
    },
    {
      title: "Mindful Moms",
      description: "Community platform for mothers",
      image: "/mindful.png",
    },
    {
      title: "ONC Services",
      description: "Educational institution website",
      image: "/onc.png",
    },
    {
      title: "Novaxa Technologies",
      description: "Software Development Company",
      image: "/novaxa.png",
    },
  ]

  return (
    <section id="portfolio" className="py-10 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Recent Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">See what we've built for our clients</p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg glow-border transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project info */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View portfolio button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <button className="text-primary hover:text-primary/80 font-semibold flex items-center justify-center gap-2 mx-auto group">
            View Full Portfolio
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
