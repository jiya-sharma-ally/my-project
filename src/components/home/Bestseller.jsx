import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { FaRegHeart } from "react-icons/fa";

import "swiper/css";        

/* Images */
import men1 from "../../assets/images/man.png";
import women1 from "../../assets/images/tee1.png";
import sneaker1 from "../../assets/images/shoe1.png";
import men2 from "../../assets/images/man2.png";
import women2 from "../../assets/images/shoe3.png";
import sneaker2 from "../../assets/images/wtee2.png";
import men1Hover from "../../assets/images/men1-2.png";
import women1Hover from "../../assets/images/tee2.png";
import sneaker1Hover from "../../assets/images/sneaker1-2.png";
import men2Hover from "../../assets/images/wtee.png";
import women2Hover from "../../assets/images/man1-2.png";
import sneaker2Hover from "../../assets/images/shoe2.png";


const bestSellers = [
  {
    id: 1,
    title: "Men Polo Tee",
    price: "₹3,199",
    img: men1,
    hoverImg: men1Hover,
  },
  {
    id: 2,
    title: "Women Oversized Tee",
    price: "₹3,799",
    img: women1,
    hoverImg: women1Hover,
  },
  {
    id: 3,
    title: "Air Street Sneakers",
    price: "₹8,499",
    img: sneaker1,
    hoverImg: sneaker1Hover,
  },
  {
   id: 4,
    title: "Air Street Sneakers",
    price: "₹8,499",
    img: sneaker2,
    hoverImg: men2Hover,
  },
   {
   id: 5,
    title: "Air Street Sneakers",
    price: "₹8,499",
    img: men2,
    hoverImg: women2Hover,
  },
   {
   id: 6,
    title: "Air Street Sneakers",
    price: "₹8,499",
    img: women2,
    hoverImg: sneaker2Hover,
  }
];


const Bestseller = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-[#633426] mb-14">
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer">

      {/* Image Section */}
      {/* Image Section */}
<div className="relative bg-white h-[320px] flex items-center justify-center group">

  {/* Heart Icon */}
  <button className="absolute top-3 right-3 text-xl z-10 
                   text-black hover:text-red-500 transition">
  <FaRegHeart />
</button>


  <div className="relative h-[260px] w-full">
  {/* Normal Image */}
  <img
    src={item.img}
    alt={item.title}
    className="absolute inset-0 h-full w-full object-contain
               opacity-100 group-hover:opacity-0 transition duration-500"
  />

  {/* Hover Image */}
  <img
    src={item.hoverImg}
    alt={item.title}
    className="absolute inset-0 h-full w-full object-contain
               opacity-0 group-hover:opacity-100 transition duration-500"
  />
</div>


  {/* Quick Shop Button (hidden by default) */}
  <button
    className="absolute bottom-6 left-1/2 -translate-x-1/2
               bg-[#633426] text-white px-6 py-2 text-sm 
               opacity-0 group-hover:opacity-100
               transition duration-300 cursor-pointer"
  >
    Quick Shop
  </button>
  
</div>


      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-black leading-snug">
          {item.title}
        </h3>
        <p className="text-lg font-bold text-black mt-2">
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
