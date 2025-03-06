"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useState } from "react";

// Define the type for tokenomics data
interface TokenomicsData {
  category: string;
  percentage: number;
  description: string;
  color: string;
}

const tokenomics: TokenomicsData[] = [
  {
    category: "Presale & Staking Rewards",
    percentage: 44,
    description: "440M PLHH",
    color: "#F59E0B",
  },
  {
    category: "Ecosystem Development",
    percentage: 22,
    description: "220M PLHH",
    color: "#FBBF24",
  },
  {
    category: "Liquidity Pool",
    percentage: 11,
    description: "110M PLHH",
    color: "#FCD34D",
  },
  {
    category: "Community Projects",
    percentage: 11,
    description: "110M PLHH",
    color: "#FBBF24",
  },
  {
    category: "Team Advisors",
    percentage: 11,
    description: "110M PLHH",
    color: "#FDE68A",
  },
  {
    category: "Gifts",
    percentage: 1,
    description: "10M PLHH",
    color: "#FEF3C7",
  },
];

export function TokenomicsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 border border-yellow-500/30 rounded-lg p-3 shadow-lg pointer-events-none">
          <p className="font-semibold text-yellow-500">{payload[0].name}</p>
          <p className="text-white">{`${payload[0].value}%`}</p>
          <p className="text-sm text-neutral-400">
            {
              tokenomics.find((item) => item.category === payload[0].name)
                ?.description
            }
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-black"
      id="tokenomics"
    >
     

      <Container className="relative z-10 flex flex-col justify-center items-center">
        <Reveal>
          <h2 className="mb-12 text-center font-montserrat text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Token Distribution
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
  {/* Pie Chart Section */}
  <Reveal className="w-full">
    <Card className="w-full border-yellow-500/10 bg-black/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <h3 className="text-center font-montserrat text-xl font-semibold text-yellow-500 mb-4">
          Distribution Overview
        </h3>
        <div className="w-full" style={{ minHeight: "300px" }}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={tokenomics}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="percentage"
                nameKey="category"
                onMouseEnter={onPieEnter}
                labelLine={false}
              >
                {tokenomics.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="rgba(0,0,0,0.3)"
                    style={{
                      filter: `drop-shadow(0px 0px 8px ${entry.color}80)`,
                      transform:
                        index === activeIndex ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "10px" }}
                formatter={(value) => (
                  <span className="text-sm text-neutral-300">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </Reveal>

  {/* Bar Chart Section */}
  <div className="mx-auto max-w-4xl w-full">
    <Card className="w-full border-yellow-500/10 bg-black/50 backdrop-blur-sm">
      <CardContent className="w-full p-6">
        <div className="w-full space-y-6">
          {tokenomics.map((item, index) => (
            <Reveal key={index} width="100%" className="w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full rounded-lg border border-yellow-500/10 bg-black/20 p-4"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between">
                  <h3 className="font-montserrat text-lg font-semibold text-yellow-500">
                    {item.category}
                  </h3>
                  <span className="font-mono text-2xl font-bold">
                    {item.percentage}%
                  </span>
                </div>
                <div className="mb-2 h-2 overflow-hidden rounded-full bg-yellow-500/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r from-amber-500 to-yellow-500`}
                    style={{
                      opacity: item.percentage / 50 + 0.5,
                    }}
                  />
                </div>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
</div>

      </Container>
    </section>
  );
}
