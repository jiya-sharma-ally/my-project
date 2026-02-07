import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import women1 from "../../assets/images/women1.png";
import women2 from "../../assets/images/women2.png";
import women3 from "../../assets/images/women3.png";
import women4 from "../../assets/images/women4.png";

import { MdArrowOutward } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const womenProducts = [
  {
    id: 1,
    title: "Crop Tee",
    price: "₹2,999",
    rating: "4.2",
    img: women1,
  },
  {
    id: 2,
    title: "Sneakers",
    price: "₹7,099",
    rating: "4.4",
    img: women2,
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    price: "₹9,099",
    rating: "4.8",
    img: women3,
  },
  {
    id: 4,
    title: "Oversized Tees",
    price: "₹5,499",
    rating: "4.6",
    img: women4,
  },
  {
    id: 5,
    title: "Slim Fit Tops",
    price: "₹6,999",
    rating: "4.5",
    img: women2,
  },
  {
    id: 6,
    title: "Crop Fitted Top",
    price: "₹8,499",
    rating: "4.7",
    img: women3,
  },
];

const Women = () => {
  return (
    <section className="w-full py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-[#633426] mb-14">
          Women’s Collection
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
        >
          {womenProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="relative h-[420px] overflow-hidden bg-amber-50 text-black group
                border border-black/20 rounded-3xl shadow-md hover:shadow-xl
                transition duration-300"
              >
                {/* Cart Icon */}
                {/* Cart Icon with Tooltip */}
<div className="absolute top-4 right-4 z-10 group/cart">
  <button
    className="w-10 h-10 rounded-full 
               bg-white text-black flex items-center justify-center
               shadow-md transition duration-300
               hover:bg-[#633426] hover:text-white cursor-pointer"
  >
    <IoCartOutline size={20} />
  </button>

  {/* Tooltip */}
  <span
    className="absolute -bottom-9 left-1/2 -translate-x-1/2
               bg-black text-white text-xs px-2 py-1 rounded
               opacity-0 group-hover/cart:opacity-100
               transition duration-300 whitespace-nowrap"
  >
    Add to cart
  </span>
</div>

                {/* Rating */}
                <div className="absolute top-4 left-4 text-sm flex items-center gap-1 z-10">
                  <FaStar className="text-yellow-400" />
                  <span>{product.rating}</span>
                </div>

                {/* Image */}
                <div className="h-full flex items-center justify-center p-6 cursor-pointer">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-[260px] object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-sm font-semibold uppercase">
                    {product.title}
                  </h3>
                  <p className="text-lg font-bold">{product.price}</p>
                </div>

                {/* Action Button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Link to={`/women/${product.category}`}>
  <button className="w-10 h-10 rounded-full bg-[#633426] text-white flex items-center justify-center hover:scale-105 transition cursor-pointer">
    <MdArrowOutward />
  </button>
</Link>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Women;
