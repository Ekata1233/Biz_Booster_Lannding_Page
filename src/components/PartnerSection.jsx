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
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
         {/* Header Section Desktop only*/}
      <div className="hidden lg:flex flex-wrap justify-start items-center text-center py-5 px-8 md:px-12 xl:px-32">
        <h2
          className="bg-[#00509D] text-white font-bold text-2xl lg:text-3xl xl:text-4xl p-6 lg:p-6 mb-4 lg:mb-0"
          style={{ borderRadius: "8px 0px 30px 8px" }}
        >
          Fetch True <br /> Partners
        </h2>
        <p
          className="bg-white shadow-md shadow-gray-200 text-gray-800 text-justify text-base md:text-lg lg:text-xl font-medium p-6 lg:p-8 ms-0 mb-6"
          style={{
            borderRadius: "8px 8px 30px 0px",
            maxWidth: "650px",
          }}
        >
          Strong partnerships. Stronger solutions. Nationwide impact.
        </p>
      </div>

      {/* Header Section mobile screens */}
  <div className="flex lg:hidden py-5">
            <h2 className="text-md font-bold bg-[#00509D] text-white p-2 text-center justify-center   ms-8" style={{ borderRadius: "8px 0px 30px 8px" }}>               
              Fetch True Partners</h2>
            <p className="text-sm bg-white shadow-md shadow-gray-200 text-gray-800 text-justify p-2 mb-3 me-8"
                style={{
                 borderRadius: "8px 8px 30px 0px",
                 }}>
                Strong partnerships. Stronger solutions. Nationwide impact.
            </p>
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
        <div className="md:hidden relative">
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
        </div>
      </div>
    </section>
  );
}