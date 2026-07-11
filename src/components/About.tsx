"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  { name: "Mao", role: "Co-Founder", image: "/junkmob_Mao.jpg" },
  { name: "Jhon", role: "Co-Founder", image: "/junkmob_jhon.jpg" },
];

const gallery = ["/junkmob_pic1.jpg", "/junkmob_pic2.jpg", "/junkmob_pic3.jpg"];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-primary-dark">
            Meet The Crew
          </h2>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            Two guys with trucks, a trailer, and a mission to make your junk
            disappear. Locally owned, community driven.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-accent-gold font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
            On The Job
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gallery.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Junk Mob at work ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
