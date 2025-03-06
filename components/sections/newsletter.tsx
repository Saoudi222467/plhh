'use client'

import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-2xl border border-yellow-500/10 bg-black/50 p-8 backdrop-blur-sm">
          <Reveal >
            <h2 className="mb-4 text-center font-montserrat text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h2>
          </Reveal>
          <Reveal >
            <p className="mb-8 text-center text-neutral-400">
              Join our newsletter to receive updates about our journey towards a more harmonious world.
            </p>
          </Reveal>
          <Reveal >
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-yellow-500/10 bg-black/50 text-white placeholder:text-neutral-500"
              />
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-600 hover:to-yellow-600">
                Subscribe
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

