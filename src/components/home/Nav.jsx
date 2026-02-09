import { useState } from "react";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import anime from "../../assets/images/anime.png";
import marvel from "../../assets/images/marvel.png";
import harry from "../../assets/images/harry.png";
import newArrivals from "../../assets/images/new.png";
import hotMerch from "../../assets/images/hot.png";
import womenNew from "../../assets/images/women-harry.png";
import womenAnime from "../../assets/images/women-kawai.png";
import womenMarvel from "../../assets/images/women-marvel.png";
import sneaker1 from "../../assets/images/sneak.png";
import sneaker2 from "../../assets/images/sneaky.png";
import sneaker3 from "../../assets/images/sneaker3.png";
import sneaker4 from "../../assets/images/sneaker4.png";



const Nav = () => {
  const [activeTab, setActiveTab] = useState("MEN");
  const [openAccordion, setOpenAccordion] = useState(null);

  const [showAllMenu, setShowAllMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const categoryData = {
 MEN: {
    highlights: [
    { title: "New Arrivals", img: newArrivals },
    { title: "Hot Merch", img: hotMerch },
    { title: "Anime", img: anime },
    { title: "Harry Potter", img: harry },
    { title: "Marvel", img: marvel },
    { title: "DC Comics", img: anime },
    { title: "Gaming", img: hotMerch },
    { title: "Limited Edition", img: newArrivals },
  ],


  harrypotter: [
    { title: "T-Shirts", img: anime },
    { title: "Oversized Tees", img: marvel },
    { title: "Polos", img: harry },
    { title: "Hoodies", img: hotMerch },
    { title: "Sweatshirts", img: newArrivals },
  ],

  marvel: [
    { title: "Joggers", img: hotMerch },
    { title: "Shorts", img: newArrivals },
    { title: "Track Pants", img: anime },
    { title: "Cargo Pants", img: marvel },
  ],

  
  accessories: [
    { title: "Caps", img: anime },
    { title: "Backpacks", img: harry },
    { title: "Socks", img: marvel },
    { title: "Wallets", img: hotMerch },
    { title: "Belts", img: newArrivals },
  ],
},

   WOMEN: {
  highlights: [
    { title: "New Drops", img: womenNew },
    { title: "Anime", img: womenAnime },
    { title: "Marvel", img: womenMarvel },
  ],

  harrypotter: [
    { title: "Crop Tees", img: womenAnime },
    { title: "Oversized Tops", img: womenMarvel },
  ],

  marvel: [
    { title: "kawai", img: womenNew },
    { title: "oversizetees", img: womenMarvel },
  ],

  accessories: [
    { title: "Bags", img: womenNew },
    { title: "Caps", img: womenAnime },
  ],
},
SNEAKERS: {
  highlights: [
    { title: "New Arrivals", img: sneaker1 },
    { title: "Trending", img: sneaker2 },
    { title: "Best Sellers", img: sneaker3 },
    { title: "Limited Drop", img: sneaker4 },
  ],

  harrypotter: [
    { title: "Casual Sneakers", img: sneaker1 },
    { title: "High Tops", img: sneaker2 },
    { title: "Chunky Soles", img: sneaker3 },
  ],

  marvel: [
    { title: "Street Sneakers", img: sneaker4 },
    { title: "Retro Runners", img: sneaker1 },
  ],

  accessories: [
    { title: "Laces", img: sneaker2 },
    { title: "Shoe Care", img: sneaker3 },
  ],
},

  };


  return (
    <nav className="fixed top-0 left-0 w-full border-b shadow-sm bg-[#f3e9dc] z-50">


      <div className="flex items-center justify-between px-4 md:px-8 py-3">


        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src={logo}
            alt="DripTees Logo"
            className="h-12 md:h-20 cursor-pointer"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-semibold text-lg tracking-wide list-none">


          <li className="relative flex items-center gap-8">

            {/* ALL */}
            <button
              onClick={() => setShowAllMenu(true)}
              className="hover-underline inline-flex items-center
               font-semibold text-lg tracking-wide
               text-[#1f2937]"
            >
              ALL
            </button>

            {/* MEN */}
            <div className="relative group inline-flex items-center cursor-pointer">
              <Link
                onClick={() => scrollToSection("men")}
                className="hover-underline font-semibold text-lg tracking-wide"
              >
                MEN
              </Link>

              {/* Dropdown */}
              <div
                className="absolute top-8 left-0 bg-white shadow-lg rounded-md
                 opacity-0 invisible group-hover:opacity-100
                 group-hover:visible transition"
              >
                <ul className="text-sm font-medium text-gray-700 min-w-[160px]">
                  <Link to="/men/t-shirts">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      T-Shirts
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Oversized Tees
                  </li>
                </ul>
              </div>
            </div>

          </li>





          <li className="relative group cursor-pointer">
            <Link onClick={() => scrollToSection("women")} className="hover-underline">WOMEN</Link>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul className="text-sm font-medium text-gray-700 min-w-[160px]">
                <Link to="/womenCat">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Crop Tees
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-100">Oversized</li>
              </ul>
            </div>
          </li>


          <li className="relative group cursor-pointer">
            <Link onClick={() => scrollToSection("sneaker")} className="hover-underline">SNEAKERS</Link>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul className="text-sm font-medium text-gray-700 min-w-[160px]">

                <Link to="/shoe">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Casual
                  </li>
                </Link>


                <li className="px-4 py-2 hover:bg-gray-100">Minimal</li>
                <li className="px-4 py-2 hover:bg-gray-100">Retro</li>
              </ul>
            </div>
          </li>

          <li
            onClick={() => scrollToSection("best-seller")}
            className="hover-underline cursor-pointer"
          >
            BEST SELLER
          </li>

          <li
            onClick={() => scrollToSection("new-arrivals")}
            className="hover-underline cursor-pointer"
          >
            NEW ARRIVALS
          </li>


        </ul>



        <div className="flex items-center gap-3 md:gap-4">

          <div className="hidden sm:flex items-center border rounded-full px-3 py-1 bg-white">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm w-28 md:w-40 bg-transparent"
            />
          </div>

          <Link to="/wishlist" className="relative group cursor-pointer">
            <Heart size={20} />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   bg-black text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition">
              Wishlist
            </span>
          </Link>

          <Link to="/cart" className="relative group cursor-pointer">

            <ShoppingCart size={20} />

            <span className="absolute -top-2 -right-2 bg-[#633426] text-white 
                   text-[10px] w-4 h-4 flex items-center justify-center 
                   rounded-full">
              2
            </span>


            <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   bg-black text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition">
              Cart
            </span>
          </Link>

          <div className="relative group cursor-pointer">
            <User size={22} />
            <div className="absolute top-full right-0 mt-2 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <ul className="text-sm font-medium text-gray-700">
                <li
                  onClick={() => setShowProfile(true)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </li>
              </ul>

            </div>
          </div>



          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>

        </div>
      </div>


      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-4 gap-4 font-medium text-gray-700">
         <li className="border-b pb-2">
          <Link to="/" onClick={() => setOpen(false)}>
    ALL
  </Link>
         </li>
          <li className="border-b pb-2">
  <Link to="/men/:category" onClick={() => setOpen(false)}>
    MEN
  </Link>
</li>
           <li className="border-b pb-2">
          <Link to="/womencat" onClick={() => setOpen(false)}>
    WOMEN
  </Link>
  </li>
  <li className="border-b pb-2">
 <Link to="/shoe" onClick={() => setOpen(false)}>
SNEAKER
  </Link>
  </li>
  <li className="border-b pb-2">
 <Link to="/men/:category" onClick={() => setOpen(false)}>
    NEW ARRIVALS
  </Link>
  </li>
  <li className="border-b pb-2">
 <Link to="/men/:category" onClick={() => setOpen(false)}>
    BEST SELLER
  </Link>
  </li>
          
            <li className="border-b pb-2">
              <Link to="/profile">My Profile</Link>
         

          </li>
        </ul>
      </div>
      {showProfile && (
        <div className="fixed inset-0 bg-[black]/60 flex items-center justify-center z-50">

          <div className="w-[95%] max-w-5xl h-[420px] bg-white rounded-2xl overflow-hidden flex relative shadow-2xl">


            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-4 right-4 text-black text-2xl z-10"
            >
              ✕
            </button>


            <div className="w-1/2 bg-[#633426] text-white flex flex-col justify-center items-center p-10">
              <h1 className="text-5xl font-extrabold tracking-wider mb-6">
                DRIPTEES
              </h1>



              <p className="text-xl text-center font-semibold">
                Welcome! <br />
                Register to avail the best deals!
              </p>
            </div>


            <div className="w-1/2 flex flex-col justify-center px-12">

              <h2 className="text-2xl font-bold mb-2 text-center">
                Login / Signup
              </h2>

              <p className="text-center text-gray-500 mb-6">
                Enter Mobile Number
              </p>


              <div className="flex border rounded-lg overflow-hidden mb-6">
                <div className="px-4 flex items-center border-r bg-gray-50">
                  🇮🇳 +91
                </div>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="flex-1 px-4 py-3 outline-none"
                />
              </div>

              <p className="text-xs text-center text-gray-400">
                By logging in, you're agreeing to our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Terms of Service</span>
              </p>

              <p className="text-center mt-4 text-sm text-blue-600 underline cursor-pointer">
                Trouble logging in?
              </p>

            </div>
          </div>
        </div>
      )}

      {/* ALL CATEGORIES OFFCANVAS */}
      <div className={`fixed inset-0 z-50 ${showAllMenu ? "visible" : "invisible"}`}>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 ${showAllMenu ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setShowAllMenu(false)}
        />

        {/* Panel */}
        <div
  className={`absolute left-0 top-0 h-full w-full sm:w-[420px] bg-white
  transform transition-transform duration-300
  overflow-y-auto offcanvas-scroll
  ${showAllMenu ? "translate-x-0" : "-translate-x-full"}`}
>


          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <img src={logo} alt="logo" className="h-8" />
            <X size={22} onClick={() => setShowAllMenu(false)} />
          </div>

          {/* Tabs */}
          <div className="flex justify-around border-b text-sm font-semibold">
  {["MEN", "WOMEN", "SNEAKERS"].map((tab) => (
    <button
      key={tab}
      onClick={() => {
        setActiveTab(tab);
        setOpenAccordion(null);
      }}
      className={`py-3 w-full ${
        activeTab === tab
          ? "border-b-2 border-[#0f766e] text-[#0f766e]"
          : "text-gray-400"
      }`}
    >
      {tab}
    </button>
  ))}
</div>


          {/* Highlights */}
         
{/* Highlights */}
<div className="grid grid-cols-4 gap-4 px-4 py-4">
  {categoryData[activeTab].highlights.slice(0, 8).map((item) => (
    <Link
      key={item.title}
      to={`/${activeTab.toLowerCase()}/${item.title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
      onClick={() => setShowAllMenu(false)}
      className="text-center text-xs font-medium"
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-16 w-16 mx-auto rounded-lg object-cover mb-1"
      />
      <span>{item.title}</span>
    </Link>
  ))}
</div>



          {/* Accordion */}
          <div className="px-4 divide-y text-sm font-medium">

           {["harrypotter", "marvel", "accessories"].map(section => (

              categoryData[activeTab][section]?.length > 0 && (
                <div key={section}>
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === section ? null : section)
                    }
                    className="flex justify-between w-full py-4"
                  >
                    <span className="capitalize">{section}</span>
                    <span>{openAccordion === section ? "−" : "+"}</span>
                  </button>

                  {openAccordion === section && (
                    <ul className="pb-4 space-y-2 text-gray-600">
                     {categoryData[activeTab][section].map((item) => (
  <Link
    key={item.title}
    to={`/${activeTab.toLowerCase()}/${item.title
      .replace(/\s+/g, "-")
      .toLowerCase()}`}
    onClick={() => setShowAllMenu(false)}
    className="flex items-center gap-4 py-2"
  >
    <img
      src={item.img}
      alt={item.title}
      className="h-12 w-12 rounded-lg object-cover"
    />
    <span className="text-gray-700 font-medium">
      {item.title}
    </span>
  </Link>
))}

                    </ul>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>



    </nav>
  );
};


export default Nav;
