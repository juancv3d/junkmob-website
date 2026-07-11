"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const steps = [
  {
    number: "1",
    title: "Book Online or Call",
    description: "Tell us what you need removed. Get a free, no-obligation quote in minutes.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "We Show Up & Haul",
    description: "Our crew arrives on time, loads everything up, and cleans the area.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Junk Disappears",
    description: "We dispose of everything responsibly — recycling and donating whenever possible.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function CountUp({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      setDisplay(value.toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { target: 500, suffix: "+", label: "Happy Customers", decimals: 0 },
  { target: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { target: 100, suffix: "%", label: "Licensed & Insured", decimals: 0 },
  { target: 24, suffix: "hr", label: "Response Time", decimals: 0 },
];

function StatsCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((item) => (
        <div key={item.label} className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="text-4xl sm:text-5xl font-black text-accent-gold">
            <CountUp target={item.target} suffix={item.suffix} decimals={item.decimals} />
          </div>
          <div className="text-sm text-gray mt-2 font-medium">{item.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <AnimatedHeading className="text-4xl sm:text-5xl font-black text-primary-dark">
            How It Works
          </AnimatedHeading>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            Three simple steps to a junk-free space.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting dashed line between circles */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full border-t-2 border-dashed border-primary/30" />
          </div>

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto w-20 h-20 bg-primary-dark rounded-full flex items-center justify-center text-white shadow-xl mb-6">
                {step.icon}
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold text-sm -mt-2 -ml-8 z-20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <StatsCounter />
      </div>
    </section>
  );
}
