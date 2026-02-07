import { Link } from "react-router-dom";
import men from "../../assets/images/men.png";
import women from "../../assets/images/women.png";
import sneakers from "../../assets/images/sneakers.png";
import { MdArrowForward } from "react-icons/md";

const categories = [
  { name: "Men’s Tops", img: men, path: "/men/t-shirts" },
  { name: "Women’s Tops", img: women, path: "/womenCat" },
  { name: "Sneakers", img: sneakers, path: "/shoe" },
];


const Topcategories = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-[#fcf4f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-start text-[#633426] mb-10 md:mb-14">
          Top Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
  <Link
    key={i}
    to={cat.path}
    className="block"
  >
    <div className="relative h-[260px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group">

      <img
        src={cat.img}
        alt={cat.name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
          {cat.name}
        </h3>

        <p className="text-sm opacity-80 mt-1 flex items-center gap-2">
          <span>Explore Collection</span>
          <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
        </p>
      </div>

    </div>
  </Link>
))}

        </div>

      </div>
    </section>
  );
};

export default Topcategories;
