"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsGraphUpArrow } from "react-icons/bs";


const steps = [
  {
    title: "Earn Extra Income",
    desc: `🚀 Boost your financial freedom by unlocking the earning potential income.
           🌟 Your Extra time is your Extra Income, grow your finances with effortless Income Opportunities.
           ✨ With simple, smart and always fair you can grow your finance with care — Unlock your extra income opportunity.
           💼 Income beyond the usual, one stream isn’t enough today, you can earn extra income — Just on few clicks.
           💸 Extra Income is freedom, unlock the potential to earn up to ₹1,00,000/month.`,
    extra: "",
    icon: "💸",
    img: "/Earn Extra Income.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Work From Home",
    desc: `💥 Work where you want, work when you want. No office required to stack money just a phone and internet.
           🏠 Turn your space into workplace — the best office is your own home.
           ✨ Work with no stress, no traffic — just comfort and success.`,
    extra: "",
    icon: "🌎",
    img: "/Work from anywhere.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Monthly Payout",
    desc: `💰 Our secure monthly payout system ensures that you get your “amount” without any delays.`,
    extra: "",
    icon: "💰",
    img: "/Monthly Payout.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Team Earning",
    desc: `🤝 Build your trusted team, grow together and earn up to ₹1,00,000/month.
           🌟 Build your team, boost your income and enjoy your earning up to ₹1,00,000/month.
           💼 Team works that payoff. Build your network, earn more than ₹1,00,000/month.`,
    extra: "",
    icon: "💹",
    img: "/Team Earning.png",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Team Revenue Earning",
    desc: `📈 Maximize your earning potential by supporting team and earn revenue up to 3-7% for team revenue.
           💹 Earn up to 3-7% revenue share on all successful leads your team generate.`,
    extra: "",
    icon: "📈",
    img: "/Team Revenue Earning.png",
    color: "from-red-500 to-rose-500",
  },
];

export default function ExtraIncome() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-200 via-white to-slate-400 py-12 sm:py-8 md:py-10 lg:py-15 px-4 sm:px-6">
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 tracking-tight">
            Unlock Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Earnings Potential
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Discover how you can build additional income streams with our flexible opportunities
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center lg:mx-10 xl:mx-20">
          {/* Left side - text */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left lg:ms-30 text-justify"
          >
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-xl sm:text-2xl text-white shadow-sm mx-auto lg:mx-0`}
            >
              {steps[activeStep].icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {steps[activeStep].title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 whitespace-pre-line">
              {steps[activeStep].desc}
            </p>
            {steps[activeStep].extra && (
              <p className="text-xs sm:text-sm text-slate-500">
                {steps[activeStep].extra}
              </p>
            )}

            {/* Step indicators */}
            <div className="flex justify-center lg:justify-start space-x-2 mt-4 sm:mt-6">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeStep
                      ? `w-6 sm:w-8 bg-gradient-to-r ${steps[i].color}`
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - image */}
          <motion.div
            key={activeStep + "-img"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={steps[activeStep].img}
              alt={steps[activeStep].title}
              className="w-full 
                max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] 
                 object-cover"
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-200 mx-4 lg:mx-0"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
            Ready to get started?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 max-w-xl sm:max-w-2xl mx-auto">
            Join thousands of partners who are already earning with our platform
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-sm hover:shadow-md">
              <a href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x">
                Download Now
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
