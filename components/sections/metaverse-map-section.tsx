"use client"

import { useState, useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Counter component for animating numbers
function Counter({ value, duration = 2, decimals = 0, prefix = "", suffix = "" }: 
    { value: number; duration?: number; decimals?: number; prefix?: string; suffix?: string }) {
  
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })


  useEffect(() => {
    if (inView) {
        let startTime: number | undefined
        let animationFrame: number | null = null
        

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * value)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="font-montserrat text-4xl md:text-5xl font-bold">
      <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
        {prefix}
        {count.toLocaleString(undefined, { maximumFractionDigits: decimals })}
        {suffix}
      </span>
    </div>
  )
}

export function MetaverseMapSection() {
  const metaverseStats = [
    {
      title: "Total Land Area",
      value: 10000,
      suffix: " sq km",
      description: "Virtual land spanning across multiple regions",
    },
    {
      title: "Available Lands",
      value: 5000,
      suffix: "+",
      description: "Unique plots available after launch",
    },
    {
      title: "Starting Price",
      value: 100,
      prefix: "$",
      description: "Per square foot of virtual land",
    },
    {
      title: "Holder Rewards",
      value: 15,
      suffix: "%",
      description: "Annual yield for landholders",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-neutral-900/50 to-black">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <Reveal width="100%" className="w-full">
          <h2 className="mb-8 text-center font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              PLHH Metaverse World
            </span>
          </h2>
        </Reveal>

        <Reveal width="100%">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-neutral-300 text-lg">
              Experience a revolutionary digital realm where community, creativity, and commerce converge. The PLHH
              Metaverse offers immersive experiences, virtual land ownership, and unprecedented opportunities for
              connection and growth in a decentralized ecosystem powered by blockchain technology.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {metaverseStats.map((stat, index) => (
            <Reveal key={index} width="100%">
              <Card className="border-yellow-500/10 bg-black/50 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Counter value={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                  <h3 className="text-yellow-500 font-semibold text-xl mt-2 mb-3">{stat.title}</h3>
                  <p className="text-neutral-400">{stat.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%">
          <div className="flex justify-center">
            <Link href="/metaverse">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 text-black transition-all hover:scale-105 hover:from-amber-600 hover:to-yellow-600"
          
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0.5,
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  Explore Metaverse
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

