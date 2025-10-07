"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function PartnersSection() {
  const partners = [
    { id: 1, name: "Partner 1", logo: "/FTFL 002.png" },
    { id: 2, name: "Partner 2", logo: "/art png logo.png" },
    { id: 3, name: "Partner 3", logo: "/Lifeline Logo ))2.png" },
    // { id: 4, name: "Partner 4", logo: "/partner-4.png" },
    // { id: 5, name: "Partner 5", logo: "/partner-5.png" },
    // { id: 6, name: "Partner 6", logo: "/partner-6.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile || partners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === partners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, partners.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === partners.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? partners.length - 1 : currentIndex - 1);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700">Fetch True Partners</h2>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:flex gap-20 items-center justify-center flex-wrap">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="md:hidden relative mt-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="flex-shrink-0 w-full flex items-center justify-center px-4"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* {partners.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous partner"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next partner"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )} */}

          {/* Dots Indicator */}
          {/* {partners.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}