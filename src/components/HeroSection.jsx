"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

export default function VideoHeroPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if video can play
    if (videoRef.current) {
      videoRef.current.oncanplay = () => {
        setIsLoading(false);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#00509D] to-[#003F7D] w-full h-[50vh] md:h-[85vh] lg:h-screen">
      <Head>
        <title>Business Growth Partnership</title>
        <meta
          name="description"
          content="Become our Growth Partner and turn your network into net worth with our B2B solutions"
        />
      </Head>

      <section className="relative w-full h-[50vh] md:h-[85vh] lg:h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          {!videoError ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/fallback-image.jpg"
              onError={() => {
                setVideoError(true);
                setIsLoading(false);
              }}
            >
              <source src="/Hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D]"></div>
          )}
        </div>

        {/* Loading Placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D] flex items-center justify-center z-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
              <div className="text-white text-lg">Loading video...</div>
            </div>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-5"></div>

        {/* Content */}
        <div
          className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto text-center mt-20"
          style={{
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? "translateY(40px)" : "translateY(0)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Become Our{" "}
            <span className="text-blue-400">GROWTH PARTNERS</span> and Turn Your
            Network into Net Worth
          </h1>

          {/* Responsive Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Unlock new opportunities with our powerful platforms and become our
            Growth Partner.
          </p>

          {/* Call-to-Action Button */}
          {/* <div className="flex justify-center">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}