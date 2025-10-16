// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { 
//   FaCubes,
//   FaChartLine,
//   FaHandHoldingUsd,
//   FaHeadset,
//   FaUserCheck,
//   FaUndoAlt
// } from "react-icons/fa";

// const WhyChooseFetchTrue = () => {
//   const featureCards = [
//     {
//       title: "All-in-One Platform",
//       description: "From business setup, finance, IT, legal, education, to on-demand services — everything under one trusted network.",
//       icon: <FaCubes className="text-blue-600 text-2xl" />,
//       bgGradient: "from-blue-50 to-cyan-50",
//       borderColor: "border-blue-100",
//       titleColor: "text-blue-800",
//       animationDelay: 0.1
//     },
//     {
//       title: "Real-time Connectivity",
//       description: "Allow visitors to view real-time information about available providers, their proximity, response times and connect quickly with the providers.",
//       icon: <FaHeadset className="text-purple-600 text-2xl" />,
//       bgGradient: "from-purple-50 to-violet-50",
//       borderColor: "border-purple-100",
//       titleColor: "text-purple-800",
//       animationDelay: 0.4
//     },
//      {
//       title: "Cost Effective Solution",
//       description: "FetchTrue gives you greater value without charging extra by providing project management, marketing, and lead generating solutions.",
//       icon: <FaUserCheck className="text-indigo-600 text-2xl" />,
//       bgGradient: "from-indigo-50 to-blue-50",
//       borderColor: "border-indigo-100",
//       titleColor: "text-indigo-800",
//       animationDelay: 0.5
//     },
   
//     {
//       title: "Transparent Workflow",
//       description: "From searching (or posting) your requirement to final delivery, FetchTrue ensure that WorkFlow module make every step visible and trackable, which saves time and efforts.",
//       icon: <FaHandHoldingUsd className="text-amber-600 text-2xl" />,
//       bgGradient: "from-amber-50 to-yellow-50",
//       borderColor: "border-amber-100",
//       titleColor: "text-amber-800",
//       animationDelay: 0.3
//     },
//      {
//       title: "On-Ground Support",
//       description: "At FetchTrue, we believe that service goes beyond online communication. That’s why our dedicated team provides real on-ground support whenever an issue arises. If there’s any problems or delay, we personally reach out and coordinate directly with the service provider. ",
//       icon: <FaChartLine className="text-green-600 text-2xl" />,
//       bgGradient: "from-green-50 to-emerald-50",
//       borderColor: "border-green-100",
//       titleColor: "text-green-800",
//       animationDelay: 0.2
//     },
    
   
//     {
//       title: "Nationwide Reach",
//       description: "Fetch True provides you to accessibility by matching you with certified services in all cities, towns, and states of India, ensuring dependability and quality wherever you do business.",
//       icon: <FaUndoAlt className="text-red-600 text-2xl" />,
//       bgGradient: "from-red-50 to-pink-50",
//       borderColor: "border-red-100",
//       titleColor: "text-red-800",
//       animationDelay: 0.6
//     }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-sky-50 to-white px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-blue-700 mb-4">Why Choose Fetch True</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover the advantages that make us the ideal choice for your business growth and success
//           </p>
//         </motion.div>

//         {/* Feature Cards Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
//         >
//           {featureCards.map((card, index) => (
//             <motion.div 
//               key={index}
//               variants={itemVariants}
//               className={`bg-gradient-to-br ${card.bgGradient} rounded-xl p-6 border ${card.borderColor} shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center text-center`}
//             >
//               <div className="bg-white p-4 rounded-full shadow-md mb-5">
//                 {card.icon}
//               </div>
//               <h3 className={`font-bold ${card.titleColor} text-xl mb-3`}>{card.title}</h3>
//               <p className="text-gray-700 text-justify">{card.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
//             <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
//             <p className="mb-6 max-w-2xl mx-auto">Join thousands of satisfied clients who have experienced the FetchTrue advantage</p>
//             <Link href="/contact">
//              <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-50 transition-colors">
//               Connect With Us
//             </button>
//             </Link>

           
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseFetchTrue;


"use client";
import { 
  FaCubes,
  FaChartLine,
  FaHandHoldingUsd,
  FaHeadset,
  FaUserCheck,
  FaUndoAlt
} from "react-icons/fa";


const WhyChooseUs = () => {
  
  return (
    <>
     {/* Desktop Screens */}
    <section className="hidden lg:block">
  {/* Title Section */}
  <div className="flex flex-wrap justify-start items-center text-center py-10 mt-10 px-12 xl:px-32">
    <h2
      className="bg-[#00509D] text-white font-bold text-2xl lg:text-3xl xl:text-4xl p-6 lg:p-8 mb-4 lg:mb-0"
      style={{ borderRadius: "8px 0px 30px 8px" }}
    >
      Why Choose <br /> Fetch True ?
    </h2>
    <p
      className="bg-white shadow-md shadow-gray-200 text-gray-800 text-justify text-lg lg:text-xl font-medium p-6 lg:p-8 ms-0 mb-6"
      style={{
        borderRadius: "8px 8px 30px 0px",
        maxWidth: "650px",
      }}
    >
      Built to make finding and managing services easier,
      <br /> faster, and more reliable.
    </p>
  </div>

  {/* Main Section */}
<div className="flex flex-col lg:flex-row items-start justify-center gap-8 xl:gap-12 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 pb-10 overflow-x-hidden max-w-[1600px] mx-auto">

  {/* Left Image Section */}
  <div className="w-full lg:w-[35%] flex justify-center lg:justify-end ">
    <img
      src="/why.png"
      alt="Why choose us"
      className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[550px] h-auto object-contain"
    />
  </div>

  {/* Right Content Section */}
  <div className="w-full lg:w-[60%]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
      
      {/* Row 1 */}
      <div>
        <h3 className="flex items-center text-[#193CB8] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaCubes />
          </span>
          All-in-One Platform
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Access multiple services in one place</li>
          <li>Quick and seamless connections</li>
          <li>Simplified experience for all your needs</li>
        </ul>
      </div>

      <div>
        <h3 className="flex items-center text-[#6E11B0] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaHeadset />
          </span>
          Real-time Connectivity
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Instant access to verified service providers</li>
          <li>Quick updates and status tracking</li>
          <li>Stay connected every step of the way</li>
        </ul>
      </div>

      {/* Row 2 */}
      <div>
        <h3 className="flex items-center text-[#372AAC] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaUserCheck />
          </span>
          Cost Effective Solution
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Competitive pricing across services</li>
          <li>Optimize time and resources</li>
          <li>Get maximum value with minimal effort</li>
        </ul>
      </div>

      <div>
        <h3 className="flex items-center text-[#973C00] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaHandHoldingUsd />
          </span>
          Transparent Workflow
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Clear communication with providers</li>
          <li>Verified and trusted processes</li>
          <li>Full visibility at every stage</li>
        </ul>
      </div>

      {/* Row 3 */}
      <div>
        <h3 className="flex items-center text-[#016630] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaChartLine />
          </span>
          On-Ground Support
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Physical presence for quality assurance</li>
          <li>Immediate issue resolution</li>
          <li>Personalized support for service delivery</li>
        </ul>
      </div>

      <div>
        <h3 className="flex items-center text-[#9F0712] font-semibold text-base md:text-lg lg:text-xl mb-2">
          <span className="bg-white p-2 rounded-full shadow-md mr-2 text-lg">
            <FaUndoAlt />
          </span>
          Nationwide Reach
        </h3>
        <ul className="list-disc ms-5 text-gray-700 text-sm md:text-base xl:text-lg">
          <li>Services available across cities & states</li>
          <li>Rapid connectivity, no matter your location</li>
          <li>Trusted providers everywhere you need</li>
        </ul>
      </div>
    </div>
  </div>
</div>


</section>



     {/* Mobile Screens */}
<section className="block lg:hidden py-10 px-4 sm:px-6">
  {/* Header Section */}
  <div className="flex">
            <h2 className="text-md font-bold bg-[#00509D] text-white p-1 text-center justify-center mt-2" style={{ borderRadius: "8px 0px 30px 8px" }}>               
              Why Choose Fetch true ?</h2>
            <p className="text-sm bg-white shadow-md shadow-gray-200 text-gray-800 text-justify p-1 mb-3"
                style={{
                 borderRadius: "8px 8px 30px 0px",
                 }}>
                Built to make finding and managing services easier,
               <br /> faster, and more reliable.</p>
         </div>

  {/* Features Section */}
  <div className="flex flex-col items-center space-y-5">
    {/* Card 1 */}
    <div className="bg-white shadow-lg w-full max-w-[300px] sm:max-w-[350px] p-3 mt-8"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#193CB8] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaCubes />
        </span>
        All-in-One Platform
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Access multiple services in one place</li>
        <li>Quick and seamless connections</li>
        <li>Simplified experience for all your needs</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg w-full max-w-[290px] sm:max-w-[350px] p-1 translate-x-8 sm:translate-x-16"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#6E11B0] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaHeadset />
        </span>
        Real-time Connectivity
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Instant access to verified service providers</li>
        <li>Quick updates and status tracking</li>
        <li>Stay connected every step of the way</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg w-full max-w-[300px] sm:max-w-[350px] p-3"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#372AAC] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaUserCheck />
        </span>
        Cost Effective Solution
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Competitive pricing across services</li>
        <li>Optimize time and resources</li>
        <li>Get maximum value with minimal effort</li>
      </ul>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg w-full max-w-[290px] sm:max-w-[350px] p-1 translate-x-8 sm:translate-x-16"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#973C00] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaHandHoldingUsd />
        </span>
        Transparent Workflow
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Clear communication with providers</li>
        <li>Verified and trusted processes</li>
        <li>Full visibility at every stage</li>
      </ul>
    </div>

    {/* Card 5 */}
    <div className="bg-white shadow-lg w-full max-w-[300px] sm:max-w-[350px] p-3"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#016630] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaChartLine />
        </span>
        On-Ground Support
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Physical presence for quality assurance</li>
        <li>Immediate issue resolution</li>
        <li>Personalized support for service delivery</li>
      </ul>
    </div>

    {/* Card 6 */}
    <div className="bg-white shadow-lg w-full max-w-[290px] sm:max-w-[350px] p-1 translate-x-8 sm:translate-x-16"
      style={{ borderRadius: "8px" }}>
      <h3 className="flex items-center text-[#9F0712] font-bold text-lg mb-2">
        <span className="bg-white p-2 rounded-full shadow-md mr-2">
          <FaUndoAlt />
        </span>
        Nationwide Reach
      </h3>
      <ul className="list-disc ms-5 text-gray-700 text-base">
        <li>Services available across cities & states</li>
        <li>Rapid connectivity, no matter your location</li>
        <li>Trusted providers everywhere you need</li>
      </ul>
    </div>
  </div>
</section>


    </>
  )
}

export default WhyChooseUs
