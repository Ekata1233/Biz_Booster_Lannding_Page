"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefitsData = [
  {
    heading: "Reliable Support",
    description:"Receive our assistance anytime from our expert support team, ensuring quick solutions and a seamless experience. We support you 24/7 to provide you a best solution. ",
    imageUrl: "/relaiblesupport.png",
  },
  {
    heading: "Boost Your Sales",
    description:
      "Our solution is designed to boost your sales by reaching right audience, we optimize your brand strategies and ensure to turn every lead into loyal customers. ",
    imageUrl: "/boostsales.png",
  },
  {
    heading: "Manage on Mobile ",
    description:"Be part of expandable financial and marketing industry for long-term success, while everything can be managed through your mobile device. Fetch True App helps you to grow financially freedom.",
    imageUrl: "/evergreenopportunities.png",
  },
  {
    heading: "Earning Opportunities",
    description:"We provide potential earning, where you earn more than ₹1,00,000/month, with your team. Earning doesn’t stop there you can earn 3-7% on each is shared by your direct franchisee. ",
    imageUrl: "/mobile.png",
  },
  {
    heading: "Assured Return",
    description:"As extra benefits you will receive a fixed monthly earning bonus of ₹3000 for purchasing the package as an assured return for your investment. ",
    imageUrl: "/nationwide.png",
  },
  {
    heading: "Passive Income",
    description:"Get your earning effortlessly with steady and reliable income, give you financial stability and freedom, by becoming our growth partner to unlock the premium features ",
    imageUrl: "/graducation award.png",
  },
  {
    heading: "Nationwide Operations",
    description:"Grow your business across India effortlessly, anytime and from anywhere, while reaching more customers and unlocking new opportunities.",
    imageUrl: "/passiveicon.png",
  },
  {
    heading: "Multi-Sector Platform ",
    description:"We provide you a solution to all your needs with our various of multi-sector platforms that suits your needs from build brand to earning extra income. We have covered everything for you.  ",
    imageUrl: "/graducation award.png",
  },
  {
    heading: "Work Anywhere",
    description:"Work with no stress, work where you want, work when you want. No office required to stack money just a phone and internet.",
    imageUrl: "/passiveicon.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger cards animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Benefits() {
  return (
    <section id="features" className="relative bg-white text-dark w-full py-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-30 filter blur-3xl animate-pulse"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h3 className="font-bold text-2xl text-[#2164F4]">Benefits of</h3>
        <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent">
           FetchTrue Partner
        </h2>
      </div>

      {/* Benefits Grid with Scroll Animation */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
          >
            <div className="flex p-6 rounded-3xl h-full items-center gap-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-4xl border-2 border-blue-200 flex items-center justify-center shadow-2xl overflow-hidden">
                  <Image
                    src={benefit.imageUrl}
                    alt={benefit.heading}
                    width={60}
                    height={60}
                    className="object-cover"
                    // style={{borderRadius:"50%"}}
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h6 className="font-bold text-[#2164F4] mb-2">{benefit.heading}</h6>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
