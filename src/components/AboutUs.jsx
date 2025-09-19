"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import OurMission from "./OurMission";
import DownloadApp from "@/components/DownloadApp";


export default function AboutSection() {
  // Counter Animation for Stats
  const [stats, setStats] = useState({ users: 0, partners: 0, revenue: 0 });
  const [countersInView, setCountersInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!countersInView) return;

    const endValues = { users: 1500, partners: 200, revenue: 50 };
    const duration = 2000; // ms
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentValues = { users: 0, partners: 0, revenue: 0 };
    
    const interval = setInterval(() => {
      currentValues = {
        users: Math.min(endValues.users, currentValues.users + Math.ceil(endValues.users / steps)),
        partners: Math.min(endValues.partners, currentValues.partners + Math.ceil(endValues.partners / steps)),
        revenue: Math.min(endValues.revenue, currentValues.revenue + (endValues.revenue / steps))
      };
      
      setStats(currentValues);
      
      if (
        currentValues.users >= endValues.users &&
        currentValues.partners >= endValues.partners &&
        currentValues.revenue >= endValues.revenue
      ) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [countersInView]);

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden py-10 px-4 sm:px-6 lg:px-16">
        {/* Background Abstract Shapes - Smaller on mobile */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-300 rounded-full opacity-20 blur-xl sm:blur-2xl lg:blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] bg-indigo-300 rounded-full opacity-10 blur-xl sm:blur-2xl lg:blur-3xl -z-10 animate-pulse"></div>
        
        {/* Additional subtle shapes for depth - Smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-200 rounded-full opacity-5 blur-xl sm:blur-2xl lg:blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-blue-200 rounded-full opacity-10 blur-lg sm:blur-xl lg:blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 justify-center">
          {/* Left Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left lg:ms-25"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent leading-tight"
            >
              Grow Your Brand with <br /> Our FetchTrue App
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 text-justify"
            >
             The Fetch True Platform run by “FTFL Technology PVT Limited”, bringing innovation, trust, and growth together on single platform. Grow your brand with Fetch True platform India’s first Hybrid B2B Marketplace & Growth Partner Network that helps you start, grow, and scale your business—whether you are an entrepreneur, service provider, or Growth Partner. With our multi-sector services, you can earn and grow your financial freedom. Become our growth partner and unlock your potential earning more than ₹1,00,000/month.           
             </motion.p>

            {/* Bullet Points */}
            <motion.ul 
              variants={containerVariants}
              className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left text-sm sm:text-base text-gray-600 font-medium"
            >
              <motion.li variants={itemVariants} className="flex items-center">
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                   We support start-up, entrepreneur across high-growth industries.  
               
                </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                   As a growth partner you can create multiple earning opportunities. 

              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                   Unlock your earning potential more than ₹1,00,000/month.             
              </motion.li>
              {/* <motion.li variants={itemVariants} className="flex items-center">
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Unlock your earning potential more than ₹1,00,000/month.
              </motion.li> */}
            </motion.ul>

            
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex flex-col items-center order-first lg:order-last "
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px] relative lg:ms-20"
            >
              <img
                src="/Homepage(1).png" // Replace with your mockup image path
                alt="App Mockup"
                width={400}
                height={300}
                className="drop-shadow-2xl rounded-xl mt-4 sm:mt-8 lg:mt-20"
                priority
              />
            </motion.div>
            
            {/* Download Buttons for desktop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:flex items-center justify-center gap-4 "
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                <FaGooglePlay size={22} /> Google Play
              </a>
              {/* <a
                href="#"
                className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black transition shadow-md hover:shadow-lg"
              >
                <FaApple size={22} /> App Store
              </a> */}
            </motion.div>

            {/* Download Buttons for mobile */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:hidden"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <FaGooglePlay size={18} className="sm:size-[22px]" /> Google Play
              </a>
             
              {/* <a
                href="#"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold hover:bg-black transition shadow-md hover:shadow-lg w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <FaApple size={18} className="sm:size-[22px]" /> App Store
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </section>


      <OurMission />
      {/* <DownloadApp /> */}

      {/* STATS SECTION */}
      <section id="stats-section" className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {/* Active Users */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaUsers className="text-blue-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">{stats.users}+</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Active Users</p>
          </motion.div>

          {/* Franchise Partners */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaHandshake className="text-indigo-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600">{stats.partners}+</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Franchise Partners</p>
          </motion.div>

          {/* Revenue Growth */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaChartLine className="text-blue-700 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700">{stats.revenue.toFixed(1)}x</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Revenue Growth</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}