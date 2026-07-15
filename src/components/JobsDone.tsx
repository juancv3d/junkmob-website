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
    description: "Complete garage cleared of accumulated junk and debris",
  },
  {
    before: `${basePath}/pic2_bfr.jpg`,
    after: `${basePath}/pic2_after.jpg`,
    title: "Yard Debris Removal",
    description: "Overgrown yard waste and wood scraps hauled away",
  },
  {
    before: `${basePath}/pic3_bfr.jpg`,
    after: `${basePath}/pic3_after.jpg`,
    title: "Shed & Furniture Removal",
    description: "Old furniture and storage items removed from shed",
  },
];

export default function JobsDone() {
  return (
    <section id="jobs-done" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Jobs Done
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            See the difference we make. Drag the slider to reveal the transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm hover:border-[#4CAF50]/30 transition-colors">
                <ImageComparison
                  beforeSrc={job.before}
                  afterSrc={job.after}
                />
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
