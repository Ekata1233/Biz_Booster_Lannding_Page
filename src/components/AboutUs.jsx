"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import OurMission from "./OurMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import DownloadBanner from "./DownloadBanner";


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