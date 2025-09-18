"use client";

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
    } else if (videoRef.current) {
      // Pause video when not active
      videoRef.current.pause();
    }
  }, [isActive, index]);

  return (
    <div className={`relative w-full flex flex-col items-center transition-all duration-500 px-4`}>
      {/* Video Container */}
      <div className={styles.videoContainer}>
        {/* Step-Specific Video */}
        {index === 0 && (
          <video
            ref={videoRef}
            muted
            playsInline
            onEnded={onVideoEnd}
            className={styles.video}
            preload="auto"
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
            preload="auto"
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
            preload="auto"
          >
            <source src="/Step no 03 Earning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Step text */}
      <div className="w-full mt-6 px-2">
        <h4 className="font-bold text-lg text-center text-gray-800 mb-2">
          Step {index + 1}
        </h4>
        <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
          {step}
        </p>
      </div>
    </div>
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
  const timeoutRef = useRef(null);

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
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Re-enable auto-play after a delay
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-24 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10 md:mb-16 px-4 relative z-10">
        <h3 className="font-bold text-xl md:text-2xl text-[#2164F4] mb-2">
          How It Works
        </h3>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent mt-2">
          Get Started in 3 Simple Steps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base md:text-lg">
          Our intuitive process makes it easy to get started with FetchTrue and
          begin managing your business efficiently.
        </p>
      </div>

      {/* Steps for desktop */}
      <div className="hidden lg:flex justify-center items-start gap-8 relative z-10 px-4 max-w-6xl mx-auto">
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
      <div className="lg:hidden flex flex-col items-center w-full max-w-md mx-auto">
        <StepCard 
          step={steps[activeStep]} 
          index={activeStep} 
          activeStep={activeStep} 
          onVideoEnd={handleVideoEnd}
        />

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === activeStep ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => handleStepChange(i)}
              aria-label={`Go to step ${i+1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows for mobile */}
        {/* <div className="flex justify-center mt-4 space-x-4">
          <button 
            onClick={() => handleStepChange((activeStep - 1 + steps.length) % steps.length)}
            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            aria-label="Previous step"
          >
            ←
          </button>
          <button 
            onClick={() => handleStepChange((activeStep + 1) % steps.length)}
            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            aria-label="Next step"
          >
            →
          </button>
        </div> */}
      </div>
    </section>
  );
}