import React from "react";

export default function Equipment() {
  const equipments = [
    { src: "treadmill.jpg", alt: "Treadmill" },
    { src: "Dumbbells.jpg", alt: "Dumbbells" },
    { src: "bench.jpg", alt: "Bench Press" },
    { src: "cycle.jpg", alt: "Stationary Cycle" },
    { src: "leg3.jpg", alt: "Leg Press" },
    { src: "Biceps.jpg", alt: "Biceps Curls " },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Our Balance Fitness Equipment</h2>
        <p className="text-gray-600 mt-2">High-quality equipment to achieve your fitness goals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {equipments.map((eq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={eq.src}
              alt={eq.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-semibold text-orange-500">{eq.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
