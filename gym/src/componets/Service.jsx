import React from "react";
import { Dumbbell, HeartPulse, Flame, Salad, Weight, Apple } from "lucide-react";

export default function GymServices() {
  const services = [
    { title: "Body Building", icon: <Dumbbell className="w-10 h-10 text-orange-500" />, desc: "Build strength and muscular physique." },
    { title: "Cardio Training", icon: <HeartPulse className="w-10 h-10 text-orange-500" />, desc: "Boost stamina and heart health." },
    { title: "CrossFit", icon: <Flame className="w-10 h-10 text-orange-500" />, desc: "High-intensity functional workouts." },
    { title: "Muscle Gain", icon: <Weight className="w-10 h-10 text-orange-500" />, desc: "Programs to gain lean muscle." },
    { title: "Diet & Plan", icon: <Apple className="w-10 h-10 text-orange-500" />, desc: "Personalized diet plans." },
    { title: "Nutrition Guidance", icon: <Salad className="w-10 h-10 text-orange-500" />, desc: "Science-based nutrition advice." },
    { title: "Fat Loss", icon: <Flame className="w-10 h-10 text-orange-500" />, desc: "Burn fat with smart training." },
  ];

  return (
    <section className="w-full py-16 bg-orange-50" id="service">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-orange-600 mb-10">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-orange-100 p-6 rounded-xl shadow-md border border-orange-200 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>

              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 mb-2">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
