// "use client"

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';

// const Modules = () => {
//   const [imageErrors, setImageErrors] = useState({});

//   const modules = [
//     {
//       id: 1,
//       title: "Franchise Module",
//       icon: "/Franchise-Icons-01.png",
//       desc: "This provides you ready-to-launch business model with partners and entrepreneurs",
//     },
//     {
//       id: 2,
//       title: "Business",
//       icon: "/Business_Icon-01.png",
//       desc: "This module provides insight of businesses how organization runs and generates revenues.",
//     },
//     {
//       id: 3,
//       title: "Marketing",
//       icon: "/Marketing-Icons-01.png",
//       desc: "It helps businesses to increase exposure attract consumers and generate revenue.",
//     },
//     {
//       id: 4,
//       title: "Legal",
//       icon: "/Legal Services-Icon With Name-01.png",
//       desc: "This service provides streamline legal procedure and give dependable help to organization or individual with legal advisory.",
//     },
//     {
//       id: 5,
//       title: "Finance",
//       icon: "/Finance-Icons With Name-01.png",
//       desc: "This gives you systematic Finance management and growth prospects.",
//     },
//     {
//       id: 6,
//       title: "IT",
//       icon: "/It Services Icon With Name-01.png",
//       desc: "It builds to provide services to organization with creative, dependable and scalable technological solution.",
//     },
//     {
//       id: 7,
//       title: "Education",
//       icon: "/Education-Icons-01.png",
//       desc: "This service helps to learners, professional and organization with focused, accessible learning platform.",
//     },
//     {
//       id: 8,
//       title: "On-Demand",
//       icon: "/On demand-Icon-01.png",
//       desc: "This delivers services and home solution as soon as you need them.",
//     },
//     {
//       id: 9,
//       title: "OnBoarding",
//       icon: "/ONBORDING-Icon-01.png",
//       desc: "This service is designed to welcome new members, client or partners to offer guidance",
//     },
//   ];

//   const handleImageError = (id) => {
//     setImageErrors(prev => ({ ...prev, [id]: true }));
//   };

//   const fallbackIcons = {
//     "Franchise Module": "🏢",
//     "Business": "💼",
//     "Marketing": "📢",
//     "Legal": "⚖️",
//     "Finance": "💰",
//     "IT": "💻",
//     "Education": "🎓",
//     "On-Demand": "🚀",
//     "OnBoarding": "👥"
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 mb-4 lg:mb-6"
//           >
//             Our Industry Focus
//             {/* Fetch{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               True 9
//             </span>{" "}
//             Modules */}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//           >
//             Unleash your business potential with our innovative suite of
//             modules, designed for seamless growth and efficiency.
//           </motion.p>
//         </motion.div>

//         {/* Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {modules.map((module) => (
//             <motion.div
//               key={module.id}
//               variants={itemVariants}
//               whileHover={{
//                 y: -6,
//                 scale: 1.02,
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative"
//             >
//               {/* Card */}
//               <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:shadow-blue-200/30 p-6 sm:p-7 lg:p-8 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-blue-100">
                
//                 {/* Icon with Error Handling */}
//                 <div className="mb-4 sm:mb-6 flex items-center justify-center">
//                   <div className="w-40 h-40 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">
//                     {!imageErrors[module.id] ? (
//                       <Image
//                         src={module.icon}
//                         alt={module.title}
//                         width={200}
//                         height={200}
//                         className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//                         onError={() => handleImageError(module.id)}
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">
//                         <span className="text-4xl sm:text-2xl md:text-3xl">
//                           {fallbackIcons[module.title]}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 {/* <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                   {module.title}
//                 </h3> */}

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
//                   {module.desc}
//                 </p>

//                 {/* Hover Arrow */}
//                 {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
//                   <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
//                     <svg
//                       className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 7l5 5m0 0l-5 5m5-5H6"
//                       />
//                     </svg>
//                   </div>
//                 </div> */}
//               </div>

//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-300" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Modules;


"use client";
import Image from "next/image";

const Modules = () => {
  const modules = [
    {
      id: 1,
      title: "Franchise Module",
      icon: "/Franchise-Icons-01.png",
      desc: "This provides you ready-to-launch business model with partners and entrepreneurs.",
    },
    {
      id: 2,
      title: "Business",
      icon: "/Business_Icon-01.png",
      desc: "This module provides insight into how organizations run and generate revenues.",
    },
    {
      id: 3,
      title: "Marketing",
      icon: "/Marketing-Icons-01.png",
      desc: "It helps businesses increase exposure, attract consumers, and generate revenue.",
    },
    {
      id: 4,
      title: "Legal",
      icon: "/Legal Services-Icon With Name-01.png",
      desc: "Provides streamlined legal procedures and dependable help for organizations and individuals.",
    },
    {
      id: 5,
      title: "Finance",
      icon: "/Finance-Icons With Name-01.png",
      desc: "Gives you systematic finance management and growth prospects.",
    },
    {
      id: 6,
      title: "IT",
      icon: "/It Services Icon With Name-01.png",
      desc: "Provides organizations with creative, dependable, and scalable technological solutions.",
    },
    {
      id: 7,
      title: "Education",
      icon: "/Education-Icons-01.png",
      desc: "Helps learners, professionals, and organizations with a focused, accessible learning platform.",
    },
    {
      id: 8,
      title: "On-Demand",
      icon: "/On demand-Icon-01.png",
      desc: "Delivers services and home solutions as soon as you need them.",
    },
    {
      id: 9,
      title: "OnBoarding",
      icon: "/ONBORDING-Icon-01.png",
      desc: "Designed to welcome new members, clients, or partners and offer guidance.",
    },
  ];

  return (
    <section className="w-full bg-[#EDF5FF] pb-20">
      {/* Header Section Desktop only*/}
      <div className="hidden lg:flex flex-wrap justify-start items-center text-center py-10 px-8 md:px-12 xl:px-32">
        <h2
          className="bg-[#00509D] text-white font-bold text-2xl lg:text-3xl xl:text-4xl p-6 lg:p-8 mb-4 lg:mb-0"
          style={{ borderRadius: "8px 0px 30px 8px" }}
        >
          Our Industry <br /> Focus
        </h2>
        <p
          className="bg-white shadow-md shadow-gray-200 text-gray-800 text-justify text-base md:text-lg lg:text-xl font-medium p-6 lg:p-8 ms-0 mb-6"
          style={{
            borderRadius: "8px 8px 30px 0px",
            maxWidth: "650px",
          }}
        >
          Unleash your business potential with our innovative suite of modules,
          designed for seamless growth and efficiency.
        </p>
      </div>

      {/* Header Section mobile screens */}
  <div className="flex lg:hidden py-10">
            <h2 className="text-md font-bold bg-[#00509D] text-white p-1 text-center justify-center  ms-8" style={{ borderRadius: "8px 0px 30px 8px" }}>               
              Our Industry Focus</h2>
            <p className="text-sm bg-white shadow-md shadow-gray-200 text-gray-800 text-justify p-1 mb-3 me-8"
                style={{
                 borderRadius: "8px 8px 30px 0px",
                 }}>
                Unleash your business potential with our innovative suite of modules,
                designed for seamless growth and efficiency.
            </p>
         </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-16 xl:px-24 w-full max-w-[1300px] mx-auto">
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start text-left hover:shadow-lg transition-all duration-300 h-[230px] justify-start"
          >
            {/* Image in circular background */}
            <div className="bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-full p-4 mb-4 flex items-center justify-center w-[80px] h-[80px]">
              <Image
                src={mod.icon}
                alt={mod.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Text content */}
            <h3 className="text-lg font-semibold text-[#1E3C72] mb-2">
              {mod.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{mod.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;


