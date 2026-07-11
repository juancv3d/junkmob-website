"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Tacoma, WA",
    text: "They showed up same day and cleared my entire garage in under 2 hours. Incredible service!",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "Puyallup, WA",
    text: "Best junk removal in Pierce County. Fair pricing, no hidden fees, and they swept everything clean.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Lakewood, WA",
    text: "Used them for my rental property cleanout. Fast, professional, and great communication.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "University Place, WA",
    text: "Called at 9am, they were here by noon. Took everything including the old hot tub!",
    rating: 5,
  },
  {
    name: "Amanda T.",
    location: "Bonney Lake, WA",
    text: "Eco-friendly disposal was important to me. They donated usable items and recycled the rest.",
    rating: 5,
  },
  {
    name: "Carlos P.",
    location: "Federal Way, WA",
    text: "Property manager here — Junk Mob is my go-to for tenant cleanouts. Always reliable.",
    rating: 5,
  },
  {
    name: "Rachel W.",
    location: "Spanaway, WA",
    text: "They handled my mom's estate cleanout with such care and respect. Highly recommend.",
    rating: 5,
  },
  {
    name: "Tom B.",
    location: "Graham, WA",
    text: "Got rid of construction debris from my remodel. Competitive prices and super efficient team.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md mx-3">
      <Stars count={testimonial.rating} />
      <p className="mt-3 text-gray text-sm leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-dark/10 flex items-center justify-center">
          <span className="text-primary-dark font-bold text-sm">{testimonial.name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-primary-dark text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }: { items: typeof testimonials; direction?: "left" | "right" }) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden group">
      <motion.div
        className="flex"
        animate={{ x: direction === "left" ? [0, -50 * items.length + "%"] : [-50 * items.length + "%", 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-light to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-light to-transparent pointer-events-none" />
    </div>
  );
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <section className="py-24 bg-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <AnimatedHeading className="text-4xl sm:text-5xl font-black text-primary-dark">
            What Our Customers Say
          </AnimatedHeading>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            Join hundreds of happy customers across Pierce County.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={firstRow} direction="left" />
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
}
