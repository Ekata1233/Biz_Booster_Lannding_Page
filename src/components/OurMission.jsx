"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Static content data
  const content = [
    {
      title: "Our Mission",
      description:"Our mission is to simplify your brand expansion across India by connecting companies with trained Growth Partners. We aim you to become our growth partners, unlock the potential growth in financial freedom. Our mission is to simplify your brand expansion across India by connecting companies with trained Growth Partners who represent them locally. We aim to break down geographical barriers and create opportunities for growth in every corner of the country.",
      image: "/mission.avif",
      color: "from-blue-500 to-blue-600",
      reverse: false,
      typeData: "mission",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Our Vision",
      description:"Our goal is to become India’s most trust online marketplace, helps brand to grow without limits, transferring your dream into reality with Fetch True franchise. We assist you to expand your brand across India. With Fetch True Franchise you unlock earning opportunities that are not limited to just one revenue, team revenue, onboarding franchisee and team building are some of the ways you can earn. We support you till your success.",
      image: "/vision.avif",
      color: "from-purple-500 to-purple-600",
      reverse: true,
      typeData: "vision",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Our Core Values",
      description:"Our fundamental beliefs that guide actions, decisions, and relationships. These principles shape our culture and define who we are as a company/Partners. As Fetch True growth partners you act as a local ambassador of business at regional level. You represent business in your local areas and work directly with customers, turning them into loyal and profitable clients.  ",
      image: "/coreValues.avif",
      color: "from-emerald-500 to-emerald-600",
      reverse: false,
      typeData: "corevalues",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  // Core values with descriptions
  const coreValues = [
    { 
      name: "We deliver innovative solutions that are suited to your business needs.  ", 
      description: "We constantly seek new ways to solve problems and create value" 
    },
    { 
      name: "As a growth partner you create multiple earning opportunities. ", 
      description: "We do what's right, not what's easy" 
    },
    { 
      name: "We provide you a platform to build your team. ", 
      description: "We achieve more when we work together" 
    },
    { 
      name: "Your satisfaction is our priority.  ", 
      description: "We strive for the highest quality in everything we do" 
    },
    // { 
    //   name: "Customer Focus", 
    //   description: "Our customers' success is our success" 
    // }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      rotate: item => item.reverse ? 5 : -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const coreValueItem = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
              Guiding Principles
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            The foundation of everything we do at our company
          </motion.p>
        </motion.div>

        {/* Zig-Zag Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-24 sm:space-y-32"
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <motion.div
                custom={item}
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.4 }
                }}
                className="lg:w-1/2 relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto aspect-video object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                  {/* <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      {item.icon}
                    </span>
                  </div> */}
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={itemVariants}
                className="lg:w-1/2"
              >
                <motion.div
                  className={`w-20 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-6`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: 80 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
                />
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {item.typeData === "corevalues" && (
  <motion.div 
    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    variants={containerVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
  >
    {coreValues.map((value, i) => (
      <motion.div
        key={i}
        variants={coreValueItem}
        className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-row items-start gap-4"
        whileHover={{ 
          x: 8,
          transition: { duration: 0.3 }
        }}
      >
        <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} text-white mt-1`}>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{value.name}</h4>
          {/* <p className="text-gray-600 text-sm mt-1">{value.description}</p> */}
        </div>
      </motion.div>
    ))}
  </motion.div>

                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;