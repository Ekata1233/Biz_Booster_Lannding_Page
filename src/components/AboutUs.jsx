"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import OurMission from "./OurMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import DownloadBanner from "./DownloadBanner";
import WhyChooseFetchTrue from "@/components/WhyChooseUs";


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


<section id="about" className="relative bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-16">
  {/* Geometric Background Pattern */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-50 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-50 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-500"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 -z-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
        About Us
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Where Business Finds <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Trust & Growth</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        India's first Hybrid B2B Marketplace designed to build your success with trusted business opportunities
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Left Content - Main Description & Features */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        {/* Main Description Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>At FetchTrue, everything begins with you.</strong> We are India's first Hybrid B2B Marketplace, 
                designed to provide clients like you with convenient access to reputable businesses, vetted services, 
                and genuine development opportunities—all in one platform.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform is intended to save you time, eliminate risks, and link you exclusively with reputable 
                service providers and genuine solutions that meet your specific needs. Whether you're looking for the 
                appropriate partner, trying out new services, or growing your business, FetchTrue makes the process 
                straightforward, secure, and affordable.
              </p>
            </div>
          </div>
        </div>

        {/* Taglines Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
        >
          <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            {/* Why Choose FetchTrue? */}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Grow your business Safer, Faster and smarter with FetchTrue.",
              "All your trusted businesses, verified services, and real growth—only on FetchTrue.",
              "Help you to Connect and Grow your Business – with FetchTrue.",
              "Where Business find Trust and Growth – FetchTrue.",
              "Building your Success with Trusted Business Opportunity."
            ].map((tagline, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">{tagline}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Verified Services</h4>
                <p className="text-xs text-gray-600">Vetted & reputable providers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Rapid Growth</h4>
                <p className="text-xs text-gray-600">Scale your business faster</p>
              </div>
            </div>
          </motion.div>
        </div> */}
      </motion.div>

      {/* Right Content - App Showcase */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        {/* Floating Mockup */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <div className="relative max-w-md mx-auto">
            <img
              src="/Homepage(1).png"
              alt="FetchTrue App"
              className=""
            />
            
            {/* Floating Elements */}
            {/* <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">Trusted</span>
              </div>
            </motion.div> */}

            {/* <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-sm">₹</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Growth</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-xs text-gray-600">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">₹1L+</div>
            <div className="text-xs text-gray-600">Earnings</div>
          </div>
        </motion.div> */}

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 "
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
            className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center group"
          >
            <FaGooglePlay size={24} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-lg">Google Play</div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>


        <WhyChooseFetchTrue/>


      {/* <OurMission /> */}
      {/* <WhyChooseUs /> */}

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

        {/* <DownloadBanner /> */}
      </section>
    </>
  );
}