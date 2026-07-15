"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import ImageComparison from "./ui/ImageComparison";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const jobs = [
  {
    before: `${basePath}/pic1_bfr.jpg`,
    after: `${basePath}/pic1_after.jpg`,
    title: "Garage Cleanout",
  },
  {
    before: `${basePath}/pic2_bfr.jpg`,
    after: `${basePath}/pic2_after.jpg`,
    title: "Yard Debris Removal",
  },
  {
    before: `${basePath}/pic3_bfr.jpg`,
    after: `${basePath}/pic3_after.jpg`,
    title: "Shed & Furniture Removal",
  },
];

export default function JobsDone() {
  return (
    <section
      id="jobs-done"
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0d1f0d 0%, #0a1a0a 50%, #0d1f0d 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Jobs Done
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/30">
                <ImageComparison
                  beforeSrc={job.before}
                  afterSrc={job.after}
                />
              </div>
              <p className="text-center text-gray-400 text-sm mt-3 font-medium">
                {job.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
