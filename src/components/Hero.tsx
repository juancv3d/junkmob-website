"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PixelCanvas from "./ui/PixelCanvas";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const TRUST_ITEMS = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Licensed & Insured" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Same Day Service" },
  { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Eco-Friendly" },
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Pierce County" },
];

function ScrollIndicator() {
  return (
    <motion.div
      className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] bg-[#0a1f0d] flex flex-col justify-center items-center gap-6 py-8 md:py-0 px-2 sm:px-6 overflow-hidden select-none isolate">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .jm-glass-text {
          color: transparent;
          background: linear-gradient(135deg, rgba(200,164,21,1) 0%, rgba(255,255,255,0.9) 25%, rgba(200,164,21,0.4) 45%, rgba(255,255,255,1) 55%, rgba(200,164,21,0.6) 75%, rgba(255,255,255,0.9) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1px rgba(200,164,21,0.3);
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.5)) drop-shadow(0 5px 10px rgba(0,0,0,0.3));
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

      {/* Pixel Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelCanvas
          colors={[
            "rgba(27,94,32,0.4)",
            "rgba(27,94,32,0.3)",
            "rgba(46,125,50,0.3)",
            "rgba(46,125,50,0.2)",
            "rgba(200,164,21,0.5)",
          ]}
          gap={6}
          speed={25}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a1f0d_100%)] pointer-events-none opacity-75" />
      </div>

      {/* Top: Logo */}
      <div
        className={cn(
          "flex flex-col items-center justify-center order-1 mt-16 sm:mt-0 pointer-events-none transition-all duration-1000 transform",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        )}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={`${basePath}/junkmob-removebg-preview.png`}
            alt="Junk Mob Logo"
            width={140}
            height={140}
            className="mx-auto drop-shadow-[0_0_40px_rgba(200,164,21,0.5)] w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]"
            priority
          />
        </motion.div>
      </div>

      {/* Center: Glass Headline */}
      <div className="flex flex-col items-center justify-center text-center order-2 px-1 w-full pointer-events-none">
        <h1
          className={cn(
            "jm-glass-text flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 px-1 w-full flex-wrap text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl leading-none transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="font-serif italic font-medium">Junk</span>
          <span className="font-sans font-extrabold tracking-tighter">Disappears.</span>
        </h1>

        <p
          className={cn(
            "mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl font-light text-white/80 max-w-[95%] sm:max-w-md md:max-w-xl px-1 leading-relaxed transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "350ms" }}
        >
          Fast, affordable junk removal for homes and businesses.
          Same-day service available in Pierce County.
        </p>
      </div>

      {/* CTAs */}
      <div
        className={cn(
          "pointer-events-auto flex flex-row items-center justify-center gap-3 mt-2 md:mt-6 mb-14 sm:mb-16 order-3 transition-all duration-1000 transform px-1 z-20",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "500ms" }}
      >
        <Link
          href="sms:+19546554193?body=Hi%20Junk%20Mob!%20I%20need%20a%20quote%20for%20junk%20removal."
          className="relative inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#C8A415] to-[#a8890f] px-6 md:px-10 text-sm md:text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.15),0_12px_24px_rgba(200,164,21,0.3)] ring-1 ring-[#C8A415]/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          <span className="hidden sm:inline">Get Free Quote</span>
          <span className="sm:hidden">Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="tel:+19546554193"
          className="relative inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-white/10 to-white/5 px-6 md:px-10 text-sm md:text-base font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.05)] ring-1 ring-white/20 backdrop-blur-md transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call (954) 655-4193</span>
          <span className="sm:hidden">Call Now</span>
        </Link>
      </div>

      {/* Trust Marquee */}
      <div
        className={cn(
          "absolute bottom-4 sm:bottom-16 left-0 right-0 w-full z-10 pointer-events-none flex flex-col items-center justify-center gap-3 transition-all duration-1000 transform order-4",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "650ms" }}
      >
        <div className="relative w-full max-w-4xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max gap-8 sm:gap-12 py-2 animate-marquee">
            {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
              <div key={`${item.label}-${i}`} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-[#C8A415]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-white/70 text-xs sm:text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
