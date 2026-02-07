import { Link } from "react-router-dom";

  import { useState } from "react";
  import { IoMdHeartEmpty } from "react-icons/io";
  import banner from "../assets/images/banner.png";
  import cat1 from "../assets/images/cat1.png";
  import cat2 from "../assets/images/cat2.png";
  import cat3 from "../assets/images/cat3.png";
  import cat4 from "../assets/images/cat4.png";
  import cat5 from "../assets/images/cat5.png";
  import cat6 from "../assets/images/cat6.png";
  import cat7 from "../assets/images/cat7.png";
  import cat8 from "../assets/images/cat8.png";
  import cat9 from "../assets/images/cat9.png";
  import catback1 from "../assets/images/catback1.png";
  import catback2 from "../assets/images/catback2.png";
  import catback3 from "../assets/images/catback3.png";
  import catback4 from "../assets/images/catback4.png";
  import catback5 from "../assets/images/catback5.png";
  import catback6 from "../assets/images/catback6.png";
  import catback7 from "../assets/images/catback7.png";
  import catback8 from "../assets/images/catback8.png";
  import catback9 from "../assets/images/catback9.png";



const CategoryPage = () => {
  const title = "T-Shirts"; 


    const products = [
      { id: 1, img: cat1, hoverImg: catback1, name: `${title} Classic`, price: 999, size: "M", category: "Hooded T-Shirts", theme: "Batman" },
      { id: 2, img: cat2, hoverImg: catback2, name: `${title} Premium`, price: 1299, size: "L", category: "Men Co-Ord Sets", theme: "Attack On Titan" },
      { id: 3, img: cat3, hoverImg: catback3, name: `${title} Street`, price: 1499, size: "S", category: "Oversized Polos", theme: "5 Star" },
      { id: 4, img: cat4, hoverImg: catback4, name: `${title} Street`, price: 1599, size: "XL", category: "Oversized T-Shirts", theme: "Avatar" },
      { id: 5, img: cat5, hoverImg: catback5, name: `${title} Street`, price: 1799, size: "M", category: "Oversized T-Shirts", theme: "Batman" },
      { id: 6, img: cat6, hoverImg: catback6, name: `${title} Street`, price: 899, size: "S", category: "Hooded T-Shirts", theme: "5 Star" },
      { id: 7, img: cat7, hoverImg: catback7, name: `${title} Street`, price: 1999, size: "XXL", category: "Oversized Polos", theme: "Avatar" },
      { id: 8, img: cat8, hoverImg: catback8, name: `${title} Street`, price: 1099, size: "L", category: "Men Co-Ord Sets", theme: "Attack On Titan" },
      { id: 9, img: cat9, hoverImg: catback9, name: `${title} Street`, price: 1399, size: "XL", category: "Oversized T-Shirts", theme: "Batman" },
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
      <section className="min-h-screen bg-[#fdf7f4] py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* BANNER: Responsive height and object-fit */}
          <div className="w-full h-48 sm:h-64 lg:h-80 mb-10 overflow-hidden rounded-xl">
            <img src={banner} className="w-full h-full object-cover" alt="Category Banner" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* FILTERS: Width controlled via flex-basis for better stability */}
            <aside className="w-full lg:w-1/3 xl:w-1/4">
              <div className="lg:sticky lg:top-10">
                <h1 className="text-3xl lg:text-4xl font-bold mb-5">{title}</h1>

                <div className="bg-white p-6 rounded-xl shadow space-y-6 text-sm">
                  <div className="col-span-12 lg:col-span-4">
                    <div className="sticky top-10">
                  
                      <div className="bg-white p-6 rounded-xl shadow space-y-6 text-sm">

                        {/* CATEGORY */}
                        <div>
                          <h3 className="font-semibold mb-3">CATEGORIES</h3>
                          {["Hooded T-Shirts", "Men Co-Ord Sets", "Oversized Polos", "Oversized T-Shirts"].map((c) => (
                            <label key={c} className="flex items-center mb-2 cursor-pointer">
                              <input
                                type="radio"
                                name="category"
                                className="mr-2 accent-black focus:ring-0"
                                checked={selectedCategory === c}
                                onClick={() =>
                                  setSelectedCategory(prev => (prev === c ? "" : c))
                                }
                              />
                              {c}
                            </label>
                          ))}
                        </div>

                        {/* SIZE */}
                        <div>
                          <h3 className="font-semibold mb-3">SIZE</h3>
                          <div className="flex flex-wrap gap-2 ">
                            {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                              <button
                                key={s}
                                onClick={() =>
                                  setSelectedSize(prev => (prev === s ? "" : s))
                                }
                                className={`border px-3 py-1 rounded-full cursor-pointer text-xs ${selectedSize === s ? "bg-black text-white" : ""
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

                        {/* THEME */}
                        <div>
                          <h3 className="font-semibold mb-3">THEMES</h3>
                          {["Batman", "Attack On Titan", "Avatar", "5 Star"].map((t) => (
                            <label key={t} className="flex items-center mb-2 cursor-pointer">
                              <input
                                type="radio"
                                name="theme"
                                className="mr-2 accent-black focus:ring-0"
                                checked={selectedTheme === t}
                                onClick={() =>
                                  setSelectedTheme(prev => (prev === t ? "" : t))
                                }
                              />
                              {t}
                            </label>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>


            {/* PRODUCTS: Using auto-rows for consistency */}
            <main className="w-full lg:w-2/3 xl:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="bg-white rounded-xl shadow relative group flex flex-col">

                    {/* IMAGE CONTAINER: Aspect ratio is key for responsiveness */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl">
                      <div className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow 
                                      cursor-pointer opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition">
                        <IoMdHeartEmpty className="text-xl text-black hover:text-red-500" />
                      </div>

                      <img
                        src={p.img}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={p.hoverImg}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>

                    {/* CONTENT: flex-grow ensures buttons align even if titles vary */}
                    <div className="p-4 flex flex-col grow">
                      <h3 className="text-sm font-semibold truncate">{p.name}</h3>
                      <p className="font-bold text-lg">₹{p.price}</p>

                      <div className="mt-auto">
                        <Link to={`/product/${p.id}`}>
  <button className="mt-3 w-full bg-[#633426] text-white py-2.5 rounded-lg font-medium hover:bg-[#995d37] transition-colors cursor-pointer">
    View Product
  </button>
</Link>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* EMPTY STATE */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-500 italic">No products found matching these filters.</p>
                </div>
              )}
            </main>

          </div>
        </div>
      </section>
    );
  };

  export default CategoryPage;
