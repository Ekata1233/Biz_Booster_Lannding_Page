"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <Head>
        <title>Growth Partners Program</title>
        <meta
          name="description"
          content="Become our growth partner and turn your network into net worth"
        />
      </Head>

      {/* Hero Banner */}
      <section className="container mx-auto py-10 sm:py-14 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* For small screens: Title comes first */}
          <div className="lg:hidden w-full text-center transition-all duration-700 ease-out transform">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mt-15">
              Become Our{" "}
              <span className="text-blue-600">GROWTH PARTNERS</span> and Turn
              Your Network into Net Worth
            </h1>
          </div>

          {/* For small screens: Image comes second */}
          <div className="lg:hidden w-full flex justify-center transition-all duration-700 ease-out transform">
            <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80">
              <Image
                src="/Group 24.png"
                alt="App Preview"
                width={430}
                height={430}
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Left Column - Text (Desktop only) */}
          <div
            className={`hidden lg:block w-full lg:w-1/2 text-center lg:text-left lg:ms-20 transition-all duration-700 ease-out transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
              Become Our{" "}
              <span className="text-blue-600">GROWTH PARTNERS</span> and Turn
              Your Network into Net Worth
            </h1>

            <p className="text-xl text-blue-700 mb-6">
              Unlock new opportunities with our powerful platforms and become
              our Growth Partner.
            </p>

            <div className="flex flex-col space-y-4 mt-8">
              <p className="text-lg font-medium text-gray-700">
                Download our app now:
              </p>
              <div className="flex justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Untitled-1.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop only) */}
          <div
            className={`hidden lg:flex w-full lg:w-1/2 justify-center transition-all duration-700 ease-out transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-lg h-96">
              <Image
                src="/Group 24.png"
                alt="App Preview"
                width={430}
                height={430}
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>

          {/* For small screens: Download button comes third */}
          <div className="lg:hidden w-full text-center transition-all duration-700 ease-out transform">
            <p className="text-base text-blue-700 mb-4 mt-5">
              Unlock new opportunities with our powerful platforms and become
              our Growth Partner.
            </p>
            
            <div className="flex flex-col space-y-4 mt-6">
              <p className="text-sm font-medium text-gray-700">
                Download our app now:
              </p>
              <div className="flex justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Untitled-1.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}