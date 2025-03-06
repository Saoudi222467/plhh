"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Progress } from "@/components/ui/progress"
import { Bitcoin, Wallet, ArrowRight, Info, CheckCircle2 } from "lucide-react"

const presalePhases = [
  {
    id: "phase1",
    name: "Phase 1",
    price: 0.0001,
    supply: 1000000,
    sold: 750000,
    bonus: "25%",
    status: "active",
  },
  {
    id: "phase2",
    name: "Phase 2",
    price: 0.00015,
    supply: 2000000,
    sold: 0,
    bonus: "15%",
    status: "upcoming",
  },
  {
    id: "phase3",
    name: "Phase 3",
    price: 0.0002,
    supply: 3000000,
    sold: 0,
    bonus: "10%",
    status: "upcoming",
  },
]

export function BuyPLHHSection() {
  const [selectedPhase, setSelectedPhase] = useState(presalePhases[0])
  const [amount, setAmount] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  const calculateTotal = () => {
    return amount ? Number(amount) * selectedPhase.price : 0
  }

  const calculateBonus = () => {
    const bonusPercentage = Number.parseInt(selectedPhase.bonus)
    return amount ? (Number(amount) * bonusPercentage) / 100 : 0
  }

  return (
    <section className="relative min-h-screen pt-24">
      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.15),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-yellow-500"
          >
            Buy PLHH Tokens
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400"
          >
            Join the revolution - Secure your PLHH tokens now
          </motion.p>
        </div>

        {/* Pre-sale Phases */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 grid gap-6 md:grid-cols-3"
        >
          {presalePhases.map((phase) => (
            <Card
              key={phase.id}
              className={`border-yellow-500/20 bg-black/40 backdrop-blur-sm transition-all hover:border-yellow-500/40 ${
                selectedPhase.id === phase.id ? "border-yellow-500" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-yellow-500">{phase.name}</span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      phase.status === "active"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-neutral-500/20 text-neutral-500"
                    }`}
                  >
                    {phase.status}
                  </span>
                </CardTitle>
                <CardDescription>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">Price</span>
                      <span className="text-yellow-500">${phase.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">Bonus</span>
                      <span className="text-yellow-500">{phase.bonus}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Progress</span>
                        <span className="text-yellow-500">{((phase.sold / phase.supply) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress
                        value={(phase.sold / phase.supply) * 100}
                        className="h-2 bg-yellow-500/20"
                        indicatorClassName="bg-yellow-500"
                      />
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
                  onClick={() => setSelectedPhase(phase)}
                  disabled={phase.status !== "active"}
                >
                  Select Phase
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Purchase Form */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-500">Purchase PLHH</CardTitle>
              <CardDescription>Enter amount and select payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="crypto" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                  <TabsTrigger value="fiat">Fiat Currency</TabsTrigger>
                </TabsList>
                <TabsContent value="crypto">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount of PLHH</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border-yellow-500/20 bg-black/40 text-yellow-500"
                      />
                      {amount && (
                        <div className="mt-2 rounded-lg bg-yellow-500/10 p-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-400">Price per token</span>
                            <span className="text-yellow-500">${selectedPhase.price}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-neutral-400">Bonus tokens</span>
                            <span className="text-green-500">+{calculateBonus()} PLHH</span>
                          </div>
                          <div className="mt-2 flex justify-between border-t border-yellow-500/20 pt-2 text-base font-medium">
                            <span className="text-neutral-400">Total</span>
                            <span className="text-yellow-500">${calculateTotal().toFixed(4)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Select Payment Method</Label>
                      <Select>
                        <SelectTrigger className="border-yellow-500/20 bg-black/40">
                          <SelectValue placeholder="Select cryptocurrency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sui">
                            <div className="flex items-center gap-2">
                              <Bitcoin className="h-4 w-4" />
                              SUI
                            </div>
                          </SelectItem>
                          
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                      onClick={() => setShowConfirmation(true)}
                    >
                      Buy Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="fiat">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-yellow-500/20 p-4">
                      <div className="flex items-center gap-2 text-yellow-500">
                        <Info className="h-5 w-5" />
                        <span>KYC verification required for fiat purchases</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
                    >
                      Complete KYC
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trading Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">Trading Options</CardTitle>
              <CardDescription>Trade PLHH tokens on our supported exchanges</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-yellow-500/20 p-4">
                <h3 className="mb-2 font-semibold text-yellow-500">Integrated Exchanges</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    PancakeSwap
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Uniswap
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-yellow-500/20 p-4">
                <h3 className="mb-2 font-semibold text-yellow-500">Peer-to-Peer Trading</h3>
                <p className="text-sm text-neutral-400">Trade directly with other users on our secure P2P platform</p>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
                >
                  View P2P Market
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>

      {/* Transaction Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="border-yellow-500/20 bg-black/90 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-yellow-500">Confirm Purchase</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to purchase {amount} PLHH tokens for ${calculateTotal().toFixed(4)}. This transaction cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-yellow-500 text-black hover:bg-yellow-600">
              Confirm Purchase
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

