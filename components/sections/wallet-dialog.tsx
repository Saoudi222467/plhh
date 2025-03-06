"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation" // Import useRouter


const walletProviders = [
  {
    id: "suiwallet",
    name: "Sui Wallet",
    icon: "/suiwallet.png", 
    description: "Connect to your SUI Wallet",
  },
  {
    id: "suiet",
    name: "Suiet",
    icon: "/suiet.avif",
    description: "Scan with Suiet to connect",
  },
  {
    id: "ethos",
    name: "Ethos",
    icon: "/ethos.jpeg", 
    description: "Connect to your Ethos Wallet",
  },
];

interface WalletDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletDialog({ isOpen, onClose }: WalletDialogProps) {
  const [connecting, setConnecting] = useState<string | null>(null)
  const router = useRouter() // Initialize router

  const handleConnectWallet = (providerId: string) => {
    setConnecting(providerId)

    // Simulate connection process
    setTimeout(() => {
      setConnecting(null)
      onClose()
      router.push(`/dashboard`)
      // Here you would typically handle the actual wallet connection
      console.log(`Connected to ${providerId}`)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative mx-4 max-w-md overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/90 p-6 shadow-2xl shadow-yellow-500/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-2xl font-bold text-transparent">
                Connect Wallet
              </h2>
              <p className="mt-2 text-sm text-neutral-400">Choose a wallet provider to connect to PLHH Coin</p>
            </div>

            {/* Wallet options */}
            <div className="space-y-3">
              {walletProviders.map((provider) => (
                <motion.button
                  key={provider.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full rounded-xl border border-yellow-500/10 bg-neutral-900 p-4 text-left transition-colors hover:border-yellow-500/30 hover:bg-neutral-800"
                  onClick={() => handleConnectWallet(provider.id)}
                  disabled={connecting !== null}
                >
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800">
                    
                      {/* Uncomment when you have the actual icons */}
                      {<Image
                        src={provider.icon || "/placeholder.svg"}
                        alt={provider.name}
                        width={24}
                        height={24}
                      /> }
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{provider.name}</h3>
                      <p className="text-xs text-neutral-400">{provider.description}</p>
                    </div>

                    {/* Loading indicator */}
                    {connecting === provider.id && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent" />
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-neutral-500">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

