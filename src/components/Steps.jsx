"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Steps.module.css";

const StepCard = ({ step, index, activeStep }) => {
  const isActive = activeStep === index;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isActive && index === 0) {
      const phoneNumber = "+91 98xxxxxxx0";
      setTypedText("");
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + phoneNumber[i]);
        i++;
        if (i === 13) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isActive, index]);

  return (
    <motion.div
      className={`relative w-full md:w-[320px] flex flex-col items-center transition-all duration-500 `}
      initial={{ scale: 0.9, opacity: 0.9 }}
      animate={{ scale: isActive ? 1.05 : 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Mobile Mockup */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.phone}
      >
        <div className={styles.screen}>
          {/* Step-Specific Content */}
          {index === 0 && (
            <motion.div
              key="step1"
              className="w-full p-4 text-center"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {/* App header */}
              <motion.div
                className="flex justify-between items-center px-2 mb-6"
              >
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">FetchTrue</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </motion.div>

              <motion.h3 className="text-lg font-bold text-gray-800 mb-6">
                Welcome to FetchTrue
              </motion.h3>

              {/* Input Field */}
              <motion.div className="relative border rounded-xl p-3 mb-4 text-gray-500 text-sm bg-white shadow-sm mx-4 h-12 flex items-center">
                <span className="text-gray-400">Enter Mobile Number</span>
                <motion.div
                  className="absolute inset-0 flex items-center px-3 rounded-xl bg-white border border-blue-300 shadow-md"
                  animate={isActive ? { width: "100%" } : {}}
                  transition={{ duration: 0.9, delay: 1.5 }}
                >
                  <span className="font-mono text-gray-700">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </motion.div>
              </motion.div>

              <motion.button className="mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-4/5 font-medium">
                Sign Up
              </motion.button>
            </motion.div>
          )}

          {index === 1 && (
            <motion.div
              key="step2"
              className="flex flex-col items-center p-4 w-full"
            >
              <div className="flex justify-between items-center px-2 mb-6 w-full">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">Packages</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Choose Your Plan
              </h3>

              <div className="w-full h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-5 flex flex-col items-center justify-center p-4 border border-gray-200 shadow-sm">
                <img
                  src="/pkg.jpeg"
                  alt="Premium Plan"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg w-full font-medium">
                Activate Now
              </button>

              <motion.div
                  className="mt-4 text-green-600 font-semibold text-sm flex items-center"
                  initial={{ opacity: 0 }} // pehle invisible
                  animate={isActive ? { opacity: 1 } : { opacity: 0 }} // active hone par fade-in
                  transition={{ duration: 0.8, delay: 1.5 }} // thoda delay ke baad dikhega
                >
                  <span className="mr-1">✓</span> Successfully Activated!
                </motion.div>

            </motion.div>
          )}

          {index === 2 && (
            <motion.div
              key="step3"
              className="flex flex-col items-center justify-center p-4 w-full"
            >
              <div className="flex justify-between items-center px-2 mb-6 w-full">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">Earnings</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Your Earnings
              </h3>
              <div className="text-gray-600 text-sm mb-6 text-center">
                Track your monthly income
              </div>

              <div className="w-36 h-36 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
                <span className="text-4xl">💰</span>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg w-full text-center border border-gray-100">
                <div className="text-sm text-gray-600">Current Month</div>
                <div className="text-2xl font-bold text-green-600 mt-1">
                  ₹1,00,000
                </div>
              </div>

              <p className="text-gray-700 mt-6 text-center text-sm font-medium">
                Earn up to ₹1 Lakh/month
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Step text */}
      <div className="w-full md:w-[260px] mt-6 px-2">
        <h4 className="font-bold text-lg text-center text-gray-800">
          Step {index + 1}
        </h4>
        <p className="text-gray-600 mt-2 text-center text-base leading-relaxed">
          {step}
        </p>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const steps = [
    "Install Fetch True App and create an Account",
    "Activate Package and start managing your business",
    "Start earning money more than ₹1 Lakh every month",
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <h3 className="font-bold text-xl md:text-2xl text-[#2164F4] mb-2">
          How It Works
        </h3>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent mt-2">
          Get Started in 3 Simple Steps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Our intuitive process makes it easy to get started with FetchTrue and
          begin managing your business efficiently.
        </p>
      </div>

      {/* Steps for desktop */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-8 lg:gap-12 relative z-10 flex-wrap px-4">
        {steps.map((s, i) => (
          <StepCard key={i} step={s} index={i} activeStep={activeStep} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden flex flex-col items-center">
        <StepCard step={steps[activeStep]} index={activeStep} activeStep={activeStep} />

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeStep ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
