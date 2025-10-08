"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "All In One Service Platform",
      highlight: "Everything You Need, All in One Place just with one click",
      description:
        "Fetch True makes it easy for you to find, connect, and get services—all in one platform. With diverse sector of services, you can choose your needs.",
      image: "/Phone Mockup(1).png",
    },
    {
      title: "Stop Searching - Start Fetching with Fetch True",
      highlight: "Find your Trusted Service with Trusted Partners",
      description:
        "The Fetch True give you a quick access to every service you need. It acts as the control center, where you can explore, and connect with services effortlessly.",
      image: "/Services Banner Images.png",
    },
    {
      title: "Nationwide reach. Local trust. Fetch True.",
      highlight: "Connecting you with trusted services across India.",
      description:
        "Fetch True isn't just one city service provider—Our services reach all cities and states in India. Our physical approach with every service provider makes us different from others.",
      image: "/Map_Final_-01.png",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Animation Variants
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#007bbd] via-[#00509D] to-[#003f7f] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <Head>
        <title>Fetch True - Your Service Partner</title>
        <meta
          name="description"
          content="Join Fetch True - Your trusted partner for finding all the services you need in one platform"
        />
      </Head>

      <div className="w-full max-w-7xl mx-auto py-10 sm:py-14 lg:py-20 relative">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Mobile Layout - Column sequence */}
              <div className="lg:hidden flex flex-col items-center justify-center gap-6 mt-10 lg:mt-0">
                {/* Title - First */}
                <motion.div
                  className="w-full text-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <h1 className="text-xl sm:text-2xl  text-white/80 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>

                {/* Highlight - Second */}
                <motion.div
                  className="w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent text-justify">
                    {slides[currentSlide].highlight}
                  </span>
                </motion.div>

                {/* Image - Third */}
                <motion.div
                  className="w-full flex justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <div className="relative w-full max-w-xs">
                    <Image
                      src={slides[currentSlide].image}
                      alt="App Preview"
                      width={400}
                      height={600}
                      className="object-contain rounded-xl w-full h-auto"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Description - Fourth */}
                <motion.div
                  className="w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-base sm:text-lg font-medium text-white/80 leading-relaxed text-justify">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </div>

              {/* Desktop Layout - Original side by side */}
              <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                {/* Text Content */}
                <motion.div
                  className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-xl lg:text-2xl text-black leading-tight text-justify-center lg:text-left">
                    {slides[currentSlide].title}{" "}
                    {slides[currentSlide].highlight && (
                      <span className="block mt-2 bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold">
                        {slides[currentSlide].highlight}
                      </span>
                    )}
                  </h1>

                  <p className="text-lg lg:text-xl font-medium text-black/90 leading-relaxed text-justify">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <div className="relative w-full max-w-lg">
                    <Image
                      src={slides[currentSlide].image}
                      alt="App Preview"
                      width={600}
                      height={900}
                      className="object-contain rounded-xl w-full h-auto lg:mt-10"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 lg:mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}