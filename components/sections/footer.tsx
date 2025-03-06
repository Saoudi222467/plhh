'use client'

import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import Image from 'next/image'
import { Twitter, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 py-12 items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-2">
              <Image
                src="logo-main.png"
                alt="PLHH Coin"
                width={40}
                height={40}
                className="h-8 w-8"
              />
              <span className="font-montserrat font-bold">PLHH Coin</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-neutral-400">
              Made with <Heart className="h-4 w-4 text-red-500" /> for Humanity
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-yellow-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
        </div>
      </Container>
    </footer>
  )
}

