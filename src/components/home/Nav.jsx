import { ShoppingCart, Heart, User, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3 border-b shadow-sm bg-[#f3e9dc]">

      {/* LEFT */}
      <img src={logo} alt="DripTees Logo" className="h-12 md:h-20" />

      {/* CENTER */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-lg tracking-wide list-none">

        {/* MEN */}
        <li className="hover-underline cursor-pointer relative group">
          MEN
          <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md hidden group-hover:block">
            <ul className="text-sm font-medium text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">T-Shirts</li>
              <li className="px-4 py-2 hover:bg-gray-100">Sneakers</li>
              <li className="px-4 py-2 hover:bg-gray-100">Oversized Tees</li>
              <li className="px-4 py-2 hover:bg-gray-100">Limited Edition</li>
            </ul>
          </div>
        </li>

        {/* WOMEN */}
        <li className="hover-underline cursor-pointer relative group">
          WOMEN
          <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md hidden group-hover:block">
            <ul className="text-sm font-medium text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">Crop Tees</li>
              <li className="px-4 py-2 hover:bg-gray-100">Sneakers</li>
              <li className="px-4 py-2 hover:bg-gray-100">Oversized</li>
            </ul>
          </div>
        </li>

        {/* SNEAKERS */}
        <li className="hover-underline cursor-pointer relative group">
          SNEAKERS
          <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md hidden group-hover:block">
            <ul className="text-sm font-medium text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">Casuals</li>
              <li className="px-4 py-2 hover:bg-gray-100">Minimalist</li>
              <li className="px-4 py-2 hover:bg-gray-100">Retro</li>
            </ul>
          </div>
        </li>

        <li className="hover-underline cursor-pointer">BEST SELLER</li>
        <li className="hover-underline cursor-pointer">NEW ARRIVALS</li>

      </ul>

      {/* RIGHT */}
      <div className="flex items-center gap-3 md:gap-4">

        {/* Search */}
        <div className="flex items-center border rounded-full px-3 py-1">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none text-sm w-28 md:w-40"
          />
        </div>

        {/* Wishlist */}
        <div className="relative group cursor-pointer">
          <Heart size={20} />
          <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Wishlist
          </span>
        </div>

        {/* Cart */}
        <div className="relative group cursor-pointer">
          <ShoppingCart size={20} />
          <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Cart
          </span>
        </div>

        {/* Profile */}
        <div className="relative group cursor-pointer">
          <User size={22} />
          <div className="absolute top-full right-0 mt-2 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

            <ul className="text-sm font-medium text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/Profile">My Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">My Orders</li>
              <li className="px-4 py-2 hover:bg-gray-100">Coupons</li>
              <li className="px-4 py-2 hover:bg-gray-100">Gift Cards</li>
              <li className="px-4 py-2 hover:bg-gray-100 text-red-500">Logout</li>
            </ul>

          </div>
        </div>

      </div>

    </nav>
  );
};

export default Nav;
