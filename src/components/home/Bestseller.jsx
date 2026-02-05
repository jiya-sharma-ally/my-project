import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";

/* Images */
import men1 from "../../assets/images/men1.png";
import women1 from "../../assets/images/women1.png";
import sneaker1 from "../../assets/images/sneaker1.png";
import men2 from "../../assets/images/men2.png";
import women2 from "../../assets/images/women2.png";
import sneaker2 from "../../assets/images/sneaker2.png";

const bestSellers = [
  {
    id: 1,
    title: "Men Polo Tee",
    category: "Men",
    price: "₹3,199",
    rating: "4.8",
    img: men1,
  },
  {
    id: 2,
    title: "Women Oversized Tee",
    category: "Women",
    price: "₹3,799",
    rating: "4.7",
    img: women1,
  },      
  {
    id: 3,
    title: "Air Street Sneakers",
    category: "Sneakers",
    price: "₹8,499",
    rating: "4.9",
    img: sneaker1,
  },
  {
    id: 4,
    title: "Men Oversized Tee",
    category: "Men",
    price: "₹3,499",
    rating: "4.6",
    img: men2,
  },
  {
    id: 5,
    title: "Women Slim Fit Top",
    category: "Women",
    price: "₹4,299",
    rating: "4.8",
    img: women2,
  },
  {
    id: 6,
    title: "Urban Flex Sneakers",
    category: "Sneakers",
    price: "₹7,999",
    rating: "4.7",
    img: sneaker2,
  },
];

const Bestseller = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-14">
          Best Sellers
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {bestSellers.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/product/${item.id}`}>
                <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#8d5a3b] to-[#5a3825]

 group cursor-pointer transition">

                  {/* Category */}
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-wide text-white/70 z-10">
                    {item.category}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-yellow-400 text-sm z-10">
                    <FaStar />
                    {item.rating}
                  </div>

                  {/* Image */}
                  <div className="h-full flex items-center justify-center p-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-[260px] object-contain group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Info */}
                 <div className="absolute bottom-0 left-0 right-0 bg-[#3b2218]/65 backdrop-blur-md p-4">

                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-white mt-1">
                      {item.price}
                    </p>
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

export default Bestseller;
