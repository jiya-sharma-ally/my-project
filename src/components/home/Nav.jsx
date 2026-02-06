import { useState } from "react";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <nav className="w-full border-b shadow-sm bg-[#f3e9dc]">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">

        {/* LEFT */}
        <img src={logo} alt="DripTees Logo" className="h-12 md:h-20" />

        {/* CENTER (DESKTOP ONLY) */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-lg tracking-wide list-none">

          {/* MEN */}
          <li className="relative group cursor-pointer">
            <span className="hover-underline">MEN</span>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul className="text-sm font-medium text-gray-700 min-w-[160px]">
                <Link to="/men/t-shirts">
  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">T-Shirts</li>
</Link>

                <li className="px-4 py-2 hover:bg-gray-100">Oversized Tees</li>
                <li className="px-4 py-2 hover:bg-gray-100">Sneakers</li>
              </ul>
            </div>
          </li>

          {/* WOMEN */}
          <li className="relative group cursor-pointer">
            <span className="hover-underline">WOMEN</span>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul className="text-sm font-medium text-gray-700 min-w-[160px]">
                <li className="px-4 py-2 hover:bg-gray-100">Crop Tees</li>
                <li className="px-4 py-2 hover:bg-gray-100">Oversized</li>
                <li className="px-4 py-2 hover:bg-gray-100">Sneakers</li>
              </ul>
            </div>
          </li>

          {/* SNEAKERS */}
          <li className="relative group cursor-pointer">
            <span className="hover-underline">SNEAKERS</span>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul className="text-sm font-medium text-gray-700 min-w-[160px]">
                <li className="px-4 py-2 hover:bg-gray-100">Casual</li>
                <li className="px-4 py-2 hover:bg-gray-100">Minimal</li>
                <li className="px-4 py-2 hover:bg-gray-100">Retro</li>
              </ul>
            </div>
          </li>

          <li className="hover-underline cursor-pointer">BEST SELLER</li>
          <li className="hover-underline cursor-pointer">NEW ARRIVALS</li>

        </ul>


        {/* RIGHT */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Search (hide on very small screens if you want) */}
          <div className="hidden sm:flex items-center border rounded-full px-3 py-1 bg-white">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm w-28 md:w-40 bg-transparent"
            />
          </div>

          <div className="relative group cursor-pointer">
            <Heart size={20} />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   bg-black text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition">
              Wishlist
            </span>
          </div>

    <div className="relative group cursor-pointer">
  {/* Cart Icon */}
  <ShoppingCart size={20} />

  {/* Badge */}
  <span className="absolute -top-2 -right-2 bg-[#633426] text-white 
                   text-[10px] w-4 h-4 flex items-center justify-center 
                   rounded-full">
    3
  </span>

  {/* Tooltip */}
  <span className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   bg-black text-white text-xs px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition">
              Cart
            </span>
          </div>

{/* profile */}
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



          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
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
          <li className="border-b pb-2">MEN</li>
          <li className="border-b pb-2">WOMEN</li>
          <li className="border-b pb-2">SNEAKERS</li>
          <li className="border-b pb-2">BEST SELLER</li>
          <li className="border-b pb-2">NEW ARRIVALS</li>
          <li className="border-b pb-2">
            <li className="border-b pb-2">
  <Link to="/profile">My Profile</Link>
</li>

          </li>
        </ul>
      </div>
      {showProfile && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="w-[95%] max-w-5xl h-[420px] bg-white rounded-2xl overflow-hidden flex relative shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setShowProfile(false)}
        className="absolute top-4 right-4 text-black text-2xl z-10"
      >
        ✕
      </button>

      {/* LEFT BLACK SECTION */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
    <h1 className="text-5xl font-extrabold tracking-wider mb-6">
  DRIPTEES
</h1>



        <p className="text-xl text-center font-semibold">
          Welcome! <br />
          Register to avail the best deals!
        </p>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-1/2 flex flex-col justify-center px-12">

        <h2 className="text-2xl font-bold mb-2 text-center">
          Login / Signup
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter Mobile Number
        </p>

        {/* Phone Input */}
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

    </nav>
  );
};


export default Nav;
