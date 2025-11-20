import React from "react";

const FitnessNameSlide = () => {
  const items = ["Strength", "Cardio", "Endurance", "Flexibility", "Power", "Balance"];

  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div className="flex gap-15 animate-slide whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-3xl font-bold text-white uppercase tracking-wide"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {items.map((item, index) => (
          <span
            key={index + "dup"}
            className="text-4xl md:text-3xl font-bold text-white uppercase tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FitnessNameSlide;
