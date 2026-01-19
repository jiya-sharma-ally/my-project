import { ShoppingCart, Heart, User, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";


const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 border-b shadow-sm bg-[#f3e9dc]">

      {/* LEFT: Logo */}
      <img src={logo} alt="DripTees Logo" className="h-20 w-30" />


      {/* CENTER: Tabs */}
      <ul className="flex items-center gap-8 font-semibold text-sm tracking-wide list-none absolute left-1/2 -translate-x-1/2">
        <li className="hover-underline cursor-pointer">MEN</li>
        <li className="hover-underline cursor-pointer">WOMEN</li>
        <li className="hover-underline cursor-pointer">SNEAKERS</li>
        <li className="hover-underline cursor-pointer">BEST SELLER</li>
        <li className="hover-underline cursor-pointer">NEW ARRIVALS</li>
      </ul>

      {/* RIGHT: Search + Icons */}
      <div className="flex items-center gap-4">

        <div className="flex items-center border rounded-full px-3 py-1">
          <Search size={16} />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="ml-2 outline-none text-sm w-40"
          />
        </div>

        <User size={20} />
        <Heart size={20} />
        <ShoppingCart size={20} />
      </div>

    </nav>
  );
};

export default Nav;
