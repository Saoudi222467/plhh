"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Check, Clock, FileText, Users, ArrowRight, AlertCircle } from "lucide-react"

// Sample active proposals
const activeProposals = [
  {
    id: 1,
    title: "Increase Staking Rewards by 2%",
    description: "Proposal to increase the annual staking rewards from 8% to 10% to incentivize long-term holding.",
    votesFor: 2800000,
    votesAgainst: 1200000,
    totalVotes: 4000000,
    status: "active", // active, passed, rejected
    timeRemaining: "2 days",
    category: "Treasury",
  },
  {
    id: 2,
    title: "Add New Metaverse Region",
    description: "Expand the PLHH metaverse with a new mountain region featuring exclusive land plots and experiences.",
    votesFor: 3500000,
    votesAgainst: 500000,
    totalVotes: 4000000,
    status: "active",
    timeRemaining: "5 days",
    category: "Metaverse",
  },
  {
    id: 3,
    title: "Community Fund Allocation",
    description: "Allocate 100,000 PLHH from the community fund to support environmental conservation projects.",
    votesFor: 2900000,
    votesAgainst: 1100000,
    totalVotes: 4000000,
    status: "passed",
    timeRemaining: "Completed",
    category: "Community",
  },
]

// Governance process steps
const governanceSteps = [
  {
    icon: FileText,
    title: "Submit Proposal",
    description: "Community members with at least 10,000 PLHH can submit governance proposals.",
  },
  {
    icon: Users,
    title: "Community Discussion",
    description: "7-day discussion period for community feedback and proposal refinement.",
  },
  {
    icon: Check,
    title: "Token-Weighted Voting",
    description: "Votes are weighted by PLHH holdings, ensuring fair representation.",
  },
  {
    icon: AlertCircle,
    title: "Execution Threshold",
    description: "Proposals require 66% approval and 10% quorum to pass and be executed.",
  },
]

export function GovernanceSection() {
  const [selectedProposal, setSelectedProposal] = useState(activeProposals[0])

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-neutral-900/50 to-black">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <Reveal width="100%">
          <h2 className="mb-4 text-center font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Community Governance
            </span>
          </h2>
        </Reveal>

        <Reveal width="100%">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-neutral-300 text-lg">
              PLHH is governed by its community. Token holders can propose, discuss, and vote on changes to the
              protocol, with voting power proportional to their holdings. This ensures the project evolves according to
              the collective vision.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="proposals">
          {/* Active Proposals */}
          <Reveal width="100%" className="lg:col-span-2">
            <Card className="border-yellow-500/10 bg-black/50 backdrop-blur-sm h-full" >
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Active Proposals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProposals.map((proposal) => (
                  <motion.div
                    key={proposal.id}
                    whileHover={{ scale: 1.01 }}
                    className={`cursor-pointer rounded-lg border p-4 transition-all ${
                      selectedProposal.id === proposal.id
                        ? "border-yellow-500/40 bg-yellow-500/5"
                        : "border-yellow-500/10 bg-black/30 hover:border-yellow-500/20"
                    }`}
                    onClick={() => setSelectedProposal(proposal)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-white">{proposal.title}</h3>
                        <span className="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">
                          {proposal.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-3 w-3 text-neutral-400" />
                        <span className="text-neutral-400">{proposal.timeRemaining}</span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-400">For: {(proposal.votesFor / 1000000).toFixed(1)}M PLHH</span>
                        <span className="text-red-400">
                          Against: {(proposal.votesAgainst / 1000000).toFixed(1)}M PLHH
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-400"
                          style={{ width: `${(proposal.votesFor / proposal.totalVotes) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-sm text-neutral-400 line-clamp-2">{proposal.description}</div>
                  </motion.div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
                >
                  View All Proposals
                </Button>
              </CardFooter>
            </Card>
          </Reveal>

          {/* Selected Proposal Details */}
          <Reveal width="100%">
            <Card className="border-yellow-500/10 bg-black/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-yellow-500">Proposal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{selectedProposal.title}</h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Status:</span>
                    <span
                      className={`font-medium ${
                        selectedProposal.status === "passed"
                          ? "text-green-500"
                          : selectedProposal.status === "rejected"
                            ? "text-red-500"
                            : "text-yellow-500"
                      }`}
                    >
                      {selectedProposal.status.charAt(0).toUpperCase() + selectedProposal.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Category:</span>
                    <span className="font-medium text-white">{selectedProposal.category}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Time Remaining:</span>
                    <span className="font-medium text-white">{selectedProposal.timeRemaining}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Total Votes:</span>
                    <span className="font-medium text-white">
                      {(selectedProposal.totalVotes / 1000000).toFixed(1)}M PLHH
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Description</h4>
                  <p className="text-neutral-300 text-sm">{selectedProposal.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Current Results</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>For</span>
                        <span>{((selectedProposal.votesFor / selectedProposal.totalVotes) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress
                        value={(selectedProposal.votesFor / selectedProposal.totalVotes) * 100}
                        className="h-2 bg-neutral-800"
                      >
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                      </Progress>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Against</span>
                        <span>{((selectedProposal.votesAgainst / selectedProposal.totalVotes) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress
                        value={(selectedProposal.votesAgainst / selectedProposal.totalVotes) * 100}
                        className="h-2 bg-neutral-800"
                      >
                        <div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
                      </Progress>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-600 hover:to-yellow-600">
                  Cast Your Vote
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        </div>

        {/* Governance Process */}
        <Reveal width="100%" >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center font-montserrat text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                How Governance Works
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governanceSteps.map((step, index) => (
                <Card key={index} className="border-yellow-500/10 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-black" />
                    </div>
                    <h4 className="text-yellow-500 font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-neutral-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal width="100%">
          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 text-black transition-all hover:scale-105 hover:from-amber-600 hover:to-yellow-600"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.5,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Connect Wallet to Participate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

