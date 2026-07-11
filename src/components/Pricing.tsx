"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Link from "next/link";

const tiers = [
  {
    name: "Small",
    description: "1–3 items like a couch, mattress, or appliance",
    price: "$85",
    startingAt: true,
    fill: 25,
    examples: ["Single furniture piece", "Mattress or box spring", "Appliance removal", "Small yard debris"],
  },
  {
    name: "Medium",
    description: "Partial room, garage cleanout, or multiple items",
    price: "$300",
    startingAt: true,
    fill: 55,
    popular: true,
    examples: ["Full room cleanout", "Garage or attic clearing", "Office furniture set", "Multiple large items"],
  },
  {
    name: "Full",
    description: "Full apartment, estate, or commercial cleanout",
    price: "$525",
    startingAt: true,
    fill: 100,
    examples: ["Apartment cleanout", "Estate or hoarding cleanup", "Construction debris", "Full property turnover"],
  },
];

const included = [
  "Loading, hauling, and disposal/recycling fees included",
  "Area swept clean after removal (leave-ready turnover standard)",
  "Photo updates available (before/after) upon request",
  "Same/next-day service when schedule allows",
];

const addOns = [
  "Heavy items or extra labor (stairs, long carries, disassembly)",
  "Light/heavy demolition with haul-away (shed/deck/fence/interior strip-outs)",
  "Moving assistance (furniture relocation, staging, unit-to-unit moves)",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <AnimatedHeading className="text-4xl sm:text-5xl font-black text-primary-dark">
            Simple Pricing
          </AnimatedHeading>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            Pay only for what you need. Final price confirmed after item review.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative rounded-2xl p-8 transition-shadow cursor-default ${
                tier.popular
                  ? "bg-primary-dark text-white shadow-2xl ring-2 ring-accent-gold scale-[1.02]"
                  : "bg-white shadow-lg border border-gray-100 hover:shadow-xl"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-gold text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Fill indicator */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`relative w-10 h-14 rounded-lg border-2 overflow-hidden ${tier.popular ? "border-accent-gold" : "border-primary/30"}`}>
                  <div
                    className={`absolute bottom-0 left-0 right-0 transition-all ${tier.popular ? "bg-accent-gold" : "bg-primary-light"}`}
                    style={{ height: `${tier.fill}%` }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl leading-tight">{tier.name}</h3>
                </div>
              </div>

              <p className={`text-sm mb-4 ${tier.popular ? "text-gray-300" : "text-gray"}`}>
                {tier.description}
              </p>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wide opacity-70">Starting at</span>
                <div className="text-4xl font-black mt-1">{tier.price}</div>
              </div>

              <ul className="space-y-2 mb-6">
                {tier.examples.map((ex) => (
                  <li key={ex} className={`flex items-center gap-2 text-sm ${tier.popular ? "text-white/85" : "text-gray"}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${tier.popular ? "text-accent-gold" : "text-primary"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {ex}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full text-center font-bold py-3 rounded-full transition-all hover:scale-[1.02] ${
                  tier.popular
                    ? "bg-accent-gold hover:bg-accent-gold-light text-white shadow-lg"
                    : "bg-primary-dark hover:bg-primary text-white"
                }`}
              >
                Get Quote
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* What's included + Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="font-bold text-xl text-primary-dark mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              What&apos;s Included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="font-bold text-xl text-primary-dark mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Common Add-Ons (Quoted Separately)
            </h3>
            <ul className="space-y-3">
              {addOns.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray">
                  <svg className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-xs text-gray"
        >
          Pricing assumes standard access. Send photos for an exact quote. Ask about PM partner discounts.
        </motion.p>
      </div>
    </section>
  );
}
