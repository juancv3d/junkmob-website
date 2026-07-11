"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedHeading({ children, className = "", as: Tag = "h2" }: AnimatedHeadingProps) {
  const text = typeof children === "string" ? children : null;

  if (!text) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    );
  }

  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
