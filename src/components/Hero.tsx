"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Particle {
  width: number;
  height: number;
  left: string;
  top: string;
  xDrift: number;
  duration: number;
  delay: number;
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        width: Math.random() * 6 + 4,
        height: Math.random() * 6 + 4,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        xDrift: Math.random() * 20 - 10,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{ width: p.width, height: p.height, left: p.left, top: p.top }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.xDrift, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </motion.div>
  );
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.1, duration: 0.5 },
  }),
};

export default function Hero() {
  const headlineWords = ["We", "Make", "Your", "Junk"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ken Burns animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={`${basePath}/junkmob_pic3.jpg`}
          alt="Junk Mob truck and trailer"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/80 to-primary/50 animate-[gradientShift_8s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-16">
        {/* Floating animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={`${basePath}/junkmob-removebg-preview.png`}
              alt="Junk Mob Logo"
              width={160}
              height={160}
              className="mx-auto drop-shadow-[0_0_30px_rgba(200,164,21,0.4)] w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
            />
          </motion.div>
        </motion.div>

        {/* Headline with staggered word animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {/* Shimmer text effect on "Disappear" */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="relative inline-block text-accent-gold"
          >
            Disappear
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              style={{ WebkitBackgroundClip: "text" }}
            />
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light"
        >
          Fast, affordable junk removal for homes and businesses.
          <br className="hidden sm:block" />
          Same-day service available in Pierce County.
        </motion.p>

        {/* CTAs with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="sms:+19546554193?body=Hi%20Junk%20Mob!%20I%20need%20a%20quote%20for%20junk%20removal."
            className="relative bg-accent-gold hover:bg-accent-gold-light text-white font-bold px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(200,164,21,0.5)] hover:shadow-[0_0_50px_rgba(200,164,21,0.7)]"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-accent-gold/50"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative">Get Free Quote</span>
          </Link>
          <Link
            href="tel:+19546554193"
            className="border-2 border-white/70 text-white hover:bg-white hover:text-primary-dark font-bold px-10 py-5 rounded-full text-lg transition-all hover:scale-105 backdrop-blur-sm"
          >
            Call (954) 655-4193
          </Link>
        </motion.div>

        {/* Trust badges with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-8 sm:mt-14 mb-16 sm:mb-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Licensed & Insured" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Same Day Service" },
            { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Eco-Friendly" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
              </svg>
              <span className="text-white text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
