"use client";

import { motion } from "framer-motion";
import { FaHome, FaLock, FaUsers, FaChartLine,FaProjectDiagram,FaGlobeAsia,FaCalendarAlt,FaPiggyBank } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import {MdAttachMoney,MdTrendingUp} from "react-icons/md"

const steps = [
  {
    title: "Multi-Sector Platform",
    desc: "🛠️ All-in-one multi-sector platforms designed to meet every business and earning need.\n🎯 From brand building to extra income, we’ve got everything covered for you.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Nationwide Operation",
    desc: "🌍 Expand your business nationwide with ease, anytime and anywhere.\n		📈 Reach more customers and unlock new growth opportunities effortlessly.",
    icon: <FaGlobeAsia />,
  },
  {
    title: "Work From Anywhere",
    desc: "💥 Work where you want, when you want.\n✨ No stress, no traffic — just comfort and success.",
    icon: <FaHome />,
  },
  {
    title: "Guarantee Return",
    desc: "	💸 Unlock the potential to earn up to ₹1,00,000/month.\n🌟 5X assured return if your earning is less than ₹5,00,000 in 3 years.",
    icon: <FaLock/>,
  },
  
  {
    title: "Weekly Payout",
    desc: "✨ You can withdraw payout every weekly.\n🚀 There is no barrier for weekly payout",
    icon: <FaCalendarAlt/>,
  },
  {
    title: "Team Earning",
    desc: "🤝 Build a trusted team, grow together,\n💼 Earn up to ₹1,00,000/month as a network.",
    icon: <FaUsers />,
  },
  {
    title: "Team Revenue Earning",
    desc: "📈 Earn 3–7% team revenue share.\n💹 Every lead your team generates adds to your income.",
    icon: <MdTrendingUp />,
  },
  {
    title: "Monthly Fixed Earning",
    desc: "	💰 Assured monthly bonus of ₹3000 fixed earning with your package purchase.\n💸 Get your payouts on time, every month.",
    icon: <FaLock/>,
  },
  {
    title: "Passive Income",
    desc: "	🚀 Effortless earning with steady and reliable income for long-term financial stability.\n	🔑 Become our Growth Partner to unlock premium features and enjoy financial freedom.",
    icon: <FaPiggyBank />,
  },
];

export default function ExtraIncome() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
             Unlock Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Earnings Potential
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how you can build additional income streams with our flexible opportunities
          </p>
        </div>

        {/* Glassmorphism Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl shadow-blue-200 border border-blue-200/80 
                         bg-white/60 backdrop-blur-xl hover:shadow-2xl 
                         hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-gradient-to-br from-blue-400 to-blue-600 text-white text-2xl shadow-md mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-3">
            Ready to Begin?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Join thousands already earning with our platform and grow your income
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fetchtrue.bizbooster2x"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 
                       text-white text-base font-medium rounded-lg 
                       hover:from-blue-600 hover:to-blue-800 
                       transition-all shadow-md hover:shadow-lg"
          >
            Download Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
