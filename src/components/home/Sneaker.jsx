import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import sneaker1 from "../../assets/images/sneaker1.png";
import sneaker2 from "../../assets/images/sneaker2.png";
import sneaker3 from "../../assets/images/sneaker3.png";
import sneaker4 from "../../assets/images/sneaker4.png";
import sneaker5 from "../../assets/images/sneaker5.png";
import sneaker6 from "../../assets/images/sneaker6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const sneakers = [
  {
    id: 1,
    name: "Air Street Runner",
    price: "₹7,499",
    img: sneaker1,
  },
  {
    id: 2,
    name: "Urban Flex",
    price: "₹6,999",
    img: sneaker2,
  },
  {
    id: 3,
    name: "Neo Motion",
    price: "₹8,299",
    img: sneaker3,
  },
  {
    id: 4,
    name: "Classic Court",
    price: "₹7,899",
    img: sneaker4,
  },
  {
    id: 5,
    name: "Classic Court",
    price: "₹7,899",
    img: sneaker5,
  },
  {
    id: 6,
    name: "Classic Court",
    price: "₹7,899",
    img: sneaker6,
  }
];

const Sneaker = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#633426] mb-10 md:mb-14">
          Sneaker’s Collection
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sneakers.map((shoe) => (
            <SwiperSlide key={shoe.id}>
              <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">

                {/* Image */}
                <div className="h-[180px] flex items-center justify-center">
                  <img
                    src={shoe.img}
                    alt={shoe.name}
                    className="h-[150px] object-contain group-hover:-translate-y-2 transition duration-300"
                  />
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {shoe.name}
                  </h3>
                  <p className="text-lg font-bold text-[#633426] mt-1">
                    {shoe.price}
                  </p>
                </div>

                {/* Button */}
                <Link to={`/product/${shoe.id}`}>
                  <button className="mt-4 w-full border border-[#633426] text-[#633426] py-2 rounded-lg text-sm font-medium hover:bg-[#633426] hover:text-white transition cursor-pointer">
                    View Product
                  </button>
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Sneaker;
