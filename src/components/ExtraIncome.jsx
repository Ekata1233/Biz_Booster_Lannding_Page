"use client";

import { motion } from "framer-motion";
import { FaHome, FaMoneyBillWave, FaUsers, FaChartLine } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

const steps = [
  {
    title: "Earn Extra Income",
    desc: "💸 Unlock the potential to earn up to ₹1,00,000/month.\n🌟 Your extra time becomes extra income.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Work From Home",
    desc: "💥 Work where you want, when you want.\n✨ No stress, no traffic — just comfort and success.",
    icon: <FaHome />,
  },
  {
    title: "Monthly Payout",
    desc: "💰 Get your payouts on time, every month.\n💸 Assured ₹3000 monthly earning bonus.",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "Team Earning",
    desc: "🤝 Build a trusted team, grow together,\n💼 Earn up to ₹1,00,000/month as a network.",
    icon: <FaUsers />,
  },
  {
    title: "Team Revenue Earning",
    desc: "📈 Earn 3–7% team revenue share.\n💹 Every lead your team generates adds to your income.",
    icon: <FaChartLine />,
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
              className="relative p-6 rounded-2xl shadow-lg border border-blue-200/30 
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
