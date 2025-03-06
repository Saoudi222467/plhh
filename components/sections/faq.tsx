'use client'

import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageCircle, Coins, ShoppingCart, Trophy, Globe2 } from 'lucide-react'

const faqs = [
  {
    question: "What is PLHH Coin?",
    answer: "PLHH (Peace, Love & Harmony) Token is a revolutionary cryptocurrency designed to promote global harmony and positive change through blockchain technology. It combines innovative tokenomics with real-world impact initiatives.",
    icon: <Coins className="h-5 w-5 text-yellow-500" />
  },
  {
    question: "How can I participate in the PLHH ecosystem?",
    answer: "You can participate by acquiring PLHH Coins, joining our community governance, purchasing virtual land in our metaverse, and engaging in various community initiatives aimed at promoting peace and harmony.",
    icon: <MessageCircle className="h-5 w-5 text-yellow-500" />
  },
  {
    question: "What makes PLHH different from other tokens?",
    answer: "PLHH stands out through its unique focus on promoting harmony and positive change, backed by a sustainable tokenomics model, active community governance, and real-world implementation of blockchain technology for social good.",
    icon: <HelpCircle className="h-5 w-5 text-yellow-500" />
  },
  {
    question: "How can I purchase PLHH Coins?",
    answer: "PLHH Coins can be purchased through major cryptocurrency exchanges, our official website, or through authorized partners. Always verify you're using official channels to ensure safe transactions.",
    icon: <ShoppingCart className="h-5 w-5 text-yellow-500" />
  },
  {
    question: "What are the benefits of holding PLHH Coins?",
    answer: "PLHH Coin holders enjoy various benefits including voting rights in community governance, access to exclusive metaverse land sales, participation in community initiatives, and potential rewards through our staking program.",
    icon: <Trophy className="h-5 w-5 text-yellow-500" />
  },
  {
    question: "How does the PLHH metaverse work?",
    answer: "The PLHH metaverse is a virtual world where token holders can own land, build experiences, and participate in community events. Each region has unique characteristics and opportunities for development and collaboration.",
    icon: <Globe2 className="h-5 w-5 text-yellow-500" />
  }
]

export function FAQSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal  width="100%" className="w-full">
          <div className="mb-12 text-center space-y-4">
            <h2 className="font-montserrat text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Everything you need to know about PLHH Coin and its ecosystem
            </p>
          </div>
        </Reveal>
        <div className="mx-auto max-w-3xl">
          <Card className="border-yellow-500/10 bg-black/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-yellow-500">
                <HelpCircle className="w-8 h-8 mx-auto mb-2" />
                Find Answers
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <Reveal key={index} width="100%" className="w-full">
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="border-yellow-500/10 transition-colors duration-200 hover:bg-yellow-500/5"
                    >
                      <AccordionTrigger className="text-left font-montserrat hover:text-yellow-500">
                        <div className="flex items-center gap-3">
                          {faq.icon}
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-400">
                        <div className="pl-8">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Reveal>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}