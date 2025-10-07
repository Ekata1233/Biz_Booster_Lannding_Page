import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeadGenerate = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-8 md:py-12 bg-white">
        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 mt-6 md:mt-10'>
          #India's First Hybrid Service Marketplace
        </h2>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-5 lg:ms-20'>
            {/* Left Side - Text */}
            <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                100% Verified Real Providers
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Verified Service Providers 
              </h1>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
                Every provider on FetchTrue undergoes a thorough verification process, ensuring credibility, professionalism, and authenticity. Customers engage only with trusted providers.
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
                <Image
                  src={"/12953560_Data_security_01 [Converted]-01-01.png"}
                  alt="Verified service providers dashboard"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Centric Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:me-15'>
            {/* Text Content */}
            <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                5X Productivity
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Customer Centric
              </h1>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
                At Fetch True, you are the core focus. From connecting you with verified and trusted service providers, we ensure every interaction is smooth and secure. Our platform is designed for ease and customized experiences, suggesting services based on your needs.
              </p>
            </div>
            
            {/* Image */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0'>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:ms-20">
                <Image
                  src={"/273155455_679b781f-003b-45c4-aa0c-5797366906a6 (1) [Converted]-01 (1).png"}
                  alt="Customer centric approach illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Satisfaction Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:ms-20'>
            {/* Text Content */}
            <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                100% Satisfaction
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Guaranteed Satisfaction
              </h1>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
                Fetch True ensures a stress-free experience. If any issue arises, we'll immediately connect you with a new service provider to keep things running smoothly, your satisfaction is our top priority.
              </p>
            </div>
            
            {/* Image */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
                <Image
                  src={"/205445046_55218d05-17d7-4aee-b0c1-474c5c5d833e-01.png"}
                  alt="Customer satisfaction guarantee illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Support Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:me-15'>
            {/* Text Content */}
            <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Real-time Support
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Get Instant Support
              </h1>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
                If there is a problem with a service provider, Fetch True will fix it, either by working with the provider or connecting you with another service provider, so that your service keeps running smoothly.
              </p>
            </div>
            
            {/* Image */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0'>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:ms-20">
                <Image
                  src={"/Get Instant Support-01.png"}
                  alt="Instant support system illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Communication Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12 lg:ms-20'>
            {/* Text Content */}
            <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8'>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Secure and Transparent Communication
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                Transparency Communication
              </h1>
              <p className='text-base md:text-lg text-gray-600 leading-relaxed text-justify'>
                At Fetch True, we communicate with service providers while keeping your personal information private. Our transparent approach ensures trust at every step, giving you confidence that you're working with verified providers who value honesty and integrity as much as you do.
              </p>
            </div>
            
            {/* Image */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:me-15">
                <Image
                  src={"/8474028_1895 [Converted]-01-01.png"}
                  alt="Transparent communication process illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Service Experience?
          </h3>
          <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of customers already using India's first hybrid service marketplace to find trusted providers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact" className="inline-block">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-5 sm:px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base w-full sm:w-auto">
                Get Started Today
              </button>
            </Link>
            <Link href="tel:+919765303735" className="inline-block">
              <button className="border border-white text-white hover:bg-blue-700 px-5 sm:px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadGenerate