import React from "react";
import { motion } from "framer-motion";

export default function Packages() {
  const packages = [
    {
      title: "3 Months",
      price: "₹2500",
      features: ["Access to gym" ,"Gym Bag","Shaker", "Towel","Peanut Butter Jar " ],
    },
    {
      title: "6 Months",
      price: "₹4500",
      features: ["Access to gym", "Gym Bag","Shaker", "Towel","Mass Gainer" ],
    },
    {
      title: "1 Year",
      price: "₹8000",
      features: ["Access to gym","Gym Bag","Shaker", "Towel","Whey Protein"],
    },
  ];

  const extras = [
    { name: "Personal Trainer", price: "₹3500 / month" },
    { name: "Diet Plan", price: "₹600 / month" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring", stiffness: 50 },
    }),
  };

  return (
    <section className="bg-gray-50 text-white py-16" id="Membership">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Our Packages</h2>
        <p className="text-gray-600 mt-2">Choose the plan that fits your fitness goals</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-20">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-lg rounded-xl p-5 w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">{pkg.title}</h3>
            <p className="text-3xl font-bold text-gray-800 mb-4">{pkg.price}</p>
            <ul className="mb-4 space-y-2">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 flex items-center">
                  <span className="text-orange-500 mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            {/* <p className="text-gray-500 mb-4 text-sm">
              Personal Trainer & Diet Plan charges are <span className="font-semibold">extra</span>
            </p> */}
            <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* Extras Section */}
      <div className="mt-16 text-center px-4 md:px-20">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">Optional Add-ons</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {extras.map((extra, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white shadow-md rounded-xl p-6 w-full md:w-1/4"
            >
              <h4 className="text-xl font-semibold text-orange-500 mb-2">{extra.name}</h4>
              <p className="text-gray-700 font-bold">{extra.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
