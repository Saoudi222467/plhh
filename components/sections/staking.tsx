"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
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
import { AlertTriangle, Clock } from "lucide-react"

const stakingTiers = [
  { years: 1, apy: 11 },
  { years: 2, apy: 22 },
  { years: 3, apy: 33 },
  { years: 4, apy: 44 },
  { years: 5, apy: 55 },
  { years: 6, apy: 66 },
  { years: 7, apy: 77 },
  { years: 8, apy: 88 },
]

export function StakingSection() {
  const [selectedYears, setSelectedYears] = useState(1)
  const [amount, setAmount] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  const calculateRewards = (amount: string, years: number) => {
    const principal = Number.parseFloat(amount) || 0
    const apy = stakingTiers.find((tier) => tier.years === years)?.apy || 0
    return (principal * apy * years) / 100
  }

  const calculateEarlyWithdrawalPenalty = (amount: string) => {
    const principal = Number.parseFloat(amount) || 0
    return (principal * 20) / 100 // 20% penalty
  }

  return (
    <section className="relative min-h-screen pt-24" id="staking">
      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)]" />
        
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-yellow-500"
          >
            Stake PLHH Tokens
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400"
          >
            Earn rewards by staking your PLHH tokens
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Staking Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-500">Stake Your Tokens</CardTitle>
                <CardDescription>Choose duration and amount to start earning rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Duration Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Staking Duration</Label>
                    <span className="text-sm text-yellow-500">
                      {selectedYears} {selectedYears === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                  <Slider
                    min={1}
                    max={8}
                    step={1}
                    value={[selectedYears]}
                    onValueChange={(value) => setSelectedYears(value[0])}
                    className="py-4"
                  />
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>1 Year</span>
                    <span>8 Years</span>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount to Stake</Label>
                  <div className="relative">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-yellow-500/20 bg-black/40 pr-16 text-yellow-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">PLHH</span>
                  </div>
                </div>

                {/* Staking Info */}
                {amount && (
                  <div className="rounded-lg border border-yellow-500/20 p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-400">APY</span>
                        <span className="text-sm text-yellow-500">
                          {stakingTiers.find((tier) => tier.years === selectedYears)?.apy}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-400">Total Rewards</span>
                        <span className="text-sm text-green-500">
                          +{calculateRewards(amount, selectedYears).toFixed(2)} PLHH
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-400">Lock Period</span>
                        <span className="text-sm text-yellow-500">
                          {selectedYears} {selectedYears === 1 ? "Year" : "Years"}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-yellow-500/20 pt-3">
                        <span className="text-sm text-neutral-400">Early Withdrawal Penalty</span>
                        <span className="text-sm text-red-500">
                          {calculateEarlyWithdrawalPenalty(amount).toFixed(2)} PLHH
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {!isApproved ? (
                    <Button
                      className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                      onClick={() => setIsApproved(true)}
                    >
                      Approve Contract
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                      onClick={() => setShowConfirmation(true)}
                    >
                      Stake Tokens
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Staking Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Current Stakes */}
            <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-500">Your Stakes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">Total Staked</span>
                    <span className="text-lg font-bold text-yellow-500">1,234 PLHH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">Total Rewards</span>
                    <span className="text-lg font-bold text-green-500">+123.45 PLHH</span>
                  </div>
                  <div className="rounded-lg border border-yellow-500/20 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-neutral-400">Next Reward</span>
                      <div className="flex items-center text-xs text-yellow-500">
                        <Clock className="mr-1 h-3 w-3" />
                        12h 34m
                      </div>
                    </div>
                    <Progress value={65} className="h-2 bg-yellow-500/20" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* APY Tiers */}
            <Card className="border-yellow-500/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-500">APY Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {stakingTiers.map((tier) => (
                    <div
                      key={tier.years}
                      className="flex items-center justify-between rounded-lg border border-yellow-500/20 p-2"
                    >
                      <span className="text-sm text-neutral-400">
                        {tier.years} {tier.years === 1 ? "Year" : "Years"}
                      </span>
                      <span className="text-sm text-yellow-500">{tier.apy}% APY</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>

      {/* Staking Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="border-yellow-500/20 bg-black/90 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-yellow-500">Confirm Staking</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>
                You are about to stake {amount} PLHH tokens for {selectedYears} {selectedYears === 1 ? "year" : "years"}
                .
              </p>
              <div className="rounded-lg border border-yellow-500/20 p-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">APY Rate</span>
                  <span className="text-yellow-500">
                    {stakingTiers.find((tier) => tier.years === selectedYears)?.apy}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Expected Rewards</span>
                  <span className="text-green-500">+{calculateRewards(amount, selectedYears).toFixed(2)} PLHH</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                <AlertTriangle className="h-4 w-4" />
                <span>Early withdrawal will result in a 20% penalty on staked amount.</span>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-yellow-500 text-black hover:bg-yellow-600">
              Confirm Staking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

