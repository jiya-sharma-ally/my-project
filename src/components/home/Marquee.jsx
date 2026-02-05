const Marquee = () => {
  return (
    <div className="w-full bg-[#fcf4f0] py-7 overflow-hidden">

      {/* Moving track */}
      <div className="marquee-track flex gap-20">

        {Array(20)
          .fill("LIMITED COLLECTION • PREMIUM STYLE •  flat 50% OFF • NEW ARRIVALS • ")
          .map((text, i) => (
            <span key={i} className="text-3xl font-extrabold text-[#633426]">
              {text}
            </span>
          ))}

      </div>
    </div>
  );
};

export default Marquee;
