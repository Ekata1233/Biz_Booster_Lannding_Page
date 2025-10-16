// "use client"

// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import Head from "next/head";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function Testimonial() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   // Static testimonial data
//   const testimonials = [
//     {
//       para: "As a service provider, FetchTrue has given me access to genuine clients and projects that match my expertise. The platform's verification system builds trust and ensures smooth collaborations.",
//       src: "/Profile.jpg",
//       title: "Arjun Verma",
//       text1: "Kolhapur",
//       rating: 4.5
//     },
//     {
//       para: "FetchTrue's hybrid marketplace is unlike anything I've used before. It combines innovation, reliability, and efficiency, allowing us to find the right partners and services quickly. The experience has been seamless and highly productive.",
//       src: "/Profile.jpg",
//       title: "Aarushi Mehta",
//       text1: "Mumbai",
//       rating: 5
//     },
//     {
//       para:"FetchTrue isn't just a marketplace—it's a growth partner. The platform helped us reach new clients, streamline our operations, and scale efficiently.",
//       src: "/Profile.jpg",
//       title: "Rahul Deshmukh",
//       text1: "Pune",
//       rating: 4
//     },
//     {
//       para: "FetchTrue has completely transformed the way I connect with verified service providers. The platform is intuitive, trustworthy, and has helped me grow my business without any hassle.",
//       src: "/Profile.jpg",
//       title: "Harshit Tiwari",
//       text1: "Mumbai",
//       rating: 4.5
//     },
//     {
//       para: "FetchTrue is more than a marketplace—it's a growth partner.",
//       src: "/Profile.jpg",
//       title: "Karan Joshi",
//       text1: "Nashik",
//       rating: 3.5
//     },
//     {
//       para: "Prompt service, excellent communication, and outstanding results. What more could you ask for? I'm thoroughly impressed and will be a returning customer.",
//       src: "/Profile.jpg",
//       title: "Kavya",
//       text1: "Pune",
//       rating: 5
//     }
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(<FaStar key={i} className="text-blue-800 text-lg" />);
//       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//         stars.push(<FaStarHalfAlt key={i} className="text-blue-800 text-lg" />);
//       } else {
//         stars.push(<FaStar key={i} className="text-gray-300 text-lg" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="py-10 bg-white px-10">
//       <Head>
//         <title>Testimonials</title>
//         <meta name="description" content="What our clients say about our services" />
//       </Head>
      
//       <div className="container mx-auto px-4 lg:w-300 md:w-150">
//         <h4 className="text-blue-600 pt-8 pb-2 text-center text-lg font-semibold">----- Testimonial -----</h4>
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h1>

//         {/* CSS for equal height cards */}
//         <style jsx>{`
//           .testimonial-card {
//             height: 350px;
//             display: flex;
//             flex-direction: column;
//           }
//           .testimonial-content {
//             flex: 1;
//             display: flex;
//             flex-direction: column;
//           }
//           .testimonial-text {
//             flex: 1;
//             overflow: hidden;
//             display: -webkit-box;
//             -webkit-line-clamp: 8;
//             -webkit-box-orient: vertical;
//           }
//         `}</style>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true, el: '.testimonial-pagination' }}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="pb-12"
//         >
//           {testimonials.map((testi, index) => (
//             <SwiperSlide key={index}>
//               <div className="h-full flex justify-center p-2">
//                 <div className="testimonial-card  overflow-hidden w-full max-w-sm flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl">
                  
//                   {/* User Image */}
//                   <div className="w-20 h-20 rounded-full overflow-hidden mt-6 border-4 border-blue-100">
//                     <img 
//                       src={testi.src} 
//                       alt={testi.title} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Name */}
//                   <h3 className="mt-2 text-xl font-semibold text-gray-800">{testi.title}</h3>

//                   {/* Location */}
//                   {/* <p className="text-gray-500 text-sm mt-1">{testi.text1}</p> */}

//                   {/* Star Rating */}
//                   <div className="flex mb-2 mt-2">
//                     {renderStars(testi.rating)}
//                   </div>

//                   {/* Testimonial Text */}
//                   <div className="testimonial-content bg-blue-50 mt-1 rounded-xl w-full p-4">
//                     <p className="testimonial-text text-gray-700 text-sm text-justify">
//                       "{testi.para}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom pagination */}
//         <div className="testimonial-pagination flex justify-center mt-6 space-x-2" />
//       </div>
//     </div>
//   );
// }

// export default Testimonial;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Verma",
      image: "/Profile.jpg",
      rating: 5,
      feedback:
        "As a service provider, FetchTrue has given me access to genuine clients and projects that match my expertise. The platform's verification system builds trust and ensures smooth collaborations.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      image: "/Profile.jpg",
      rating: 4,
      feedback:
        "FetchTrue's hybrid marketplace is unlike anything I've used before. It combines innovation, reliability, and efficiency, allowing us to find the right partners and services quickly. The experience has been seamless and highly productive.",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      image: "/Profile.jpg",
      rating: 4,
      feedback:
        "FetchTrue isn't just a marketplace—it's a growth partner. The platform helped us reach new clients, streamline our operations, and scale efficiently.",
    },
    {
      id: 4,
      name: "Aarav Patel",
      image: "/Profile.jpg",
      rating: 5,
      feedback:
        "FetchTrue has completely transformed the way I connect with verified service providers. The platform is intuitive, trustworthy, and has helped me grow my business without any hassle.",
    },
    {
      id: 5,
      name: "Rushi Singh",
      image: "/Profile.jpg",
      rating: 4.5,
      feedback: "FetchTrue is more than a marketplace—it's a growth partner.",
    },
    {
      id: 6,
      name: "Kavya Mehta",
      image: "/Profile.jpg",
      rating: 4.2,
      feedback:
        "Prompt service, excellent communication, and outstanding results. What more could you ask for? I'm thoroughly impressed and will be a returning customer.",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-10">
      {/* Header Section Desktop */}
      <div className="hidden lg:flex flex-wrap justify-start items-center text-center py-5 px-8 md:px-12 xl:px-36">
        <h2
          className="bg-[#00509D] text-white font-bold text-2xl lg:text-3xl xl:text-3xl p-6 lg:p-6 mb-4 lg:mb-3"
          style={{ borderRadius: "8px 0px 30px 8px" }}
        >
          Testimonials
        </h2>
        <p
          className="bg-white shadow-md shadow-gray-200 text-gray-800 text-justify text-base md:text-lg lg:text-xl font-medium p-6 lg:p-5 ms-0 mb-6"
          style={{
            borderRadius: "8px 8px 30px 0px",
            maxWidth: "650px",
          }}
        >
          Every testimonial is a story of trust, satisfaction, <br /> and smooth experience.
        </p>
      </div>

      {/* Header Section Mobile */}
      <div className="flex flex-col lg:hidden py-6 px-6">
        <h2
          className="text-md font-bold bg-[#00509D] text-white p-3 text-center w-fit"
          style={{ borderRadius: "8px 0px 30px 8px" }}
        >
          Testimonials
        </h2>
        <p
          className="text-sm bg-white shadow-md shadow-gray-200 text-gray-800 text-justify p-3 mt-2"
          style={{ borderRadius: "8px 8px 30px 0px" }}
        >
          Every testimonial is a story of trust, satisfaction, and smooth experience.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-36">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            // 425: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-10"
        >
          {testimonials.map((test) => (
            <SwiperSlide key={test.id}>
              <div className="bg-[#F6F6F6] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-start justify-between h-[300px]">
                {/* Profile Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <img
                      src={test.image}
                      alt={test.name}
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-[#DBEAFE] object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-[#1E3C72]">{test.name}</h4>
                      <div className="flex text-yellow-400 text-sm">
                        {"⭐".repeat(Math.floor(test.rating))}
                      </div>
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">
                    {test.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;



