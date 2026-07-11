"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const services = [
  {
    title: "Residential",
    description: "Complete home cleanout services",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: ["Home cleanouts", "Garage & attic clearing", "Yard debris removal", "Estate cleanups", "Hoarding situations"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "Commercial",
    description: "Business & property services",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ["Office cleanouts", "Construction debris", "Warehouse clearing", "Property management"],
    span: "md:col-span-1",
    featured: false,
  },
  {
    title: "Special Items",
    description: "Heavy & unusual removals",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: ["Appliances & fridges", "Hot tubs & pianos", "Electronics & TVs", "Tires & scrap metal"],
    span: "md:col-span-1",
    featured: false,
  },
  {
    title: "Eco-Friendly",
    description: "We recycle & donate",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    items: ["Donation drop-off", "Recycling priority", "Responsible disposal", "Green certified"],
    span: "md:col-span-2",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <AnimatedHeading className="text-4xl sm:text-5xl font-black text-primary-dark">
            Our Services
          </AnimatedHeading>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            From single items to full property cleanouts, we handle it all.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl p-8 transition-all cursor-default overflow-hidden ${service.span} ${
                service.featured
                  ? "bg-gradient-to-br from-primary-dark to-primary text-white shadow-2xl"
                  : "bg-white shadow-lg border border-gray-100 hover:shadow-2xl"
              }`}
            >
              {/* Hover glow border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                service.featured
                  ? "shadow-[inset_0_0_30px_rgba(200,164,21,0.3)]"
                  : "shadow-[inset_0_0_30px_rgba(46,125,50,0.15)]"
              }`} />

              <div className={`mb-4 ${service.featured ? "text-accent-gold" : "text-primary"}`}>
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${service.featured ? "text-white" : "text-primary-dark"}`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 ${service.featured ? "text-white/70" : "text-gray"}`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${service.featured ? "text-white/90" : "text-gray"}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${service.featured ? "text-accent-gold" : "text-accent-gold"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Decorative gradient blob for featured card */}
              {service.featured && (
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-gold/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
