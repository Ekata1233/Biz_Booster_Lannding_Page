// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const LeadGenerate = () => {
//   return (
//     <>
//       <section className="py-8 md:py-12 bg-white">
//         <h2 className='text-2xl md:text-3xl lg:text-5xl text-blue-700 font-bold text-center mb-6 md:mb-10 mt-6 md:mt-10'>
//           #India's First Hybrid Service Marketplace
//         </h2>
//         <div className='container mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-5 lg:ms-20'>
//             <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//                 100% Verified Real Providers
//               </div>
//               <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
//                 Verified Service Providers 
//               </h1>
//               <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
//                 Every provider on FetchTrue undergoes a thorough verification process, ensuring credibility, professionalism, and authenticity. Customers engage only with trusted providers.
//               </p>
//             </div>
            
//             <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
//               <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
//                 <Image
//                   src={"/12953560_Data_security_01 [Converted]-01-01.png"}
//                   alt="Verified service providers dashboard"
//                   width={500}
//                   height={500}
//                   className="w-full h-auto"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Customer Centric Section */}
//       <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className='container mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:me-15'>
//             {/* Text Content */}
//             <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//                 5X Productivity
//               </div>
//               <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
//                 Customer Centric
//               </h1>
//               <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
//                 At Fetch True, you are the core focus. From connecting you with verified and trusted service providers, we ensure every interaction is smooth and secure. Our platform is designed for ease and customized experiences, suggesting services based on your needs.
//               </p>
//             </div>
            
//             {/* Image */}
//             <div className='w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0'>
//               <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:ms-20">
//                 <Image
//                   src={"/273155455_679b781f-003b-45c4-aa0c-5797366906a6 (1) [Converted]-01 (1).png"}
//                   alt="Customer centric approach illustration"
//                   width={500}
//                   height={500}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Guaranteed Satisfaction Section */}
//       <section className="py-8 md:py-12 bg-white">
//         <div className='container mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:ms-20'>
//             {/* Text Content */}
//             <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//                 100% Satisfaction
//               </div>
//               <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
//                 Guaranteed Satisfaction
//               </h1>
//               <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
//                 Fetch True ensures a stress-free experience. If any issue arises, we'll immediately connect you with a new service provider to keep things running smoothly, your satisfaction is our top priority.
//               </p>
//             </div>
            
//             {/* Image */}
//             <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
//               <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
//                 <Image
//                   src={"/205445046_55218d05-17d7-4aee-b0c1-474c5c5d833e-01.png"}
//                   alt="Customer satisfaction guarantee illustration"
//                   width={500}
//                   height={500}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Instant Support Section */}
//       <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className='container mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:me-15'>
//             {/* Text Content */}
//             <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//                 Real-time Support
//               </div>
//               <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
//                 Get Instant Support
//               </h1>
//               <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
//                 If there is a problem with a service provider, Fetch True will fix it, either by working with the provider or connecting you with another service provider, so that your service keeps running smoothly.
//               </p>
//             </div>
            
//             {/* Image */}
//             <div className='w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0'>
//               <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:ms-20">
//                 <Image
//                   src={"/Get Instant Support-01.png"}
//                   alt="Instant support system illustration"
//                   width={500}
//                   height={500}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Transparency Communication Section */}
//       <section className="py-8 md:py-12 bg-white">
//         <div className='container mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:ms-20'>
//             {/* Text Content */}
//             <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
//               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
//                 Secure and Transparent Communication
//               </div>
//               <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
//                 Transparency Communication
//               </h1>
//               <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
//                 At Fetch True, we communicate with service providers while keeping your personal information private. Our transparent approach ensures trust at every step, giving you confidence that you're working with verified providers who value honesty and integrity as much as you do.
//               </p>
//             </div>
            
//             {/* Image */}
//             <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
//               <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
//                 <Image
//                   src={"/8474028_1895 [Converted]-01-01.png"}
//                   alt="Transparent communication process illustration"
//                   width={500}
//                   height={500}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-10 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
//             Ready to Transform Your Service Experience?
//           </h3>
//           <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
//             Join thousands of customers already using India's first hybrid service marketplace to find trusted providers.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
//             <Link href="/contact" className="inline-block">
//               <button className="bg-white text-blue-600 hover:bg-gray-100 px-5 sm:px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base w-full sm:w-auto">
//                 Get Started Today
//               </button>
//             </Link>
//             <Link href="tel:+919765303735" className="inline-block">
//               <button className="border border-white text-white hover:bg-blue-700 px-5 sm:px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
//                 Contact Support
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default LeadGenerate



import Link from 'next/link'
import React from 'react'

const LeadGenerate = () => {
  return (
    <> 
      {/* For Desktop */}
<section className="hidden lg:block py-16 px-6 lg:px-10 xl:px-20 w-full overflow-hidden">
  <h2 className="text-black font-bold text-3xl lg:text-4xl xl:text-5xl text-center leading-snug">
    Get Any Service Anytime, Anywhere <br />
    India’s First{" "}
    <span className="text-[#1E3C72] to-[#2A5298] font-bold">
      Hybrid Marketplace
    </span>
  </h2>

  {/* ---------- 1. Verified Service Provider ---------- */}
  <section className="relative flex flex-wrap py-10 items-center">
    <div className="bg-white shadow-lg max-w-[900px] w-full lg:w-[700px] xl:w-[930px] ms-6 lg:ms-10 xl:ms-20 mt-20 rounded-lg">
      <div className="p-8 lg:p-10 xl:p-12 space-y-4">
        <span className="text-[#1E3C72] font-semibold">
          100% Verified Real Providers
        </span>
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Verified Service Providers
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl text-[#626262]">
          Every provider on Fetch True is checked, approved, and reliable. <br />
          So you can connect with confidence.
        </p>
        <ul className="list-disc font-normal text-[#626262] ms-10 space-y-2 text-sm lg:text-base xl:text-lg">
          <li>Verified identity & business details</li>
          <li>Quality checked & customer rated</li>
          <li>Trusted and experienced professionals</li>
          <li>Backed by Fetch True’s trust assurance</li>
        </ul>
      </div>
    </div>

    <div className="absolute right-8 lg:right-16 xl:right-40 top-10">
      <img
        src="/12953560_Data_security_01 [Converted]-01-01.png"
        alt="Verified service"
        className="w-[260px] lg:w-[330px] xl:w-[400px] h-auto object-contain"
      />
    </div>
  </section>

  {/* ---------- 2. Customer Centric (Image Left) ---------- */}
  <section className="relative flex items-center py-10">
    <div className="absolute left-8 lg:left-16 xl:left-40 top-5">
      <img
        src="/273155455_679b781f-003b-45c4-aa0c-5797366906a6 (1) [Converted]-01 (1).png"
        alt="Customer Centric"
        className="h-[260px] lg:h-[300px] xl:h-[350px] w-auto object-contain"
      />
    </div>

    <div className="bg-white shadow-lg max-w-[900px] w-full lg:w-[700px] xl:w-[930px] ms-auto me-6 lg:me-10 xl:me-20 mt-20 rounded-lg">
      <div className="p-8 lg:p-10 xl:p-12 space-y-4 xl:ms-90 lg:ms-60">
        <span className="text-[#1E3C72] font-semibold">5X Productivity</span>
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Customer Centric
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl text-[#626262]">
          Everything we build starts with your needs and ends with your satisfaction.
        </p>
        <ul className="list-disc font-normal text-[#626262] ms-10 space-y-2 text-sm lg:text-base xl:text-lg">
          <li>Verified & trusted service connections</li>
          <li>Smooth, secure, and effortless experience</li>
          <li>Smart suggestions tailored to you</li>
          <li>Designed for comfort, trust, and ease</li>
        </ul>
      </div>
    </div>
  </section>

  {/* ---------- 3. Guaranteed Satisfaction ---------- */}
  <section className="relative flex items-center py-10">
    <div className="bg-white shadow-lg max-w-[900px] w-full lg:w-[700px] xl:w-[930px] ms-6 lg:ms-10 xl:ms-20 mt-20 rounded-lg">
      <div className="p-8 lg:p-10 xl:p-12 space-y-4">
        <span className="text-[#1E3C72] font-semibold">100% Satisfaction</span>
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Guaranteed Satisfaction
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl text-[#626262]">
          Your Satisfaction, Our Promise
        </p>
        <ul className="list-disc font-normal text-[#626262] ms-10 space-y-2 text-sm lg:text-base xl:text-lg">
          <li>Hassle-free experience from start to finish</li>
          <li>Instant replacement if any issue arises</li>
          <li>Your satisfaction is always our top priority</li>
          <li>Verified providers for reliable, trustworthy service</li>
        </ul>
      </div>
    </div>

    <div className="absolute right-8 lg:right-16 xl:right-40 top-2">
      <img
        src="/205445046_55218d05-17d7-4aee-b0c1-474c5c5d833e-01.png"
        alt="Guaranteed Satisfaction"
        className="w-[280px] lg:w-[340px] xl:w-[420px] h-auto object-contain"
      />
    </div>
  </section>

  {/* ---------- 4. Get Instant Support (Image Left) ---------- */}
  <section className="relative flex items-center py-10">
    <div className="absolute  lg:left-16 xl:left-40 top-0">
      <img
        src="/Get Instant Support-01.png"
        alt="Instant Support"
        className="h-[350px] lg:h-[420px] xl:h-[450px] w-auto object-contain"
      />
    </div>

    <div className="bg-white shadow-lg max-w-[900px] w-full lg:w-[700px] xl:w-[930px] ms-auto me-6 lg:me-10 xl:me-20 mt-20 rounded-lg">
      <div className="p-8 lg:p-10 xl:p-12 space-y-4 xl:ms-90 lg:ms-60">
        <span className="text-[#1E3C72] font-semibold">Real Time Support</span>
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Get Instant Support
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl text-[#626262]">
          Support That Never Sleeps
        </p>
        <ul className="list-disc font-normal text-[#626262] ms-10 space-y-2 text-sm lg:text-base xl:text-lg">
          <li>Quick resolution if any issue arises</li>
          <li>Connect instantly with a new provider if needed</li>
          <li>Keep your service running smoothly, stress-free</li>
          <li>Reliable support whenever you need it</li>
        </ul>
      </div>
    </div>
  </section>

  {/* ---------- 5. Transparency Communication ---------- */}
  <section className="relative flex items-center py-10">
    <div className="bg-white shadow-lg max-w-[900px] w-full lg:w-[700px] xl:w-[930px] ms-6 lg:ms-10 xl:ms-20 mt-15 rounded-lg">
      <div className="p-8 lg:p-10 xl:p-12 space-y-4">
        <span className="text-[#1E3C72] font-semibold">
          Secure and Transparent Communication
        </span>
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Transparency Communication
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl text-[#626262]">
          Clear, Honest, and Trusted
        </p>
        <ul className="list-disc font-normal text-[#626262] ms-10 space-y-2 text-sm lg:text-base xl:text-lg">
          <li>Personal information stays fully private</li>
          <li>Clear, honest communication with service providers</li>
          <li>Work confidently with verified, trusted professionals</li>
          <li>Integrity and transparency at every interaction</li>
        </ul>
      </div>
    </div>

    <div className="absolute right-8 lg:right-16 xl:right-40 top-5">
      <img
        src="/8474028_1895 [Converted]-01-01.png"
        alt="Transparency Communication"
        className="w-[300px] lg:w-[370px] xl:w-[430px] h-auto object-contain"
      />
    </div>
  </section>
</section>



{/* For Mobile  */}
<section className="block lg:hidden py-12 px-4 w-full">
  <h2 className="text-black font-bold text-2xl sm:text-3xl text-center leading-snug">
    Get Any Service Anytime, Anywhere <br />
    India’s First{" "}
    <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text">
      Hybrid Marketplace
    </span>
  </h2>

  {/* ----------  Verified Service Provider Section ---------- */}
  <section className="flex flex-col items-center py-16 mt-8 relative">
    <div className="bg-white shadow-lg w-full max-w-md h-auto mt-16 px-4 rounded-lg">
      <div className="py-6 space-y-4 text-justify px-4 mt-16">
        <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text font-semibold">
          100% Verified Real Providers
        </span>
        <h1 className="font-bold text-2xl">Verified Service Providers</h1>
        <p className="font-medium text-[#626262] text-sm sm:text-base">
          Every provider on Fetch True is checked, approved, and reliable. <br />
          So you can connect with confidence.
        </p>
        <ul className="list-disc text-left text-[#626262] ms-6 space-y-2 text-sm sm:text-base">
          <li>Verified identity & business details</li>
          <li>Regular quality checks and audits</li>
          <li>Customer reviews and ratings</li>
          <li>Compliance with industry standards</li>
        </ul>
      </div>
    </div>

    <img
      src="/12953560_Data_security_01 [Converted]-01-01.png"
      alt="Verified Service"
      className="w-[220px] sm:w-[260px] h-auto object-contain absolute -top-5"
    />
  </section>

  {/* ----------  Customer Centric Section ---------- */}
  <section className="flex flex-col items-center py-10 relative">
    <div className="bg-white shadow-lg w-full max-w-md h-auto mt-16 px-4 rounded-lg">
      <div className="py-6 space-y-4 text-justify px-4 mt-16">
        <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text font-semibold">
          5X Productivity
        </span>
        <h1 className="font-bold text-2xl">Customer Centric</h1>
        <p className="font-medium text-[#626262] text-sm sm:text-base">
          Everything we build starts with your needs and ends with your satisfaction.
        </p>
        <ul className="list-disc text-left text-[#626262] ms-6 space-y-2 text-sm sm:text-base">
          <li>Verified & trusted service connections</li>
          <li>Smooth, secure, and effortless experience</li>
          <li>Smart suggestions tailored to you</li>
          <li>Designed for comfort, trust, and ease</li>
        </ul>
      </div>
    </div>

    <img
      src="/273155455_679b781f-003b-45c4-aa0c-5797366906a6 (1) [Converted]-01 (1).png"
      alt="Customer Centric"
      className="w-[230px] sm:w-[270px] h-auto object-contain absolute -top-5"
    />
  </section>

  {/* ----------  Guaranteed Satisfaction Section ---------- */}
  <section className="flex flex-col items-center py-12 relative">
    <div className="bg-white shadow-lg w-full max-w-md h-auto mt-16 px-4 rounded-lg">
      <div className="py-6 space-y-4 text-justify px-4 mt-16">
        <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text font-semibold">
          100% Satisfaction
        </span>
        <h1 className="font-bold text-2xl">Guaranteed Satisfaction</h1>
        <p className="font-medium text-[#626262] text-sm sm:text-base">
          Your Satisfaction, Our Promise
        </p>
        <ul className="list-disc text-left text-[#626262] ms-6 space-y-2 text-sm sm:text-base">
          <li>Hassle-free experience from start to finish</li>
          <li>Instant replacement if any issue arises</li>
          <li>Your satisfaction is always our top priority</li>
          <li>Verified providers for reliable, trustworthy service</li>
        </ul>
      </div>
    </div>

    <img
      src="/205445046_55218d05-17d7-4aee-b0c1-474c5c5d833e-01.png"
      alt="Guaranteed Satisfaction"
      className="w-[220px] sm:w-[260px] h-auto object-contain absolute -top-5"
    />
  </section>

  {/* ----------  Get Instant Support Section ---------- */}
  <section className="flex flex-col items-center py-12 relative">
    <div className="bg-white shadow-lg w-full max-w-md h-auto mt-16 px-4 rounded-lg">
      <div className="py-6 space-y-4 text-justify px-4 mt-16">
        <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text font-semibold">
          Real Time Support
        </span>
        <h1 className="font-bold text-2xl">Get Instant Support</h1>
        <p className="font-medium text-[#626262] text-sm sm:text-base">
          Support That Never Sleeps
        </p>
        <ul className="list-disc text-left text-[#626262] ms-6 space-y-2 text-sm sm:text-base">
          <li>Quick resolution if any issue arises</li>
          <li>Connect instantly with a new provider if needed</li>
          <li>Keep your service running smoothly, stress-free</li>
          <li>Reliable support whenever you need it</li>
        </ul>
      </div>
    </div>

    <img
      src="/Get Instant Support-01.png"
      alt="Instant Support"
      className="w-[230px] sm:w-[270px] h-auto object-contain absolute -top-5"
    />
  </section>

  {/* ----------  Transparency Communication Section ---------- */}
  <section className="flex flex-col items-center py-12 relative">
    <div className="bg-white shadow-lg w-full max-w-md h-auto mt-16 px-4 rounded-lg">
      <div className="py-6 space-y-4 text-justify px-4 mt-16">
        <span className="bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-transparent bg-clip-text font-semibold">
          Secure and Transparent Communication
        </span>
        <h1 className="font-bold text-2xl">Transparency Communication</h1>
        <p className="font-medium text-[#626262] text-sm sm:text-base">
          Clear, Honest, and Trusted
        </p>
        <ul className="list-disc text-left text-[#626262] ms-6 space-y-2 text-sm sm:text-base">
          <li>Personal information stays fully private</li>
          <li>Clear, honest communication with service providers</li>
          <li>Work confidently with verified, trusted professionals</li>
          <li>Integrity and transparency at every interaction</li>
        </ul>
      </div>
    </div>

    <img
      src="/8474028_1895 [Converted]-01-01.png"
      alt="Transparency Communication"
      className="w-[220px] sm:w-[260px] h-auto object-contain absolute -top-5"
    />
  </section>
</section>



{/* CTA Section */}
<section className="relative w-full h-90 lg:h-80 flex items-center justify-center text-center overflow-hidden">
  {/* Background Image */}
  <img
    src="/cta.jpg"
    alt="CTA Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1E3C72] to-[#2A5298] opacity-85"></div>

  {/* Content */}
  <div className="relative z-10 px-6 md:px-10">
    <h2 className="text-white text-3xl md:text-4xl font-bold">
      Ready to Transform Your Service Experience?
    </h2>
    <p className="text-gray-100 mt-3 max-w-2xl mx-auto">
      Thousands of customers trust <span className="font-semibold">Fetch True </span> 
      to deliver fast, verified, and secure services nationwide.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-100 transition">
        Get Started Today
      </button>
      <Link href='/contact'>
        <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition">
        Contact Now
      </button>
      </Link>
      
    </div>
  </div>
</section>



    </>
  )
}

export default LeadGenerate

       
