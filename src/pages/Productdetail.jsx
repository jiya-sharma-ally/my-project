import { Link } from "react-router-dom";

import { useState, useRef } from "react";


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import detail1 from "../assets/images/detail1.png";
import detail2 from "../assets/images/detail2.png";
import detail3 from "../assets/images/detail3.png";
import detail4 from "../assets/images/detail4.png";
import SimilarProducts from "../components/details/similar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";



const images = [detail1, detail2, detail3, detail4];
const sizes = ["S", "M", "L", "XL", "XXL", "3XL"];
const colors = ["#5b6cff", "#5f6d6a", "#CE3F3F", "#f2b6b6"];

const ProductDetail = () => {
  const [reviewRating, setReviewRating] = useState(0);
const [reviewText, setReviewText] = useState("");
const [reviewName, setReviewName] = useState("");

  const reviewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImg = images[activeIndex];
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const renderStars = (rating, clickable = false) => {
  return [...Array(5)].map((_, i) => {
    const starValue = i + 1;
    return (
      <span
        key={i}
        onClick={clickable ? () => setReviewRating(starValue) : undefined}
        className={`cursor-${clickable ? "pointer" : "default"} text-yellow-500`}
      >
        {starValue <= rating ? <FaStar /> : <FaRegStar />}
      </span>
    );
  });
};


  return (
    <>
      <section className="w-full  mt-25 py-12">
        <div className="max-w-350 mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20">
          
<div className="flex gap-6 self-start lg:sticky lg:top-28 h-fit">


            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-20 h-24 bg-white rounded-md border cursor-pointer flex items-center justify-center
${activeImg === img ? "border-black" : "border-transparent"}`}
                >
                  <img src={img} alt="" className="h-full object-contain" />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#ced9dc] rounded-xl relative h-130 overflow-hidden flex items-center justify-center">


              <img
                src={activeImg}
                alt="product"
                className="max-h-full max-w-full object-contain"

              />

              
              <button
  onClick={() =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }
  className="absolute left-4 w-9 h-9 opacity-0 pointer-events-none"
>
  <MdKeyboardArrowLeft />
</button>

<button
  onClick={() =>
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }
  className="absolute right-4 w-9 h-9 opacity-0 pointer-events-none"
>
  <MdKeyboardArrowRight />
</button>

            </div>
          </div>

          {/* RIGHT INFO AREA */}
          <div className="max-w-md">
            <h1 className="text-2xl text-gray-500 mb-2">
              Nike ACG “Wolf Tree” Polartec
            </h1>

            <div className="flex items-center gap-2 text-sm mb-3">
              <span className="font-semibold text-3xl ">₹2000</span>
             <div
  onClick={() =>
    reviewRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  className="flex items-center gap-1 text-yellow-500 cursor-pointer hover:opacity-80"
>
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <span className="text-sm ml-1 text-gray-500">(128)</span>
</div>

            </div>

            <p className="text-sm text-gray-500 mb-6">
              Pay in 4 interest-free installments on orders over ₹5,000.
              Enjoy flexible payments with zero interest and no hidden charges. Shop now and pay over time with complete peace of mind.
            </p>

            {/* COLORS */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Select Color</p>
              <div className="flex gap-3">
                {colors.map((color, i) => (
                  <span
                    key={i}
                    onClick={() => setActiveColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-7 h-7 rounded-full cursor-pointer border
${activeColor === color ? "ring-1 ring-black" : ""}`}
                  ></span>
                ))}
              </div>
            </div>

            {/* SIZES */}
          <div className="mb-6">
  <p className="text-sm font-medium mb-2">Select Size</p>
  <div className="grid grid-cols-6 gap-2">
    {sizes.map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`py-2 border text-sm cursor-pointer
          ${selectedSize === size ? "border-black" : "border-gray-300"}
        `}
      >
        {size}
      </button>
    ))}
  </div>
</div>


            {/* QUANTITY */}
            <div className="mb-6 ">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center border w-max">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-4 py-2 cursor-pointer"
                >
                  −
                </button>
                <span className="px-4">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 cursor-pointer">
                  +
                </button>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex gap-3 mb-8 relative z-20">
              <button className="mt-4 w-full border border-[#633426] text-[#633426] py-2 rounded-lg text-sm font-medium hover:bg-[#633426] hover:text-white transition cursor-pointer">
                Buy now
              </button>

              <Link to="/cart" className="w-full">
  <button className="mt-4 w-full border border-[#633426] text-[#633426] py-2 rounded-lg text-sm font-medium hover:bg-[#633426] hover:text-white transition cursor-pointer">
    Add to cart
  </button>
</Link>

            </div>

            {/* ACCORDION */}
            <div className="border-t text-sm">


              <details className="py-4 border-b">
                <summary className="cursor-pointer font-medium">
                  Shipping & Returns
                </summary>
                <p className="mt-2 text-gray-600">
                  7 days easy returns and exchange
                </p>
                <div className="max-w-4xl mx-auto px-6 py-10">

                  <ul className="list-disc pl-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    <li>
                      We offer a hassle-free return and exchange policy for 7 days from the date of delivery.
                    </li>

                    <li>
                      Please choose the prepaid option instead of COD to avoid a INR 50 handling fee per product.
                    </li>

                    <li>
                      We offer free shipping on all orders.
                    </li>

                    <li>
                      Refunds for prepaid orders are processed back to the original payment method, while COD refunds are issued as Store Credits in your Crazymonk wallet.
                    </li>

                    <li>
                      We strongly recommend recording a video while opening/unpacking your order, ensuring all stickers/labels are intact. This video will serve as proof in case of missing or damaged product(s) or parcel(s). Without video proof, it will be difficult for us to proceed with returns or refunds.
                    </li>

                    <li>
                      Exchanges are subject to stock availability and can be initiated only once per product.
                    </li>

                    <li>
                      Orders can be cancelled or modified (change number, address, product style or size) if they have not yet been dispatched from our warehouse. Contact us via WhatsApp or email us at support@crazymonk.in to request changes.
                    </li>

                    <li>
                      For detailed information, please visit our Returns, Exchange, and Refund Policy page.
                    </li>
                  </ul>
                </div>


              </details>

              <details className="py-4">
                <summary className="cursor-pointer font-medium">Details</summary>
                <p className="mt-2 text-gray-600">
                  Fabric: Polartec • Fit: Regular • Care: Machine wash
                </p>
              </details>
            </div>
           <section ref={reviewRef} className="pt-12 border-t">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-2xl font-bold text-[#633426]">
      Ratings & Reviews
    </h2>

    <button className="border border-[#633426] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#633426] hover:text-white transition cursor-pointer">
      Rate Product
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">

    {/* LEFT: OVERALL RATING */}
    <div>
      <div className="text-5xl font-bold text-[#633426] flex items-center gap-2">
        4.3 <FaStar className="text-yellow-500" />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        10,327 Ratings & <br /> 1,152 Reviews
      </p>

      {/* RATING BARS */}
      <div className="mt-4 space-y-2">
        {[5, 4, 3, 2, 1].map((star, i) => (
          <div key={star} className="flex items-center gap-2 text-sm">
            <span>{star}★</span>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${
                  star >= 4
                    ? "bg-green-500"
                    : star === 3
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${[60, 20, 10, 5, 5][i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: IMAGE GALLERY */}
    <div>
     <div className="flex gap-3 justify-start cursor-pointer">
  {images.slice(0, 3).map((img, i) => {
    const extraCount = images.length - 3;

    return (
      <div
        key={i}
        className="relative w-20 h-20 rounded-lg overflow-hidden border group"
      >
        <img
          src={img}
          alt="review"
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Overlay only on LAST image */}
        {i === 2 && extraCount > 0 && (
          <div className="
            absolute inset-0
            bg-black/60
            text-white
            flex items-center justify-center
            text-sm font-semibold
            opacity-0
            group-hover:opacity-100
            transition
          ">
            +{extraCount}
          </div>
        )}
      </div>
    );
  })}
</div>


    </div>

  </div>

  {/* REVIEWS LIST */}
  <div className="mt-10 space-y-8">

    {/* REVIEW ITEM */}
    <div className="border-b pb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          5★
        </span>
        <h4 className="font-semibold">Terrific</h4>
      </div>

      <p className="text-sm text-gray-700 mb-3">
        Best budget product 😍🔥
      </p>

      <div className="flex gap-3 mb-3">
        <img src={detail1} className="h-16 w-16 rounded object-cover border cursor-pointer" />
        <img src={detail2} className="h-16 w-16 rounded object-cover border cursor-pointer" />
      </div>

      <p className="text-xs text-gray-500">
        Verified Buyer • Mar, 2023
      </p>
    </div>

    <div className="border-b pb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          4★
        </span>
        <h4 className="font-semibold">Good product</h4>
      </div>

      <p className="text-sm text-gray-700">
        Quality is good for the price.
      </p>

      <p className="text-xs text-gray-500 mt-2">
        Verified Buyer • Feb, 2023
      </p>
    </div>

  </div>

</section>

          </div>
        </div>
      </section>
{/* REVIEWS SECTION */}


      {/* Similar Products BELOW section */}
      <SimilarProducts />
    </>
  );
};

export default ProductDetail;
