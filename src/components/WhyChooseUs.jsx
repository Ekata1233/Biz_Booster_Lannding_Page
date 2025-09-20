"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaShieldAlt, 
  FaUsers, 
  FaHandsHelping, 
  FaUserTie, 
  FaSmile,
  FaMoneyBillWave,
  FaArrowsAlt,
  FaSeedling,
  FaHome,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

const WhyChooseUs = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Trusted Experts",
      icon: <FaUserTie className="text-xl sm:text-2xl" />,
      points: [
        "Years of experience and successful track record.",
        "Known for dependability, consistency, and efficacy.",
        "Collaborate with diverse clients to gain industry experience.",
        "Capable of effectively addressing specific business difficulties.",
        "Provide personalized, unique solutions that correspond with customer goals."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Customer Approach",
      icon: <FaSmile className="text-xl sm:text-2xl" />,
      points: [
        "Customer satisfaction is our primary focus.",
        "Customized services suited to customer needs and goals.",
        "Dedicated assistance along the journey.",
        "We support you until your success.",
        "Focus on long-term relationship."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Refundable Policy",
      icon: <FaMoneyBillWave className="text-xl sm:text-2xl" />,
      points: [
        "Enjoy total assurance and peace of mind with our 100% refundable satisfaction guarantee.",
        "A trust-building policy that promotes mutual regard among clients.",
        "Ensure a seamless and joyful franchise journey.",
        "Committed to providing exceptional quality and service.",
        "Align with client goals for successful collaboration."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Flexible & Scalable",
      icon: <FaArrowsAlt className="text-xl sm:text-2xl" />,
      points: [
        "Customized solutions for all stages: startups, individuals, and existing businesses.",
        "Offers innovative growth options for new firms.",
        "Individuals may earn extra cash.",
        "Provides tailored help with an adaptive approach.",
        "Prioritize long-term success across several business contexts."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Innovative Growth",
      icon: <FaSeedling className="text-xl sm:text-2xl" />,
      points: [
        "Quality as a core value – the foundation of our culture.",
        "Delivered excellence in every aspect, including challenging tasks.",
        "Adherence to industry standards is ensured by rigorous methods.",
        "Commitment to delivering exceptional outcomes that exceed expectations.",
        "Prioritize achieving long-term client success."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Work From Home",
      icon: <FaHome className="text-xl sm:text-2xl" />,
      points: [
        "Work where you want, work when you want.",
        "No infrastructure needed.",
        "Improves your professional and lifestyle balance.",
        "It increases your productivity which leads to greater focus and efficiency.",
        "Flexible work hours."
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "At FetchTrue",
      icon: <FaStar className="text-xl sm:text-2xl" />,
      points: [
        "We have multi sector topics.",
        "Lifetime free training.",
        "Provide you earning opportunity.",
        "Unlock earning potential more than ₹1,00,000/month.",
        "Guide you to become financial free."
      ],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-sky-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Why Choose Us</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for businesses and individuals seeking growth and success.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Category Selector - Horizontal on mobile, vertical on larger screens */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:sticky lg:top-24">
              <h3 className="font-semibold text-lg mb-4 text-gray-800 hidden lg:block">Our Advantages</h3>
              
              {/* Horizontal scroll for mobile */}
              <div className="flex overflow-x-auto pb-2 lg:pb-0 lg:block lg:space-y-2 space-x-2 lg:space-x-0 hide-scrollbar">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex-shrink-0 py-2 px-3 lg:py-3 lg:px-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeCategory === index
                        ? `text-white bg-gradient-to-r ${category.color} shadow-md`
                        : "text-gray-700 bg-gray-100 lg:bg-transparent lg:hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2 lg:mr-3">{category.icon}</span>
                    <span className="font-medium text-sm lg:text-base whitespace-nowrap">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${categories[activeCategory].color} p-4 sm:p-6 text-white`}>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    {categories[activeCategory].icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{categories[activeCategory].title}</h3>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <ul className="space-y-3 sm:space-y-4">
                  {categories[activeCategory].points.map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <FaCheckCircle className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-6 border border-blue-100"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-lg mr-2 sm:mr-3">
                    <FaBolt className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Fast & Reliable</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Quick processing and dependable service to keep your work seamless.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-green-100 p-1 sm:p-2 rounded-lg mr-2 sm:mr-3">
                    <FaShieldAlt className="text-green-600 text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-green-800 text-sm sm:text-base">Secure Platform</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">We ensure safety with top-notch security standards.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 sm:p-6 border border-purple-100"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-purple-100 p-1 sm:p-2 rounded-lg mr-2 sm:mr-3">
                    <FaUsers className="text-purple-600 text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Wide Network</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Connect with businesses across the nation for growth.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;