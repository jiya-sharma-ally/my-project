import { useState } from "react";

import img1 from "../assets/images/men1.png";
import img2 from "../assets/images/men2.png";
import img3 from "../assets/images/men3.png";
import img4 from "../assets/images/men4.png";

const images = [img1, img2, img3, img4];
const sizes = ["S", "M", "L", "XL", "XXL", "3XL"];
const colors = ["#5b6cff", "#5f6d6a", "#000000", "#f2b6b6"];

const ProductDetail = () => {
  const [activeImg, setActiveImg] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section className="w-full bg-[#f5f5f5] py-12">
      <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20">
        {/* LEFT IMAGE AREA */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(img)}
                className={`w-20 h-24 bg-white rounded-md border cursor-pointer flex items-center justify-center
                  ${activeImg === img ? "border-black" : "border-transparent"}`}
              >
                <img src={img} alt="" className="h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-[#e9e9e9] rounded-xl flex items-center justify-center relative">
            <img
              src={activeImg}
              alt="product"
              className="h-[560px] object-contain"
            />

            {/* arrows (visual only) */}
            <button className="absolute left-4 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center">
              ‹
            </button>
            <button className="absolute right-4 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center">
              ›
            </button>
          </div>
        </div>

        {/* RIGHT INFO AREA */}
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold mb-2">
            Nike ACG “Wolf Tree” Polartec
          </h1>

          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="font-semibold">₹25,000</span>
            <span className="text-yellow-500">★ 5.0</span>
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
                    ${activeColor === color ? "ring-2 ring-black" : ""}`}
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
                  className={`py-2 border text-sm
                    ${
                      selectedSize === size ? "border-black" : "border-gray-300"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex items-center border w-max">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">
                +
              </button>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex gap-3 mb-8 relative z-20">
            <button className="mt-4 w-full border border-[#633426] text-[#633426] py-2 rounded-lg text-sm font-medium hover:bg-[#633426] hover:text-white transition">
                Buy now
              </button>

            <button className="mt-4 w-full border border-[#633426] text-[#633426] py-2 rounded-lg text-sm font-medium hover:bg-[#633426] hover:text-white transition">
                Add to cart
              </button>
          </div>

          {/* ACCORDION */}
          <div className="border-t text-sm">
            

            <details className="py-4 border-b">
              <summary className="cursor-pointer font-medium">
                Shipping & Returns
              </summary>
              <p className="mt-2 text-gray-600">
                Free shipping & 7-day easy returns.
              </p>
            </details>

            <details className="py-4">
              <summary className="cursor-pointer font-medium">Details</summary>
              <p className="mt-2 text-gray-600">
                Fabric: Polartec • Fit: Regular • Care: Machine wash
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
