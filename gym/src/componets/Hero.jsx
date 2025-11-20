import { FaDumbbell } from "react-icons/fa";

export default function HeroBanner() {
  const loopNames = ["Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness" ,"Five Fitness", "Five Fitness", "Five Fitness", "Five Fitness"];

  return (
    <section className="relative w-full h-[115vh] overflow-hidden mt-16" id="home">

      {/* Background Image */}
      <img
        src="/bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="gym"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-transparent"></div>

      {/* Content Section */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-24">
        <div className="max-w-xl text-right">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Level Up Your <br /> Strength
          </h1>

          <p className="text-gray-200 mt-4 drop-shadow-md">
            Push beyond limits. Build discipline. Transform your body with the 
            ultimate fitness experience.
          </p>

          <div className="mt-8 flex gap-4 justify-end">
            <button
              className="bg-orange-500 text-white px-7 py-3 rounded-xl font-semibold
                         hover:bg-orange-600 hover:scale-105 transition-all shadow-lg">
              Join Now
            </button>

            <button
              className="border border-orange-400 text-orange-400 px-7 py-3 rounded-xl font-semibold
                         hover:bg-orange-500 hover:text-white hover:scale-105 transition-all shadow-lg">
              Explore Plans
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Sliding Text Strip */}
      <div className="absolute bottom-3 left-0 right-0 z-20 w-full overflow-hidden">
        <div className="track">
          <div className="animate-track flex items-center gap-20 whitespace-nowrap text-white text-3xl font-extrabold">
            {loopNames.map((name, idx) => (
              <div key={idx} className="flex items-center gap-4 glow-item">
                <FaDumbbell className="text-white text-3xl glow-icon" />
                <span className="glow-text">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .track {
            width: 100%;
            overflow: hidden;
          }

          .animate-track {
            display: inline-flex;
            width: 200%;
            animation: moveLeft 12s linear infinite;
          }

          @keyframes moveLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .glow-text {
            text-shadow: 0 0 12px #ffa500, 0 0 15px #ffa500, 0 0 36px #ff4500;
          }

          .glow-icon {
            filter: drop-shadow(0 0 10px #ffa500);
          }

          .glow-item {
            padding: 10px 20px;
          }
        `}</style>
      </div>

    </section>
  );
}

