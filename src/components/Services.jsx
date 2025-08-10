import { useState } from "react";
import serviceImage1 from "../assets/image 1.png";
import serviceImage2 from "../assets/image 2.png";  

export default function Services() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const baseColor = "#F28D35";
  const hoverColor = "#d87a2b";

  return (
    <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Service 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={serviceImage1}
            alt="Web & Mobile App Development"
            className="w-48 h-48 sm:w-72 sm:h-72 md:w-[414px] md:h-[414px] object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4F46E5]">
            Web & Mobile App Development
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#000000] font-regular">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button
            className="mt-4 px-4 sm:px-6 py-2 rounded text-white font-semibold text-xs sm:text-sm"
            style={{ backgroundColor: hover1 ? hoverColor : baseColor }}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Service 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4F46E5]">
            Digital Strategy Consulting
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#000000] font-regular">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <button
            className="mt-4 px-4 sm:px-6 py-2 rounded text-white font-semibold text-xs sm:text-sm"
            style={{ backgroundColor: hover2 ? hoverColor : baseColor }}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            LEARN MORE
          </button>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={serviceImage2}
            alt="Digital Strategy Consulting"
            className="w-48 h-48 sm:w-72 sm:h-72 md:w-[414px] md:h-[416px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
