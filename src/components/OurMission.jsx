"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const MissionSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Static content data
  const content = [
    {
      title: "Our Mission",
      description:"Our mission is to simplify your brand expansion across India by connecting companies with trained Growth Partners. We aim you to become our growth partners, unlock the potential growth in financial freedom. Our mission is to simplify your brand expansion across India by connecting companies with trained Growth Partners who represent them locally. We aim to break down geographical barriers and create opportunities for growth in every corner of the country.",
      image: "/mission.avif",
      color: "from-blue-500 to-blue-600",
      reverse: false,
      typeData: "mission",
    },
    {
      title: "Our Vision",
      description:"Our goal is to become India's most trust online marketplace, helps brand to grow without limits, transferring your dream into reality with Fetch True franchise. We assist you to expand your brand across India, where digital technology meets local trust. By combining an online marketplace with a strong on-ground Growth Partner network, we aim to empower every business from start-up to enterprises – to scale faster, expand smarter, and build strong trust and credibility across India and beyond.",
      image: "/vision.avif",
      color: "from-purple-500 to-purple-600",
      reverse: true,
      typeData: "vision",
    },
    {
      title: "Our Core Values",
      description:"Our fundamental beliefs that guide actions, decisions, and relationships. These principles shape our culture and define who we are as a company/Partners. As Fetch True growth partners you act as a local ambassador of business at regional level. You represent business in your local areas and work directly with customers, turning them into loyal and profitable clients.",
      image: "/coreValues.avif",
      color: "from-emerald-500 to-emerald-600",
      reverse: false,
      typeData: "corevalues",
    }
  ];

  // Core values with descriptions
  const coreValues = [
    { 
      name: "As a growth partner you create multiple earning opportunities.", 
    },
    { 
      name: "We provide you a platform to build your team.", 
    },
    { 
      name: "You can earn on team revenue income.", 
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader isMobile={isMobile} />
        
        {/* Zig-Zag Content */}
        <div className="space-y-16 sm:space-y-24">
          {content.map((item, index) => (
            <ContentCard 
              key={index} 
              item={item} 
              index={index} 
              coreValues={item.typeData === "corevalues" ? coreValues : null}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for section header
const SectionHeader = ({ isMobile }) => {
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.1 : 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
          Guiding Principles
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        The foundation of everything we do at our company
      </p>
    </motion.div>
  );
};

// Separate component for each content card
const ContentCard = ({ item, index, coreValues, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.1 : 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`flex flex-col ${
        item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Image: {item.image}</span>
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-10 rounded-xl`}
          ></div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.reverse ? 50 : -50 }}
        transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
        className="lg:w-1/2"
      >
        <motion.div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-4`}
          initial={{ width: 0 }}
          animate={inView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        />
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          {item.title}
        </h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {item.description}
        </p>

        {coreValues && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 + 0.6 }}
            className="flex flex-col gap-3"
          >
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.7 + i * 0.1 }}
                className="p-3 bg-white rounded-lg shadow-sm flex flex-row items-start gap-3"
              >
                <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.color} text-white mt-1 flex-shrink-0`}>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">{value.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MissionSection;