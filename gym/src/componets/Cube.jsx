
export default function EquipmentCube() {
  const faces = [
    { src: "peanut.png", alt: "Treadmill"},
    { src: "chocolate.jpg", alt: "Dumbbells" },
    { src: "c2.jpg", alt: "Bench Press" },
    { src: "whey.jpg", alt: "Stationary Cycle" },
    { src: "mass.jpg", alt: "Leg Press" },
    { src: "shaker.jpg", alt: "Biceps Curl" },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-10">
         Our Protein Supplements
      </h2>

      <div className="cube-container">
        <div className="cube">
          {faces.map((f, index) => (
            <div key={index} className={`face face-${index + 1}`}>
              <img src={f.src} alt={f.alt} />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-gray-600 text-lg">
         3D view of our Protein Supplements
      </p>
    </section>
  );
}
