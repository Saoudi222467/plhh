"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

export function AboutSection() {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-20 md:py-28" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <div className="max-w-xl">
                <div className="mb-6">
                  <motion.span
                    className="text-yellow-500 text-sm font-medium mb-2 block text-center sm:text-left"
                    variants={fadeIn}
                    custom={0}
                  >
                    A Movement, Not Just a Cryptocurrency
                  </motion.span>
                  <motion.h2
                    className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-4xl md:text-5xl font-bold text-transparent text-center sm:text-left"
                    variants={fadeIn}
                    custom={1}
                  >
                    About Us
                  </motion.h2>
                </div>

                <motion.p
                  className="text-neutral-300 mb-4"
                  variants={fadeIn}
                  custom={2}
                >
                  PLHH Coin is not just a tool for financial transactions; it is
                  a comprehensive ecosystem designed to drive real-world impact.
                  By combining innovative technology with a deep commitment to
                  social and ecological responsibility, PLHH Coin bridges the
                  gap between economic growth and sustainability. Every
                  transaction made within the PLHH ecosystem contributes
                  directly to initiatives that protect the environment, support
                  underprivileged communities, and promote global equality.
                </motion.p>

                <motion.p
                  className="text-neutral-300 mb-4"
                  variants={fadeIn}
                  custom={3}
                >
                  The coin's decentralized framework empowers individuals,
                  removing the need for intermediaries and enabling complete
                  financial autonomy. By prioritizing transparency and
                  accountability, PLHH builds trust among its community members
                  and ensures that every action aligns with its core mission.
                </motion.p>

                <motion.p
                  className="text-neutral-300 mb-4"
                  variants={fadeIn}
                  custom={4}
                >
                  Through community governance, PLHH Coin gives its holders a
                  voice in shaping the ecosystem's future. Members can propose
                  initiatives, vote on funding allocations, and influence the
                  direction of ecological and humanitarian projects.
                </motion.p>

                <motion.p
                  className="text-neutral-300 mb-6"
                  variants={fadeIn}
                  custom={5}
                >
                  Ultimately, PLHH Coin seeks to redefine what it means to be a
                  cryptocurrency. It is not just about financial gains but about
                  fostering a sense of global connection and purpose. PLHH aims
                  to unite people from all walks of life under a shared vision
                  for a harmonious world, demonstrating that financial
                  innovation and compassion can coexist to create a brighter,
                  more equitable future.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                  variants={fadeIn}
                  custom={6}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 text-black transition-all hover:scale-105 hover:from-amber-600 hover:to-yellow-600"
                    onClick={() =>
                      document.getElementById("wallet-connect")?.click()
                    }
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
                    <span className="relative z-10">Connect</span>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-500/20 text-yellow-500 transition-all hover:scale-105 hover:bg-yellow-500/10"
                  >
                    Whitelist Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 blur-xl" />
                <Image
                  src="/about_img.png"
                  alt="About PLHH Coin"
                  width={500}
                  height={500}
                  className="relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
          >
            <motion.span
              className="text-yellow-500 text-sm font-medium mb-2 block"
              variants={fadeIn}
              custom={0}
            >
              Empowering Humanity, Restoring Nature
            </motion.span>
            <motion.h2
              className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-4xl md:text-5xl font-bold text-transparent mb-6"
              variants={fadeIn}
              custom={1}
            >
              Mission Statement
            </motion.h2>

            <motion.p className="text-neutral-300" variants={fadeIn} custom={2}>
              Our mission is to establish a decentralized financial system built
              on trust, fairness, and transparency. By returning control to
              individuals and funding projects that restore ecological balance,
              PLHH Coin serves as a catalyst for global equality and harmony. We
              envision a world where financial systems uplift humanity and
              protect the planet, ensuring peace, love, and harmony for
              generations to come.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 flex flex-col items-center">
        <div className="container mx-auto px-4 text-center">
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
              Empowering Humanity, Restoring Nature
            </motion.span>
            <motion.h2
              className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-4xl md:text-5xl font-bold text-transparent"
              variants={fadeIn}
              custom={1}
            >
              Core Values
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Peace",
                description:
                  "Fostering global unity through decentralized finance to build a more inclusive financial ecosystem.",
                bgImage: "/bgabout.avif",
              },
              {
                number: "02",
                title: "Love",
                description:
                  "Supporting individuals and communities by creating systems that prioritize people over profit.",
                bgImage: "/bgabout.avif",
              },
              {
                number: "03",
                title: "Eternity",
                description:
                  "Symbolizing timeless peace and a commitment to enduring stability and cooperation.",
                bgImage: "/bgabout.avif",
              },
              {
                number: "04",
                title: "Harmony",
                description:
                  "Restoring balance by funding ecological projects and reconnecting humanity with the natural world.",
                bgImage: "/bgabout.avif",
              },
              {
                number: "05",
                title: "Infinity",
                description:
                  "Emphasizing limitless love, inclusivity, and boundless potential for growth and connection.",
                bgImage: "/bgabout.avif",
              },
            ].map((value, index) => (
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
                  className="p-6 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm transition-all group-hover:border-yellow-500/40 group-hover:shadow-lg group-hover:shadow-yellow-500/10 relative flex flex-col items-center text-center"
                  style={{
                    backgroundImage: `url(${value.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                  <div className="relative z-10">
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                      {value.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white my-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-100 text-[1.2rem] font-bold">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
