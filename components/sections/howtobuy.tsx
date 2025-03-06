'use client'

import { motion } from 'framer-motion'
import { Wallet, CreditCard, ArrowRightLeft, ShieldCheck, LinkIcon } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export function HowToBuySection() {
  return ( 
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black">
      
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
        >
          <motion.span
            className="text-yellow-500 text-sm font-medium mb-2 block"
            variants={fadeIn}
            custom={0}
          >
            Simple Steps to Join Our Community
          </motion.span>
          <motion.h2
            className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-4xl md:text-5xl font-bold text-transparent"
            variants={fadeIn}
            custom={1}
          >
            How to Buy PLHH
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Wallet,
              title: "Step 1: Connect your wallet",
              description:
                "Switch to BNB network and press the connect button to choose one of the wallets to connect to the website.",
            
            },
            {
              icon: CreditCard,
              title: "Step 2: Buy with BNB Or USDT",
              description:
                "You can either use BNB or USDT to purchase PLHH tokens from this presale.",
         
            },
            {
              icon: LinkIcon,
              title: "Step 3: Claim Your PLHH Tokens",
              description:
                "When the pre-sale has been completed, You will be able to claim your tokens using the claim button.",
            
            },
            
          ].map((step, index) => (
            <motion.div
              key={index}
              className="relative group flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={index + 1}
              whileHover={{ y: -5 }}
            >
              <div
                className="p-6 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm transition-all group-hover:border-yellow-500/40 group-hover:shadow-lg group-hover:shadow-yellow-500/10 relative flex flex-col items-center text-center h-full"
                style={{
                
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent my-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-100">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
