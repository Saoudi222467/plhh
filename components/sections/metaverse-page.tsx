"use client"

import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function MetaversePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background with blur overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/metaverse_vid.mp4" // Replace with your video link
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className="relative z-20">
        <Reveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto border-yellow-500/30 bg-black/70 backdrop-blur-md p-8">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 215, 0, 0.3)",
                    "0 0 40px rgba(255, 215, 0, 0.5)",
                    "0 0 20px rgba(255, 215, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500"
              >
                <span className="text-black font-bold text-3xl">PLHH</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>

              <p className="text-neutral-300 mb-4">
                Our immersive metaverse experience is under development. Be among the first to explore the PLHH digital
                world.
              </p>

              <p className="text-yellow-500 font-semibold">Launch Expected Q3 2024</p>
            </Card>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}

