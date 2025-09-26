"use client"

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Static testimonial data
  const testimonials = [
    {
      para: "As a service provider, FetchTrue has given me access to genuine clients and projects that match my expertise. The platform's verification system builds trust and ensures smooth collaborations. It's a game-changer for freelancers and businesses alike.",
      src: "/testimonial-1.1.jpg",
      title: "Aniket",
      text1: "Kolhapur",
      rating: 4.5
    },
    {
      para: "FetchTrue's hybrid marketplace is unlike anything I've used before. It combines innovation, reliability, and efficiency, allowing us to find the right partners and services quickly. The experience has been seamless and highly productive.",
      src: "/anne-hathaway.jpg",
      title: "Ekata",
      text1: "Mumbai",
      rating: 5
    },
    {
      para:"FetchTrue isn't just a marketplace—it's a growth partner. The platform helped us reach new clients, streamline our operations, and scale efficiently. Their focus on authentic opportunities sets them apart from any other platform we've used.",
      src: "/testimonial-1.jpg",
      title: "Akshey",
      text1: "Pune",
      rating: 4
    },
    {
      para: "FetchTrue has completely transformed the way I connect with verified service providers. The platform is intuitive, trustworthy, and has helped me grow my business without any hassle. I highly recommend it to anyone looking for reliable solutions.",
      src: "/Ellipse 159.png",
      title: "Gouri",
      text1: "Mumbai",
      rating: 4.5
    },
    {
      para: "FetchTrue is more than a marketplace—it's a growth partner." ,
      src: "/anne.jpg",
      title: "Pranjal",
      text1: "Nashik",
      rating: 3.5
    },
    {
      para: "Prompt service, excellent communication, and outstanding results. What more could you ask for? I'm thoroughly impressed and will be a returning customer.",
      src: "/woman.jpg",
      title: "Sapna",
      text1: "Pune",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-blue-800 text-lg" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-blue-800 text-lg" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 text-lg" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white py-8 px-10">
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="What our clients say about our services" />
      </Head>
      
      <div className="container mx-auto px-4 lg:w-300 md:w-150">
        <h4 className="text-blue-600 pt-8 pb-2 text-center text-lg font-semibold">----- Testimonial -----</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h1>

        {/* CSS for equal height cards */}
        <style jsx>{`
          .testimonial-card {
            height: 350px;
            display: flex;
            flex-direction: column;
          }
          .testimonial-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .testimonial-text {
            flex: 1;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
          }
        `}</style>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex justify-center p-2">
                <div className="testimonial-card bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl">
                  
                  {/* User Image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mt-6 border-4 border-blue-100">
                    <img 
                      src={testi.src} 
                      alt={testi.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-2 text-xl font-semibold text-gray-800">{testi.title}</h3>

                  {/* Location */}
                  <p className="text-gray-500 text-sm mt-1">{testi.text1}</p>

                  {/* Star Rating */}
                  <div className="flex mb-2 mt-2">
                    {renderStars(testi.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <div className="testimonial-content bg-blue-50 mt-1 rounded-xl w-full p-4">
                    <p className="testimonial-text text-gray-700 text-sm text-justify italic">
                      "{testi.para}"
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="testimonial-pagination flex justify-center mt-6 space-x-2" />
      </div>
    </div>
  );
}

export default Testimonial;