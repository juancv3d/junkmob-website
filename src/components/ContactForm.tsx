"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does your pricing work?",
    answer: "We charge by the truck load — not by the hour. You only pay for the space your items take up in our trailer. We'll give you a free estimate before we start.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Pierce County including Tacoma, Lakewood, Puyallup, Federal Way, University Place, and surrounding areas.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day and next-day service depending on availability. Call or book online and we'll get to you as fast as possible.",
  },
  {
    question: "What items do you NOT accept?",
    answer: "We cannot take hazardous materials (chemicals, paint, asbestos), medical waste, or extremely heavy items like concrete slabs over 500lbs. If you're unsure, just ask!",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, Venmo, Zelle, and all major credit cards. Payment is due after the job is complete — you see the work first.",
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-primary-dark">
            Get a Free Quote
          </h2>
          <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within the hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Request Sent!</h3>
                  <p className="text-gray">We&apos;ll get back to you within the hour with a free quote.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    formData.append("access_key", "9e5a4598-79eb-4aa2-bf03-93b0c961b0a9");
                    formData.append("subject", "New Quote Request - Junk Mob");
                    formData.append("from_name", "Junk Mob Website");
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData,
                    });
                    if (res.ok) setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="(253) 555-1234"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Service Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="123 Main St, Tacoma WA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">What do you need removed?</label>
                    <textarea
                      name="description"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe the items you need hauled away..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-[1.02] shadow-lg text-lg"
                  >
                    Send Request
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-gray-50 transition-colors"
                  >
                    {faq.question}
                    <motion.svg
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      className="w-5 h-5 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
