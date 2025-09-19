"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaUsers, FaHandsHelping } from "react-icons/fa";

const reasons = [
  {
    icon: <FaBolt className="text-4xl text-white" />,
    title: "Fast & Reliable",
    desc: "Quick processing and dependable service to keep your work seamless.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Secure Platform",
    desc: "We ensure safety with top-notch security standards.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaUsers className="text-4xl text-white" />,
    title: "Wide Network",
    desc: "Connect with businesses across the nation for growth.",
    color: "from-blue-600 to-sky-500",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-white" />,
    title: "Dedicated Support",
    desc: "Our team is here to assist you anytime you need.",
    color: "from-indigo-500 to-blue-700",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-lg p-6 text-white bg-gradient-to-r ${reason.color} hover:scale-105 transform transition duration-300`}
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm opacity-90">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
