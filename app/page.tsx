import { Header } from '@/components/sections/header'
import { HeroSection } from '@/components/sections/newhero'
import { AboutSection } from '@/components/sections/about-section'
import { FeaturesSection } from '@/components/sections/features'
import { TokenomicsSection } from '@/components/sections/tokenomics'
import { RoadmapSection } from '@/components/sections/roadmap'
import { FAQSection } from '@/components/sections/faq'
import { NewsletterSection } from '@/components/sections/newsletter'
import { CtaSection } from '@/components/sections/cta'
import { HowToBuySection } from '@/components/sections/howtobuy'
import MetaversePage from "@/components/sections/metaverse-page"
import { MetaverseMapSection } from '@/components/sections/metaverse-map-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection/>
      <TokenomicsSection />
      <MetaverseMapSection/>
      <HowToBuySection/>
      <RoadmapSection />
      <FAQSection />
      <NewsletterSection />
      <CtaSection/>
      <Footer />
    </main>
  )
}

