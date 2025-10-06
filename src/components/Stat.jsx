"use client";

import React from "react";

export default function StatsPage() {
  const stats = [
    { id: 1, label: "Active Users", value: "25+" },
    { id: 2, label: "App Downloads", value: "50+" },
    { id: 3, label: "Business Partners", value: "20+" },
    // { id: 4, label: "Countries Served", value: "15+" },
  ];

  return (
    <main className="lg:h-100 bg-gradient-to-r from-blue-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
            Our Growth in Numbers 🚀
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses and users worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 lg:ms-60 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md p-4 sm:p-6 lg:p-8 hover:shadow-md sm:hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}