"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Stop Searching - Start Fetching with Fetch True",
      highlight: "Find your Trusted Service with Trusted Partners",
      description: "The Fetch True give you a quick access to every service you need. It acts as the control center, where you can explore, and connect with services effortlessly.",
      image: "/Screenshot 2025-10-06 164553-01-01-01-01.png",
    },
    {
      title: "All In One Service Platform",
      highlight: "Everything You Need, All in One Place just with one click",
      description: "Fetch True makes it easy for you to find, connect, and get services—all in one platform. With diverse sector of services, you can choose your needs.",
      image: "/All In One Services (2).png",
    },
    {
      // title: "Start Your Journey",
      highlight: "Start your Journey with Fetch True",
      description: "At Fetch True, you aren't just service users—you play an important role in shaping the platform. By engaging beyond just using services, you can grow while unlocking exclusive benefits for yourself.",
      image: "/Group 44.png",
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-[#00509D] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden"
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="w-full max-w-7xl mx-auto py-10 sm:py-14 lg:py-24 relative">
        {/* Carousel Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 block"
                  : "opacity-0 hidden"
              }`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-2xl  text-white leading-tight">
                  {slide.title}{" "}
                  {slide.highlight && (
                    <span className="block mt-2 text-black text-shadow-lg text-4xl sm:text-5xl lg:text-6xl font-bold"> 
                      {slide.highlight}
                    </span>
                  )}
                </h1>

                <p className="text-lg sm:text-xl font-medium text-white/90 leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg">
                  <Image
                    src={slide.image}
                    alt="App Preview"
                    width={600}
                    height={900}
                    className="object-contain rounded-xl w-full h-auto"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 lg:mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}