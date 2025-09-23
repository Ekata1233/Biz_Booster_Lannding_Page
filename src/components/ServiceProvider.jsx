"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaRocket, FaHandshake, FaChartLine, FaShieldAlt, FaArrowRight, FaStar, FaLightbulb, FaHeart, FaSeedling, FaUserFriends } from "react-icons/fa";
import Image from 'next/image';

export default function ServiceProviderSection() {
  const points = [
    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description: "You deliver innovative solutions that are suited to the business needs."
    },
    {
      icon: FaHeart,
      title: "Customer Priority",
      description: "Your satisfaction is our priority."
    },
    {
      icon: FaChartLine,
      title: "Tailored Solutions",
      description: "Gain innovative solutions tailored to your industry."
    },
    {
      icon: FaSeedling,
      title: "Growth Opportunities",
      description: "Unlock the opportunities for growth."
    },
    {
      icon: FaUserFriends,
      title: "Loyal Client Base",
      description: "As service provider we provide you loyal client."
    }
  ];

  return (
    <section id="service-providers" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            For <span className="text-blue-600">Service Providers</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Join India's fastest-growing service platform and connect with thousands of customers 
            looking for your expertise.
          </p>
        </motion.div>

        {/* Content with Image and Description - Reversed order for mobile */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left - Description (Comes after image on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 h-full">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Your Vital Role in Business Ecosystem</h3>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                As a service provider you play a vital role in business ecosystem by delivering tailored solutions that meet diverse customer needs. A trustworthy service provider guarantees that business and client achieve efficiency, development, and sustainability, regardless of the service's focus—technology, marketing, logistics, finance, or on-demand services. Long-term revenue growth and operational resilience are ensured by their capacity to quickly adjust to changing market needs and personalize services.
              </p>
            </div>
          </motion.div>

          {/* Right - Image (Comes first on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/provider.avif"
                alt="Service Provider on FetchTrue"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Points in Card Layout */}
        <motion.div 
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">Why Choose FetchTrue?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 lg:p-3 bg-blue-100 rounded-full mb-3 lg:mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <point.icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{point.title}</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl lg:rounded-3xl p-6 lg:p-8 md:p-12 text-white">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 lg:mb-4">Join Our Growing Community</h3>
            <p className="text-blue-100 mb-6 lg:mb-8 text-sm lg:text-lg">Start your journey with FetchTrue today and unlock new opportunities</p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <motion.a
                href="https://biz-booster-provider-panel.vercel.app/"
                className="inline-block px-6 lg:px-8 py-2 lg:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}