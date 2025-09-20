"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaCubes,
  FaChartLine,
  FaHandHoldingUsd,
  FaHeadset,
  FaUserCheck,
  FaUndoAlt
} from "react-icons/fa";

const WhyChooseFetchTrue = () => {
  const featureCards = [
    {
      title: "All-in-One Platform",
      description: "From business setup, finance, IT, legal, education, to on-demand services — everything under one trusted network.",
      icon: <FaCubes className="text-blue-600 text-2xl" />,
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      titleColor: "text-blue-800",
      animationDelay: 0.1
    },
    {
      title: "High Earning Potential",
      description: "Earn through client referrals, service sales, and franchise deals with earn up to ₹1,00,000.",
      icon: <FaChartLine className="text-green-600 text-2xl" />,
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      titleColor: "text-green-800",
      animationDelay: 0.2
    },
    {
      title: "Risk-Free Opportunity",
      description: "No heavy investments required; just connect clients and providers to start earning.",
      icon: <FaHandHoldingUsd className="text-amber-600 text-2xl" />,
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-100",
      titleColor: "text-amber-800",
      animationDelay: 0.3
    },
    {
      title: "Full Support System",
      description: "Training, guidance, and ready-made resources to help you succeed as a Growth Partner.",
      icon: <FaHeadset className="text-purple-600 text-2xl" />,
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      titleColor: "text-purple-800",
      animationDelay: 0.4
    },
    {
      title: "Verified & Trusted Network",
      description: "Only verified service providers and brands, ensuring quality, reliability, and faster results.",
      icon: <FaUserCheck className="text-indigo-600 text-2xl" />,
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-100",
      titleColor: "text-indigo-800",
      animationDelay: 0.5
    },
    {
      title: "Guarantee Return",
      description: "We provide 5X guarantee return if your earning is less than ₹5,00,000 in 3 years.",
      icon: <FaUndoAlt className="text-red-600 text-2xl" />,
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-100",
      titleColor: "text-red-800",
      animationDelay: 0.6
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Why Choose FetchTrue</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make us the ideal choice for your business growth and success
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {featureCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${card.bgGradient} rounded-xl p-6 border ${card.borderColor} shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center text-center`}
            >
              <div className="bg-white p-4 rounded-full shadow-md mb-5">
                {card.icon}
              </div>
              <h3 className={`font-bold ${card.titleColor} text-xl mb-3`}>{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 max-w-2xl mx-auto">Join thousands of satisfied clients who have experienced the FetchTrue advantage</p>
            <Link href="#contact">
             <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-50 transition-colors">
              Connect With Us
            </button>
            </Link>

           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseFetchTrue;