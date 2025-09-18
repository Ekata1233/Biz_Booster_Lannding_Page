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
      title: "Proven Expert",
      description: "With our expertise in industries, our team deliver you a professional and innovative solution, expert guidance and growth."
    },
    {
      icon: <FaChartLine className="text-2xl md:text-3xl" />,
      title: "Customer Approach",
      description: "We value your satisfaction, with our tailored service that fits your needs. We provide you full support at each step."
    },
    {
      icon: <FaSync className="text-2xl md:text-3xl" />,
      title: "Refundable Policy",
      description: "Our service provides you guarantee full refundable if you're not satisfied. This policy serves as a trust among the customer."
    },
    {
      icon: <FaRocket className="text-2xl md:text-3xl" />,
      title: "Flexible and Scale",
      description: "Whether you're a start-up or looking for extra income or established enterprise, our solution is scalable to match your needs."
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
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 md:p-4 bg-blue-100 rounded-full mt-1"
                  >
                    {features[currentFeature].icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg md:text-xl mb-2">
                      {features[currentFeature].title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {features[currentFeature].description}
                    </p>
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
            <motion.div 
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}