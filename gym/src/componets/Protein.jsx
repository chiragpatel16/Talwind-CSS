import React from "react";

export default function ProteinSection() {
  return (
    <section className="bg-[#1a0f00] py-16">
      <div className="text-center mb-15">
        <h2 className="text-5xl font-bold text-orange-500">Our Protein Range</h2>
        <p className="text-gray-200 mt-5">High-quality supplements to boost your fitness journey</p>
      </div>

     
        {/* Original Image */}
      <div className="flex justify-center items-center px-4 md:px-20 gap-0">
  {/* Original Image */}
  <div className="overflow-hidden shadow-lg transition-transform duration-300 w-full max-w-2xl">
    
    <a
      href="https://www.five-fitness.in/"
      target="_blank"
    >
      <img
        src="p.jpg"
        alt="Protein Original"
        className="w-full h-[600px] object-cover sm:h-[700px] md:h-[750px] lg:h-[800px]"
      />
    </a>

  </div>


        {/* Mirror Image */}
       <div className="overflow-hidden shadow-lg transition-transform duration-300 w-full max-w-2xl">
    
    <a
      href="https://www.five-fitness.in/"
      target="_blank"
    
    >
      <img
        src="p.jpg"
        alt="Protein Original"
        className="w-full h-[600px] object-cover sm:h-[700px] md:h-[750px] lg:h-[800px]"
      />
    </a>

  </div>
      </div>
    </section>
  );
}

