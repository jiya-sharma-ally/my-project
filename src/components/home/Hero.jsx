import model from "../../assets/images/hero-man.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="w-full bg-[#be8866] mt-25 py-14 md:py-20 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6">


        <div
          className="text-left text-[#633426] space-y-5 md:space-y-6 max-w-lg"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest">
            ELEGANCE
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            QUALITY <br /> MATTERS
          </h2>

          <p className="text-base sm:text-lg text-[#633426]/80">
            Discover the perfect blend of style and comfort for your everyday wear.
          </p>

         <Link to="/men/:category">
  <button className="bg-[#633426] text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition cursor-pointer">
    SHOP NOW →
  </button>
</Link>

        </div>

        {/* RIGHT SIDE - IMAGE */}
      <Link to="/men/:category" className="block">
  <div className="relative w-[260px] sm:w-[320px] md:w-[500px] cursor-pointer">
    <div className="absolute top-3 left-3 w-full h-full bg-[#6f4e37] rounded-2xl rotate-6deg"></div>
    <div className="absolute top-6 left-6 w-full h-full bg-[#c68c53] rounded-2xl rotate-6deg"></div>

    <img
      src={model}
      alt="Hero Model"
      className="relative w-full rounded-2xl shadow-2xl"
    />
  </div>
</Link>

      </div>
    </section>
  );
};

export default Hero;
