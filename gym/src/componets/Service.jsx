import React from "react";
import { Dumbbell, HeartPulse, Flame, Salad, Weight, Apple } from "lucide-react";

export default function GymServices() {
  const services = [
    { title: "Body Building", icon: <Dumbbell className="w-12 h-12 text-orange-500 drop-shadow-fire" />, desc: "Build strength and muscular physique." },
    { title: "Cardio Training", icon: <HeartPulse className="w-12 h-12 text-orange-400 drop-shadow-fire" />, desc: "Boost stamina and heart health." },
    { title: "CrossFit", icon: <Flame className="w-12 h-12 text-orange-600 drop-shadow-fire" />, desc: "High-intensity functional workouts." },
    { title: "Muscle Gain", icon: <Weight className="w-12 h-12 text-orange-300 drop-shadow-fire" />, desc: "Programs to gain lean muscle." },
    { title: "Diet & Plan", icon: <Apple className="w-12 h-12 text-orange-200 drop-shadow-fire" />, desc: "Personalized diet plans." },
    { title: "Nutrition Guidance", icon: <Salad className="w-12 h-12 text-orange-400 drop-shadow-fire" />, desc: "Science-based nutrition advice." },
    { title: "Fat Loss", icon: <Flame className="w-12 h-12 text-orange-700 drop-shadow-fire" />, desc: "Burn fat fast with smart training." },
  ];

  return (
    <section className="w-full py-20 bg-[#1a0f00] text-white"id="service">
      <div className="max-w-6xl mx-auto text-center px-4" >
        <h2 className="text-4xl font-bold mb-12 text-orange-400 drop-shadow-fire">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-black to-orange-900 p-8 rounded-2xl border border-orange-700 shadow-lg hover:shadow-orange-600/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-2xl font-semibold text-orange-300 mb-3">{s.title}</h3>
              <p className="text-gray-300 mb-6">{s.desc}</p>
              <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition text-white font-medium shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

<style jsx>{`
  .drop-shadow-fire {
    filter: drop-shadow(0 0 8px rgba(255, 140, 0, 0.7));
  }
`}</style>