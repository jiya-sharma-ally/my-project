import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

import sbanner from "../assets/images/sbanner.png";
import sneak1 from "../assets/images/sneak1.png";
import sneak2 from "../assets/images/sneak2.png";
import sneak3 from "../assets/images/sneak3.png";
import sneak4 from "../assets/images/sneak4.png";
import sneak5 from "../assets/images/sneak5.png";
import sneak6 from "../assets/images/sneak6.png";
import sneak7 from "../assets/images/sneak7.png";
import sneak8 from "../assets/images/sneak8.png";
import sneak9 from "../assets/images/sneak9.png";

import sneakback1 from "../assets/images/sneakback1.png";
import sneakback2 from "../assets/images/sneakback2.png";
import sneakback3 from "../assets/images/sneakback3.png";
import sneakback4 from "../assets/images/sneakback4.png";
import sneakback5 from "../assets/images/sneakback5.png";
import sneakback6 from "../assets/images/sneakback6.png";
import sneakback7 from "../assets/images/sneakback7.png";
import sneakback8 from "../assets/images/sneakback8.png";
import sneakback9 from "../assets/images/sneakback9.png";

const Shoe = () => {
  const title = "Sneakers";

  const products = [
    { id: 1, img: sneak1, hoverImg: sneakback1, name: "Sneakers Classic", price: 999, size: "UK 9", category: "Casual", theme: "Daily" },
    { id: 2, img: sneak2, hoverImg: sneakback2, name: "Sneakers Pro", price: 1299, size: "UK 5", category: "Sports", theme: "Running" },
    { id: 3, img: sneak3, hoverImg: sneakback3, name: "Street Sneakers", price: 1499, size: "UK 8", category: "Street", theme: "Urban" },
    { id: 4, img: sneak4, hoverImg: sneakback4, name: "High Top", price: 1599, size: "UK 7", category: "Street", theme: "Urban" },
    { id: 5, img: sneak5, hoverImg: sneakback5, name: "Low Top", price: 1799, size: "UK 5", category: "Casual", theme: "Daily" },
    { id: 6, img: sneak6, hoverImg: sneakback6, name: "Runner", price: 899, size: "UK 9", category: "Sports", theme: "Running" },
    { id: 7, img: sneak7, hoverImg: sneakback7, name: "Premium Sneaker", price: 1999, size: "UK 8", category: "Casual", theme: "Luxury" },
    { id: 8, img: sneak8, hoverImg: sneakback8, name: "Trainer", price: 1099, size: "UK 10", category: "Sports", theme: "Gym" },
    { id: 9, img: sneak9, hoverImg: sneakback9, name: "Everyday Sneaker", price: 1399, size: "UK 11", category: "Casual", theme: "Daily" },
  ];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const filteredProducts = products
    .filter(p =>
      (selectedSize ? p.size === selectedSize : true) &&
      (selectedCategory ? p.category === selectedCategory : true) &&
      (selectedTheme ? p.theme === selectedTheme : true)
    )
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split("-").map(Number);
      return p.price >= min && p.price <= max;
    });

  return (
    <section className="min-h-screen mt-25 bg-[#fdf7f4] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* BANNER */}
        <div className="w-full h-48 sm:h-64 lg:h-80 mb-10 overflow-hidden rounded-xl">
          <img src={sbanner} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* FILTERS */}
          <aside className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-10">
              <h1 className="text-3xl font-extrabold mb-5">{title}</h1>

              <div className="bg-white p-6 rounded-xl shadow space-y-6 text-sm">

                {/* CATEGORY */}
                <div>
                  <h3 className="font-semibold mb-3">CATEGORY</h3>
                  {["Casual", "Sports", "Street"].map(c => (
                    <label key={c} className="flex items-center mb-2 cursor-pointer">
                      <input
                        type="radio"
                        className="mr-2 accent-black"
                        checked={selectedCategory === c}
                        onClick={() => setSelectedCategory(prev => prev === c ? "" : c)}
                      />
                      {c}
                    </label>
                  ))}
                </div>

                {/* SIZE */}
                <div>
                  <h3 className="font-semibold mb-3">SIZE</h3>
                  <div className="flex flex-wrap gap-2 ">
                    {["UK 5", "UK 6", "UK 7", "UK 8" , "UK 9" , "UK 10" , "UK 11"].map(s => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(prev => prev === s ? "" : s)}
                        className={`border px-3 py-1 rounded-full text-xs cursor-pointer ${
                          selectedSize === s ? "bg-black text-white" : ""
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div>
                  <h3 className="font-semibold mb-3">PRICE</h3>
                  {[
                    ["0-1000", "Under ₹1000"],
                    ["1000-1500", "₹1000 - ₹1500"],
                    ["1500-2500", "Above ₹1500"],
                  ].map(([val, label]) => (
                    <label key={val} className="flex items-center mb-2 cursor-pointer">
                      <input
                        type="radio"
                        className="mr-2 accent-black"
                        checked={priceRange === val}
                        onClick={() => setPriceRange(prev => prev === val ? "" : val)}
                      />
                      {label}
                    </label>
                  ))}
                </div>

              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <div key={p.id} className="bg-white rounded-xl shadow group">

                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
                      <IoMdHeartEmpty className="text-xl text-black hover:text-red-500" />
                    </div>

                    <img
                      src={p.img}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-0 cursor-pointer"
                    />
                    <img
                      src={p.hoverImg}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold">{p.name}</h3>
                    <p className="font-bold">₹{p.price}</p>

                    <Link to={`/product/${p.id}`}>
                        <button className="mt-3 w-full bg-[#633426] text-white py-2.5 rounded-lg font-medium hover:bg-[#995d37] transition-colors cursor-pointer">
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </section>
  );
};

export default Shoe;
