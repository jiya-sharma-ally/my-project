import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

import wbanner from "../assets/images/wbanner.png";
import wo1 from "../assets/images/wo1.png";
import wo2 from "../assets/images/wo2.png";
import wo3 from "../assets/images/wo3.png";
import wo4 from "../assets/images/wo4.png";
import wo5 from "../assets/images/wo5.png";
import wo6 from "../assets/images/wo6.png";
import wo7 from "../assets/images/wo7.png";
import wo8 from "../assets/images/wo8.png";
import wo9 from "../assets/images/wo9.png";

import wob1 from "../assets/images/wob1.png";
import wob2 from "../assets/images/wob2.png";
import wob3 from "../assets/images/wob3.png";
import wob4 from "../assets/images/wob4.png";
import wob5 from "../assets/images/wob5.png";
import wob6 from "../assets/images/wob6.png";
import wob7 from "../assets/images/wob7.png";
import wob8 from "../assets/images/wob8.png";
import wob9 from "../assets/images/wob9.png";

const WomenCat = () => {
  const title = "Women's clothing";

  const products = [
    { id: 1, img: wo1, hoverImg: wob1, name: "We Bare Bears: Be The Bear", price: 999, size: "M", category: "Casual", theme: "Daily" },
    { id: 2, img: wo2, hoverImg: wob2, name: "Women Oversized Sweatshirt", price: 1299, size: "XL", category: "Sports", theme: "Running" },
    { id: 3, img: wo3, hoverImg: wob3, name: "Looney Tunes: Toon Chaos", price: 1499, size: "XS", category: "Street", theme: "Urban" },
    { id: 4, img: wo4, hoverImg: wob4, name: "Cable-Knit Sweater: Farmhouse", price: 1599, size: "S", category: "Street", theme: "Urban" },
    { id: 5, img: wo5, hoverImg: wob5, name: "Shadow Badge", price: 1799, size: "XS", category: "Casual", theme: "Daily" },
    { id: 6, img: wo6, hoverImg: wob6, name: "TSS Originals: Just Stay Home", price: 899, size: "L", category: "Sports", theme: "Running" },
    { id: 7, img: wo7, hoverImg: wob7, name: "Peanuts: Astro Club", price: 1999, size: "M", category: "Casual", theme: "Luxury" },
    { id: 8, img: wo8, hoverImg: wob8, name: "TSS Originals: Aspire", price: 1099, size: "XXL", category: "Sports", theme: "Gym" },
    { id: 9, img: wo9, hoverImg: wob9, name: "Kung Fu Panda: Warrior Strength", price: 1399, size: "XS", category: "Casual", theme: "Daily" },
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
    <section className="min-h-screen bg-[#fdf7f4] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* BANNER */}
        <div className="w-full h-48 sm:h-64 lg:h-80 mb-10 overflow-hidden rounded-xl">
          <img src={wbanner} className="w-full h-full object-cover" />
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
                    {["XS", "S", "M", "L", "XL", "XXL"].map(s => (
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
                          <h3 className="font-semibold mb-3">PRICES</h3>
                          {[
                            ["0-1048", "Rs. 549 - Rs. 1048"],
                            ["1049-1548", "Rs. 1049 - Rs. 1548"],
                            ["1549-2048", "Rs. 1549 - Rs. 2048"],
                          ].map(([val, label]) => (
                            <label key={val} className="flex items-center mb-2 cursor-pointer">
                              <input
                                type="radio"
                                name="price"
                                className="mr-2 accent-black focus:ring-0"
                                checked={priceRange === val}
                                onClick={() =>
                                  setPriceRange(prev => (prev === val ? "" : val))
                                }
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

export default WomenCat;
