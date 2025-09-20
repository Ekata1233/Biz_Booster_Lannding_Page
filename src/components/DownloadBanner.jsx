"use client";

import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadBanner = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><path d='M0 20h40v20H0V20zm20-20h20v20H20V0z' fill='%23FFFFFF' fill-opacity='0.1' /></svg>')" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Journey to Financial Freedom Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Join thousands of successful users who are already earning with our platform. 
              Download now and get instant access to all features with a free trial.
            </p>
          </div>
          
          {/* Download Buttons */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-blue-700 font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 shadow-lg hover:bg-blue-50 transition-colors"
            >
              <FaDownload className="text-lg" />
              <span>Download Now</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                <FaGooglePlay />
                <span>Google Play</span>
              </motion.a>
              
              <motion.a
                href="https://apps.apple.com/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                <FaApple className="text-lg" />
                <span>App Store</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadBanner;