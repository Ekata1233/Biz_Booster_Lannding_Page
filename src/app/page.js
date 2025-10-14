import AboutSection from "@/components/AboutUs";
import KeyFeatures from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PartnerDiagram from "@/components/Partner";
import ServicesPage from "@/components/Services";
import HowItWorks from "@/components/Steps";
import DownloadApp from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";
import WhatsAppButton from "@/components/WhatsappButton";
import ExtraIncome from "@/components/ExtraIncome";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import WhyChooseFetchTrue from "@/components/WhyChooseUs";
import ServiceProviderSection from "@/components/ServiceProvider";
import EndUserSection from "@/components/EndUser";
import UniqueValueProposition from "@/components/WhatMakesUsDifferent";
import PartnersSection from "@/components/PartnerSection";
import LeadGenerate from "@/components/LeadGenerate";
import StatsPage from "@/components/Stat";
import Modules from "@/components/Modules";
import Stat from "@/components/Stat";

export default function Home() {
  return (
    <div>
      <Navbar/>
        <HeroSection />
        <Stat/>
                       {/*<AboutSection /> */}
                       <LeadGenerate />
        {/* <StatsPage /> */}

         {/* <DownloadApp /> */}
        <WhyChooseFetchTrue />
        <Modules />

        {/* <ServicesPage /> */}
        {/* <HowItWorks /> */}
        {/* <ServiceProviderSection /> */}
        {/* <EndUserSection /> */}
        {/* <PartnerDiagram /> */}
        {/* <KeyFeatures /> */}
        {/* <ExtraIncome /> */}
        {/* <UniqueValueProposition /> */}
                               <PartnersSection />

        <Testimonials />
        {/* <BlogSection /> */}
        {/* <FAQSection/> */}
        {/* <ContactUs /> */}
        <WhatsAppButton />
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Head from "next/head";
// import PartnersSection from "@/components/PartnerSection";

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Growth Partners Program</title>
//         <meta
//           name="description"
//           content="Become our growth partner and turn your network into net worth"
//         />
//       </Head>

//       {/* Navbar */}
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all ${
//           scrolled ? "bg-white text-blue-950 shadow-sm" : "bg-transparent text-blue-950"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="/Fetch True Logo.png"
//                 alt="Fetch True"
//                 width={120}
//                 height={50}
//                 priority
//               />
//             </Link>

//             {/* CTA Button */}
//             <nav className="lg:flex items-center gap-8">
//               <Link
//                 href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
//                 className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 text-sm font-semibold shadow hover:bg-blue-700 transition"
//               >
//                 Download Now
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="min-h-screen bg-gradient-to-br from-blue-200 to-white flex items-center justify-center px-4 sm:px-6 lg:px-12">
//         <section className="container mx-auto py-10 sm:py-14 lg:py-24">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
//             {/* Mobile Title */}
//             <div className="lg:hidden w-full text-center">
//               <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
//                 Become Our <span className="text-blue-600">GROWTH PARTNERS</span> and Turn
//                 Your Network into Net Worth
//               </h1>
//             </div>

//             {/* Mobile Image */}
//             <div className="lg:hidden w-full flex justify-center">
//               <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80">
//                 <Image
//                   src="/Group 24.png"
//                   alt="App Preview"
//                   width={430}
//                   height={430}
//                   className="object-contain rounded-lg"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Desktop Left Column */}
//             <motion.div
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
//               transition={{ duration: 0.7 }}
//               className="hidden lg:block w-full lg:w-1/2 text-center lg:text-left lg:ms-20"
//             >
//               <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
//                 Join<span className="text-blue-600"> Fetch True</span> and Access Real Opportunities that Connects with Leads
//               </h1>

//               <p className="text-xl text-blue-700 mb-6">
//                 Smart Matching, Trusted Leads, Grow with Confidence.
//               </p>

//               <div className="flex flex-col space-y-4 mt-8">
//                 <p className="text-lg font-medium text-gray-700">Download our app now:</p>
//                 <div className="flex justify-start">
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Download FetchTrue app from Google Play Store"
//                   >
//                     <Image
//                       src="/Untitled-1.png"
//                       alt="Get it on Google Play"
//                       width={150}
//                       height={50}
//                       className="h-12 w-auto hover:scale-105 transition-transform"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Desktop Right Column */}
//             <motion.div
//               initial={{ x: 20, opacity: 0 }}
//               animate={{ x: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
//               transition={{ duration: 0.7 }}
//               className="hidden lg:flex w-full lg:w-1/2 justify-center"
//             >
//               <div className="relative w-full max-w-lg h-96">
//                 <Image
//                   src="/Group 24.png"
//                   alt="App Preview"
//                   width={430}
//                   height={430}
//                   className="object-contain rounded-xl"
//                   priority
//                 />
//               </div>
//             </motion.div>

//             {/* Mobile Download CTA */}
//             <div className="lg:hidden w-full text-center mt-6">
//               <p className="text-base text-blue-700 mb-4">
//                 Unlock new opportunities with our powerful platforms and become our Growth Partner.
//               </p>
//               <div className="flex flex-col space-y-4">
//                 <p className="text-sm font-medium text-gray-700">Download our app now:</p>
//                 <div className="flex justify-center">
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src="/Untitled-1.png"
//                       alt="Get it on Google Play"
//                       width={120}
//                       height={40}
//                       className="h-10 w-auto hover:scale-105 transition-transform"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Partner Section */}
//       <PartnersSection />
//       {/* <section className="bg-white py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-800">Our Partners</h2>
//             <p className="mt-2 text-lg text-gray-600">
//               Loved by Fastest-Growing Sales Teams Worldwide
//             </p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
//             {[...Array(6)].map((_, index) => (
//               <div key={index} className="flex justify-center">
//                 <Image
//                   src={`/partner-${index + 1}.png`}
//                   alt={`Partner ${index + 1}`}
//                   width={120}
//                   height={50}
//                   className="h-12 w-auto"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// }


