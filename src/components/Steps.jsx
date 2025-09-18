"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from "./Steps.module.css";

const StepCard = ({ step, index, activeStep, onVideoEnd }) => {
  const isActive = activeStep === index;
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      // Reset and play video when step becomes active
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  }, [isActive]);

  return (
    <motion.div
      className={`relative w-full md:w-[320px] flex flex-col items-center transition-all duration-500`}
      initial={{ scale: 0.9, opacity: 0.9 }}
      animate={{ scale: isActive ? 1.05 : 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Video Container (replaces mobile mockup) */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.videoContainer}
      >
        {/* Step-Specific Video */}
        {index === 0 && (
          <video
            ref={videoRef}
            muted
            playsInline
            onEnded={onVideoEnd}
            className={styles.video}
          >
            <source src="/Step no 01 Fetch True Install And Sing-Up_v002.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {index === 1 && (
          <video
            ref={videoRef}
            muted
            playsInline
            onEnded={onVideoEnd}
            className={styles.video}
          >
            <source src="/Step no 02 Fetch True Package Activate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {index === 2 && (
          <video
            ref={videoRef}
            muted
            playsInline
            onEnded={onVideoEnd}
            className={styles.video}
          >
            <source src="/Step no 03 Earning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle video end - move to next step
  const handleVideoEnd = () => {
    if (isAutoPlaying) {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }
  };

  // Handle manual step change
  const handleStepChange = (index) => {
    setIsAutoPlaying(false);
    setActiveStep(index);
  };

  // Reset to auto-play after 30 seconds of inactivity
  useEffect(() => {
    let timeout;
    if (!isAutoPlaying) {
      timeout = setTimeout(() => setIsAutoPlaying(true), 30000);
    }
    return () => clearTimeout(timeout);
  }, [isAutoPlaying]);

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
          <StepCard 
            key={i} 
            step={s} 
            index={i} 
            activeStep={activeStep} 
            onVideoEnd={handleVideoEnd}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden flex flex-col items-center">
        <StepCard 
          step={steps[activeStep]} 
          index={activeStep} 
          activeStep={activeStep} 
          onVideoEnd={handleVideoEnd}
        />

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeStep ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => handleStepChange(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}