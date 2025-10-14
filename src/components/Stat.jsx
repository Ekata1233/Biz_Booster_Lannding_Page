// "use client";

// import React from "react";

// export default function StatsPage() {
//   const stats = [
//     { id: 1, label: "Active Users", value: "25+" },
//     { id: 2, label: "App Downloads", value: "50+" },
//     { id: 3, label: "Business Partners", value: "20+" },
//   ];

//   return (
//     <main className="lg:h-100 bg-gradient-to-r from-blue-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-12">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
//             Our Growth in Numbers 🚀
//           </h1>
//           <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//             Trusted by businesses and users worldwide
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 lg:ms-60 text-center">
//           {stats.map((stat) => (
//             <div
//               key={stat.id}
//               className="bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md p-4 sm:p-6 lg:p-8 hover:shadow-md sm:hover:shadow-xl transition-all duration-300"
//             >
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
//                 {stat.value}
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }


import React from "react";

const Stat = () => {
  const stats = [
    { id: 1, label: "Active Users", value: "25+" },
    { id: 2, label: "App Downloads", value: "50+" },
    { id: 3, label: "Business Partners", value: "20+" },
  ];

  return (
    <section className="bg-[#00509D] w-full py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center sm:gap-6 gap-4 px-4">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center relative sm:px-6"
          >
            {/* Stat value */}
            <p className="text-white text-4xl font-bold">{stat.value}</p>

            {/* Label */}
            <h3 className="text-white text-lg mt-1">{stat.label}</h3>

            {/* Vertical divider (only for 1st and 2nd items on larger screens) */}
            {index < stats.length - 1 && (
              <div className="hidden sm:block absolute right-0 left-65 top-1/2 transform -translate-y-1/2 h-10 w-[1.5px] bg-white opacity-50"></div>
            )}

            {/* Horizontal divider for mobile */}
            {index < stats.length - 1 && (
              <div className="sm:hidden mt-4 w-16 h-[1.5px] bg-white opacity-50"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stat;



