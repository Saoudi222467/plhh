"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { WalletDialog } from "@/components/sections/wallet-dialog"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Community", href: "#community" },
  {
    name: 'Utility',
    href: '',
    hasDropdown: true,
    items: [
      { name: 'Minting', href: '/dashboard#dashboard' },
      { name: 'Staking', href: '/dashboard#staking' },
      { name: 'Governance', href: '/governance#proposals' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string | null) => { 
    setOpenDropdown(openDropdown === name ? null : name);
};


  const openWalletDialog = () => {
    setIsWalletDialogOpen(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="logo-main.png" alt="PLHH Coin" width={40} height={40} className="h-8 w-8" />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text font-montserrat text-xl font-bold text-transparent">
                PLHH Coin
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center space-x-1 text-sm text-neutral-300 transition-colors hover:text-yellow-500"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-40 bg-black/90 rounded-md shadow-lg"
                          >
                            <div className="flex flex-col space-y-2 p-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-md px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-yellow-500 hover:text-black"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-yellow-500"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black transition-all hover:from-amber-600 hover:to-yellow-600"
                onClick={openWalletDialog}
              >
                Connect Wallet
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-neutral-300" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-300" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 right-0 bg-black/95 px-4 py-2 backdrop-blur-md md:hidden"
            >
              <nav className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="flex w-full justify-between items-center text-neutral-300 transition-colors hover:text-yellow-500"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-2 pl-4"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-yellow-500 hover:text-black"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-neutral-300 transition-colors hover:text-yellow-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black transition-all hover:from-amber-600 hover:to-yellow-600"
                  onClick={openWalletDialog}
                >
                  Connect Wallet
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Wallet Connection Dialog */}
      <WalletDialog isOpen={isWalletDialogOpen} onClose={() => setIsWalletDialogOpen(false)} />
    </>
  )
}
