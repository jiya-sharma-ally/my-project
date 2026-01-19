import model from "../assets/images/hero-man.png";


const Hero = () => {
  return (
    <section className="w-full bg-[#be8866] py-20 flex items-center justify-center">

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6">

        {/* LEFT SIDE - TEXT */}
        <div className="text-left text-[#633426] space-y-6 max-w-lg">

          <h1 className="text-5xl font-extrabold tracking-widest">
            ELEGANCE
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            QUALITY <br /> MATTERS
          </h2>

          <p className="text-lg text-[#633426]/80">
            Discover the perfect blend of style and comfort for your everyday wear.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
            SHOP NOW →
          </button>

        </div>


        {/* RIGHT SIDE - IMAGE */}
        <div className="relative w-[350px] md:w-[500px]">

          <div className="absolute top-3 left-3 w-full h-full bg-[#6f4e37] rounded-2xl rotate-[-6deg]"></div>
          <div className="absolute top-6 left-6 w-full h-full bg-[#c68c53] rounded-2xl rotate-[6deg]"></div>

          <img
            src={model}
            alt="Hero Model"
            className="relative w-full rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;