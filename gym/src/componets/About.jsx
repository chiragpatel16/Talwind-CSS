import React from "react";
import { FaDumbbell, FaUsers, FaHeart, FaBolt,FaInstagram,FaYoutube } from "react-icons/fa";


export default function AboutUs() {
  return (
    <div className="bg-black text-white" id="about0">

      {/* Hero Section */}
      <p className="text-5xl md:text-5xl font-extrabold text-orange-400 text-center py-4">About Us</p>
      <section className="relative h-[100vh] flex items-center justify-center ">
        
        <img
          src="/logo.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Gym Banner"
        />
{/* <h1 className="relative text-5xl md:text-5xl font-extrabold text-orange-400 mt-[-50%] 
    drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]
    bg-white/10 backdrop-blur-sm px-6 py-2 rounded-lg shadow-xl">
  About Us
</h1> */}

      </section>

      {/* Who We Are */}
      <section className="py-19 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-6">Who We Are</h2>
        <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
          At <span className="text-orange-400 font-semibold">Five Fitness Gym</span>,
          we believe fitness is not just a routine — it's a lifestyle.  
          Established with a mission to empower individuals, we provide a space  
          where everyone can train, grow, and transform their body and mind.
          <br /><br />
          With world-class equipment, expert trainers, and a motivating  
          environment, Five Fitness Gym helps you break limits and discover  
          the strongest version of yourself.
        </p>
      </section>

      {/* Mission Values */}
      <section className="py-16 bg-gray-900 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-10">Our Mission & Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-black rounded-xl shadow-xl border border-gray-800 hover:border-orange-500 transition">
            <FaBolt className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Strength & Power</h3>
            <p className="text-gray-400">
              We help you build real strength with structured training and
              science-backed techniques.
            </p>
          </div>

          <div className="p-6 bg-black rounded-xl shadow-xl border border-gray-800 hover:border-orange-500 transition">
            <FaUsers className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community</h3>
            <p className="text-gray-400">
              A family-like atmosphere where every member is supported,
              motivated, and encouraged.
            </p>
          </div>

          <div className="p-6 bg-black rounded-xl shadow-xl border border-gray-800 hover:border-orange-500 transition">
            <FaHeart className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Health First</h3>
            <p className="text-gray-400">
              Your long-term fitness journey matters to us — we prioritize
              your well-being always.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-orange-400 mb-10 w-110 xs:text-2xl">Why Choose Five Fitness?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaDumbbell className="text-orange-500 text-3xl" />
              <p className="text-gray-300 text-lg">
                Premium workout equipment and machines.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaDumbbell className="text-orange-500 text-3xl" />
              <p className="text-gray-300 text-lg">
                Certified trainers with professional experience.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaDumbbell className="text-orange-500 text-3xl" />
              <p className="text-gray-300 text-lg">
                Clean, hygienic, and motivating workout space.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaDumbbell className="text-orange-500 text-3xl" />
              <p className="text-gray-300 text-lg mb-5">
                Personalized workout & diet guidance.
              </p>
            </div>
         <p className="text-orange-500 text-3xl mt-4">Follow Us</p>

<div className="flex gap-6 mt-3">
  <a
    href="https://www.instagram.com/five_fitness2.0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-4xl text-pink-500 hover:text-orange-400 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com/@fivefitnessgym"
    target="_blank"
    rel="noopener noreferrer"
    className="text-4xl text-red-600 hover:text-orange-400 transition"
  >
    <FaYoutube />
  </a>
</div>

          </div>
<video
  src="/v.mp4"
  className="rounded-xl shadow-lg object-cover w-[1500px] h-[650px] mt-[-80px]"
  autoPlay
  loop
  muted
  playsInline
></video>

    
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-orange-400">Join the Five Fitness Family</h2>
        <p className="text-gray-300 mt-4 text-lg">
          Transform your body. Transform your life.  
          Your fitness journey starts here.
        </p>
      </section>

    </div>
  );
}
