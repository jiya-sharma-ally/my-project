import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";

import "swiper/css";

/* Images */
import polo from "../../assets/images/polo.png";
import women1 from "../../assets/images/women1.png";
import sneaker1 from "../../assets/images/sneaker1.png";
import men2 from "../../assets/images/men2.png";
import women2 from "../../assets/images/women2.png";
import sneaker2 from "../../assets/images/sneaker2.png";

/* Products */
const newArrivals = [
    {
        id: 1,
        title: "Men Polo Tee",
        category: "Men",
        price: "₹2,999",
        rating: "4.5",
        img: polo,
        path: "/men/t-shirts"
    },
    {
        id: 2,
        title: "Women Oversixed Tee",
        category: "Women",
        price: "₹3,499",
        rating: "4.7",
        img: women1,
         path: "/womenCat"
    },
    {
        id: 3,
        title: "Air Street Sneaker",
        category: "Sneakers",
        price: "₹7,999",
        rating: "4.8",
        img: sneaker1,
        path: "/shoe" 
    },
    {
        id: 4,
        title: "Men Oversized Tee",
        category: "Men",
        price: "₹3,299",
        rating: "4.6",
        img: men2,
        path: "/men/t-shirts"
    },
    {
        id: 5,
        title: "Women Slim Fit Top",
        category: "Women",
        price: "₹4,199",
        rating: "4.4",
        img: women2,
          path: "/womenCat"
    },
    {
        id: 6,
        title: "Urban Flex Sneakers",
        category: "Sneakers",
        price: "₹6,999",
        rating: "4.5",
        img: sneaker2,
         path: "/shoe" 
    },
];

const Newarrival = () => {
    return (
        <section className="w-full py-20 bg-[#f6f6f6]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-[#633426] mb-14">
                    New Arrivals
                </h2>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                   {newArrivals.map((item) => (
  <SwiperSlide key={item.id}>
    <Link to={item.path}>
      <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full overflow-hidden">

        <div className="absolute top-4 left-[-34px] rotate-[-45deg] bg-[#633426] text-white text-[10px] font-bold px-10 py-1 tracking-wider z-20">
          50% OFF
        </div>

        <button className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border bg-white flex items-center justify-center hover:bg-[#633426] transition">
          <Heart size={16} />
        </button>

        <div className="aspect-[3/4] w-full overflow-hidden">
          <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-[#633426]">{item.price}</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar /> {item.rating}
            </div>
          </div>
        </div>

      </div>
    </Link>
  </SwiperSlide>
))}

                </Swiper>

            </div>
        </section>
    );
};

export default Newarrival;
