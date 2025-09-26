"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Footer() {
  const [openDropdown, setOpenDropdown] = useState({
    services: false,
    industries: false
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const footerData = {
    companyName: "FetchTrue",
    description:"FTFL Technology Private Limited is the registered legal entity operating the brand Fetch True.  Welcome to FetchTrue service we connect business across country, helping you build a secure financial future and make smart decisions. Join us on the path to financial success!",
    address:
      "Office no.307, 3rd Floor, Amanora Chamber, Amanora Mall, Hadapsar, Pune- 411028",
    email: "info@fetchtrue.com",
    phone: "+91 9309517500",
    website: "www.fetchtrue.com",
    socialLinks: [
      { type: "facebook", link: "https://www.facebook.com/share/1BXEeQnmYF/" },
      {
        type: "instagram",
        link: "https://www.instagram.com/fetchtrue?utm_source=qr&igsh=dzl1NTJ1c2Fxcnpx",
      },
      { type: "linkedin", link: "https://www.linkedin.com/company/fetchtrue/" },
      { type: "whatsapp", link: "https://wa.me/919309517500" },
      { type: "youtube", link: "https://www.youtube.com/@FetchTrue" },
      {
        type: "playstore",
        link: "https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x",
        image: "Untitled-1.png",
      },
    ],
  };

  const industriesServices = {
    services: [
      "Technical SEO",
      "Mobile Marketing",
      "Meta Social Media Marketing",
      "Landing Page Design",
      "Icon Design",
      "Safety Equipment Supply",
      "Food Safety and Quality Control",
      "Farm Management and Operation",
      "UI/UX Design",
      "Back-End and Front-End Development",
      "WorkFlow Automation"
    ],
    industries: [
      "Tech & Start-Up",
      "Marketing",
      "Legal and Law Firm",
      "Finance"
    ]
  };

  const socialIcons = {
    facebook: <FaFacebookF className="text-[#1877F2]" />,
    instagram: <FaInstagram className="text-[#e44095]" />,
    linkedin: <FaLinkedinIn className="text-[#0A66C2]" />,
    whatsapp: <FaWhatsapp className="text-[#25D366]" />,
    youtube: <FaYoutube className="text-[#FF0000]" />,
  };

  const renderSocialIcons = footerData?.socialLinks?.filter((link) =>
    ["facebook", "instagram", "linkedin", "whatsapp", "youtube"].includes(
      link.type
    )
  );

  const renderDownloadLinks = footerData?.socialLinks?.filter((link) =>
    ["playstore", "appstore"].includes(link.type)
  );

  return (
    <footer className="text-white bg-gradient-to-r from-[#003f7f] via-[#00509D] to-[#007bbd] pb-3">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        
        {/* Company Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h1 className="text-2xl font-extrabold mb-3">{footerData?.companyName}</h1>
          <p className="mb-4 leading-relaxed text-sm">{footerData?.description}</p>
        </div>

        {/* Official Info */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Official Info</h4>
          <p className="font-medium text-sm">FTFL Technology Pvt Ltd.</p>
          <p className="mb-3 text-sm">{footerData?.address}</p>
          <Link href={`mailto:${footerData?.email}`} className="mb-2 flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
            <FiMail className="flex-shrink-0" /> {footerData?.email}
          </Link>
          <Link href={`tel:+${footerData?.phone}`} className="mb-2 flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
            <FaPhoneAlt className="flex-shrink-0" /> {footerData?.phone}
          </Link>
          
          <h4 className="font-semibold mb-3 mt-4 text-lg">Our Social</h4>
          <div className="flex gap-3 text-xl">
            {renderSocialIcons?.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full"
              >
                {socialIcons[item.type]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links and Download Section Combined */}
        <div className="sm:col-span-2 lg:col-span-1">
          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
                  <MdOutlineKeyboardDoubleArrowRight className="flex-shrink-0" /> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
                  <MdOutlineKeyboardDoubleArrowRight /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/returnpolicy" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
                  <MdOutlineKeyboardDoubleArrowRight /> Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/termscondition" className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm">
                  <MdOutlineKeyboardDoubleArrowRight /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Section - Now below Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Download Our App</h4>
            <div className="flex flex-col gap-4">
              {renderDownloadLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <img
                    src={item.image}
                    alt={item.type}
                    className="w-40 hover:opacity-90 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Industries & Services Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-bold mb-4 text-lg">Industries & Services</h4>

          <div className="mb-4 border border-white/20 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleDropdown('industries')}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-white">Industries</span>
              {openDropdown.industries ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openDropdown.industries ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-4 bg-white/5">
                {industriesServices.industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-2 hover:text-gray-200 transition-colors text-sm mb-2 last:mb-0">
                    <MdOutlineKeyboardDoubleArrowRight className="mt-0.5 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Services Dropdown */}
          <div className="mb-4 border border-white/20 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleDropdown('services')}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-white">Services</span>
              {openDropdown.services ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openDropdown.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-2 gap-3 p-4 bg-white/5">
                {industriesServices.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2 hover:text-gray-200 transition-colors text-xs">
                    <MdOutlineKeyboardDoubleArrowRight className="mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Industries Dropdown */}
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-white/20 pt-4 text-sm">
        <p className="text-white/80">2025 © All rights Reserved | FTFL Technology Pvt.Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;