'use client'

import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { motion } from 'framer-motion'
import { Heart, Globe, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: "Community First",
    description: "Built on the principles of love, peace, and harmony for all humanity."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating positive change through blockchain technology and community initiatives."
  },
  {
    icon: Users,
    title: "Collective Growth",
    description: "Together we build a more harmonious and prosperous future for everyone."
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Built on secure blockchain technology with full transparency and trust."
  }
]

export function FeaturesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-black">
      <Container>
        <Reveal>
          <h2 className="mb-12 text-center font-montserrat text-3xl font-bold tracking-tight sm:text-4xl">
            Building a{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Better Future
            </span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={index} className="h-full">
              <div className="h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex h-full w-full min-h-[250px] flex-col rounded-lg border border-yellow-500/10 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <div className="flex flex-1 flex-col">
                    <feature.icon className="mb-4 h-8 w-8 text-yellow-500" />
                    <h3 className="mb-2 font-montserrat text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400">{feature.description}</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
