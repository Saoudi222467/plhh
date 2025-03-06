import { Header } from '@/components/sections/header'
import {GovernanceSection} from '@/components/sections/governance-section'
import { Footer } from '@/components/sections/footer'


export default function MetaPage() { // Updated function name
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-black via-neutral-900 to-black text-white">
        <Header />
        <GovernanceSection/>
        <Footer />
      </main>
    );
}

