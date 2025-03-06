"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  PlusCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

export function CtaSection() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-neutral-900/50 to-black">
        {/* Animated gradient backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.1),transparent_50%)]" />
        </div>

        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                Join our community for
                <br />
                First Access
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-neutral-300 max-w-3xl mx-auto mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the <br className="hidden md:block" />
              majority have suffered alteration in some form.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center gap-4"
              >
                {[
                  { icon: Facebook, href: "/" },
                  { icon: Twitter, href: "/" },
                  { icon: Instagram, href: "/" },
                  { icon: Youtube, href: "/" },
                  { icon: MessageCircle, href: "/" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
