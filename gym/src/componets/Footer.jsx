import { FaGlobe, FaInstagram, FaWhatsapp, FaDumbbell } from "react-icons/fa";

export default function GymFooter() {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6 border-t-4 border-orange-500" id="Contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-orange-500 flex items-center gap-2">
            <FaDumbbell className="text-orange-500" /> Five Fitness Gym
          </h2>
          <p className="mt-3 text-gray-400">
            Transform your body, sharpen your mind.  
            Fitness is not a destination — it's a lifestyle.
          </p>

          {/* Social Icons */}
       <div className="flex gap-4 mt-4">
  <a
    href="https://www.instagram.com/five_fitness2.0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-xl hover:text-orange-500 cursor-pointer" />
  </a>

<a href="https://www.five-fitness.in/" target="_blank" rel="noopener noreferrer">
  <FaGlobe className="text-xl hover:text-orange-500 cursor-pointer" />
</a>


  <a href="https://wa.me/91YOURNUMBER" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="text-xl hover:text-orange-500 cursor-pointer" />
  </a>
</div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="#about0">About Us</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="#service">Services</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="#Membership">Membership</a></li>
            <li className="hover:text-orange-500 cursor-pointer"><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>📍 Five Fitness Gym, Dindoli, Surat.</li>
            <li>📞 +91 88665 57344</li>
            <li>✉️ fivefitnessgym@gmail.com</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Opening Hours</h3>
          <ul className="space-y-2">
            <li>Mon - Sat Morning Batch : 5:30 AM - 9:30 AM</li>
            <li>Mon - Sat Evening Batch : 5:00 PM - 9:30 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Five Fitness Gym — All Rights Reserved.
      </div>
    </footer>
  );
}
