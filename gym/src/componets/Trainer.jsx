import React from "react";

const trainerImages = [
  "/trainer.jpg", // main image
  "/t4.jpg",
  "/t3.jpg",
];

export default function TrainerShowcase() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-6 flex flex-col items-center gap-12">
        {/* Trainer Info */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-8">Professional Trainer</h1>
          <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
            Ashish Tiwari
          </h2>
          <p className="text-gray-700 mb-6 text-xl max-w-2xl mx-auto">
            Professional Trainer with 5+ years of experience. Helping clients achieve their fitness goals with personalized training plans.
          </p>
          {/* <button className="bg-orange-500 text-white px-10 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Contact Trainer
          </button> */}
        </div>

        {/* Trainer Images Container with more space */}
        <div className="w-full max-w-8xl flex flex-col md:flex-row items-center justify-center gap-3 ">
          {trainerImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-[1.1] rounded-xl overflow-hidden shadow-2xl border-4 border-orange-500 transform hover:scale-90 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Trainer ${idx + 1}`}
                className="w-full h-[600px] md:h-[700px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}