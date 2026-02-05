import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

import men1 from "../../assets/images/men1.png";
import men2 from "../../assets/images/men2.png";
import men3 from "../../assets/images/menc.png";
import men4 from "../../assets/images/men4.png";
import men5 from "../../assets/images/men5.png";
import men6 from "../../assets/images/men6.png";

const menCards = [
  { id: 1, title: "Polo T-Shirts", bg: "bg-[#c5b5a6]", img: men1 },
  { id: 2, title: "Regular Fits", bg: "bg-[#deac76]", img: men2 },
  { id: 3, title: "Boat Necks", bg: "bg-[#e8c5a5]", img: men3 },
  { id: 4, title: "Oversized Tees", bg: "bg-[#d6cfc4]", img: men4 },
  { id: 5, title: "Printed Tees", bg: "bg-[#c9b8a1]", img: men5 },
  { id: 6, title: "Full Sleeves", bg: "bg-[#e1bfa3]", img: men6 },
];

const Men = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#633426] mb-10 md:mb-14">
          Men’s Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {menCards.map((card) => (
            <Link key={card.id} to={`/product/${card.id}`} className="block">
              <div
                className={`relative ${card.bg} rounded-3xl p-6 sm:p-8 pb-14 sm:pb-16 
                h-[320px] sm:h-[380px] md:h-[420px]
                flex items-start justify-between overflow-hidden group
                transition-all duration-500 hover:scale-[1.02]`}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#b89b82] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Text */}
                <div className="z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1f2937] mb-2 sm:mb-4">
                    {card.title}
                  </h3>
                </div>

                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute right-2 sm:right-4 bottom-0 h-[70%] sm:h-[80%] md:h-[85%] 
                  object-contain z-10 group-hover:scale-105 transition duration-500"
                />

                {/* Button */}
                <span className="absolute bottom-4 left-6 sm:left-8 z-10 text-sm font-medium flex items-center gap-1">
                  Shop Now <MdArrowForward />
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Men;
