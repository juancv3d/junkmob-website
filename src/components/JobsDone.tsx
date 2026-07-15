"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Truck } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import ImageComparison from "./ui/ImageComparison";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const jobs = [
  {
    id: "garage",
    before: `${basePath}/pic1_bfr.jpg`,
    after: `${basePath}/pic1_after.jpg`,
    title: "Garage Cleanout",
    description: "Complete garage cleared of accumulated junk and debris",
  },
  {
    id: "yard",
    before: `${basePath}/pic2_bfr.jpg`,
    after: `${basePath}/pic2_after.jpg`,
    title: "Yard Debris Removal",
    description: "Overgrown yard waste and wood scraps hauled away",
  },
  {
    id: "shed",
    before: `${basePath}/pic3_bfr.jpg`,
    after: `${basePath}/pic3_after.jpg`,
    title: "Shed & Furniture Removal",
    description: "Old furniture and storage items removed from shed",
  },
];

const highlights = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Same-day service",
    description: "We arrive within hours, not days. Your space cleared fast.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Spotless results",
    description: "We don't just haul — we leave your space broom-clean.",
  },
  {
    icon: <Check className="w-5 h-5" />,
    title: "Eco-friendly disposal",
    description: "70%+ of items recycled or donated. Responsible removal.",
  },
];

export default function JobsDone() {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section
      id="jobs-done"
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0d1f0d 0%, #0a1a0a 50%, #0d1f0d 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Content panel */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <AnimatedHeading
              as="h2"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Jobs Done
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg max-w-md"
            >
              See the difference we make. Drag the slider to reveal the
              transformation.
            </motion.p>

            {/* Highlights */}
            <div className="mt-2 grid gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-white/5 border border-white/10 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#4CAF50] mt-0.5">{h.icon}</span>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {h.title}
                      </p>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {h.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Job navigation tabs */}
            <div className="flex gap-2 mt-4">
              {jobs.map((job, i) => (
                <button
                  key={job.id}
                  onClick={() => setActiveJob(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeJob === i
                      ? "bg-[#2E7D32] text-white shadow-lg shadow-[#2E7D32]/30"
                      : "bg-white/10 text-gray-300 hover:bg-white/15"
                  }`}
                >
                  {job.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Slider */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={jobs[activeJob].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
              >
                <ImageComparison
                  beforeSrc={jobs[activeJob].before}
                  afterSrc={jobs[activeJob].after}
                />
              </motion.div>
            </AnimatePresence>

            {/* Active job caption */}
            <motion.p
              key={`caption-${activeJob}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm mt-3"
            >
              {jobs[activeJob].description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
