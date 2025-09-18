"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaChartLine, FaSync, FaRocket, FaHandshake } from 'react-icons/fa';

export default function DownloadBanner() {
  const [stats, setStats] = useState({ businesses: 0, franchises: 0, growth: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <FaCrown className="text-2xl md:text-3xl" />,
      title: "Trusted Experts",
      description: ["✅ Years of experience and successful track record.",
                 "✅ Known for dependability, consistency, and efficacy.",
                 "✅ Collaborate with diverse clients to gain industry experience.",
                 "✅ Capable of effectively addressing specific business difficulties.",
                 "✅ Provide personalized, unique solutions that correspond with customer goals."
      ]
    },
    {
      icon: <FaChartLine className="text-2xl md:text-3xl" />,
      title: "Customer Approach",
      description: ["✅ Customer satisfaction is our primary focus.",
                  "✅ Customized services suited to customer needs and goals.",
                  "✅ Dedicated assistance along the journey.",
                  "✅ We support you until your success.",
                  "✅ Focus on long-term relationship."
      ]
    },
    {
      icon: <FaSync className="text-2xl md:text-3xl" />,
      title: "Our Refundable Policy ",
      description: ["✅ Enjoy total assurance and peace of mind with our 100% refundable satisfaction guarantee.",
                  "✅ A trust-building policy that promotes mutual regard among clients.",
                  "✅ Ensure a seamless and joyful franchise journey.  ",
                  "✅ Committed to providing exceptional quality and service.",
                  "✅ Align with client goals for successful collaboration."
      ]
    },
    {
      icon: <FaRocket className="text-2xl md:text-3xl" />,
      title: "Flexible and Scalable",
      description: ["✅ Customized solutions for all stages: startups, individuals, and existing businesses.",
                 "✅ Offers innovative growth options for new firms.",
                 "✅ Individuals may earn extra cash.",
                 "✅ Provides tailored help with an adaptive approach.",
                 "✅ Prioritize long-term success across several business contexts."
      ]      
    },
     {
      icon: <FaRocket className="text-2xl md:text-3xl" />,
      title: "Innovative Growth",
      description: ["✅ Quality as a core value – the foundation of our culture. ",
                 "✅ Delivered excellence in every aspect, including challenging tasks.",
                 "✅ Adherence to industry standards is ensured by rigorous methods.",
                 "✅ Commitment to delivering exceptional outcomes that exceed expectations.",
                 "✅ Prioritize achieving long-term client success."
      ]      
    },
     {
      icon: <FaRocket className="text-2xl md:text-3xl" />,
      title: "Work From Home",
      description: ["✅ Work where you want, work when you want.",
                 "✅ No infrastructure needed.",
                 "✅ Improves your professional and lifestyle balance..",
                 "✅ It increase your productivity which leads to greater focus and efficiency.",
                 "✅ Flexible work hours."
      ]      
    },
     {
      icon: <FaRocket className="text-2xl md:text-3xl" />,
      title: "At FetchTrue",
      description: ["✅ We have multi sector topics",
                 "✅ Lifetime free training.",
                 "✅ Provide you earning opportunity..",
                 "✅ Unlock earning potential more than ₹1,00,000/month.",
                 "✅ Guide you to become financial free."
      ]      
    }
  ];

  useEffect(() => {
    // Counter animation for stats
    const interval = setInterval(() => {
      setStats(prev => ({
        businesses: prev.businesses < 5000 ? prev.businesses + 100 : 5000,
        franchises: prev.franchises < 250 ? prev.franchises + 5 : 250,
        growth: prev.growth < 78 ? prev.growth + 1 : 78
      }));
    }, 50);

    // Feature rotation
    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-4xl bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="bg-gradient-to-r from-[#00509D] to-[#007ACC] text-white p-6 md:p-8 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-16 -left-16 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-12 -right-12 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full"
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center gap-3 mb-4 md:mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="p-2 md:p-3 bg-[#003f88] rounded-full"
              >
                <FaHandshake className="text-xl md:text-2xl" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-bold">Fetch True</h1>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-3xl font-semibold mb-3 md:mb-4"
            >
              India's most Trusted Franchise Platform
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg max-w-2xl mx-auto opacity-90"
            >
              Connect, manage, and grow your franchise network with our powerful platform
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Why Choose FetchTrue?</h3>
            
            {/* Animated Feature Showcase */}
            <div className="h-40 md:h-48 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 md:gap-5 absolute w-full"
                >
                  {/* <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 md:p-4 bg-blue-100 rounded-full mt-1"
                  >
                    {features[currentFeature].icon}
                  </motion.div> */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-800 text-lg md:text-xl mb-2">
                      {features[currentFeature].title}
                    </h4>
                    <ul className=" pl-5 text-gray-600 text-sm md:text-base space-y-1 ">
                      {features[currentFeature].description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Feature Indicators */}
            <div className="flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === currentFeature ? 'bg-[#00509D] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Stats Section */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mt-8 text-center"
            >
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-[#00509D]">{stats.businesses}+</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Businesses</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-[#00509D]">{stats.franchises}+</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Franchises</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-[#00509D]">{stats.growth}%</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Growth Rate</div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}