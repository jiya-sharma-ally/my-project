import pantaloon from "../../assets/images/pantaloons.png";
import zudio from "../../assets/images/zudio.png";
import ajio from "../../assets/images/ajio.png";
import fiverr from "../../assets/images/handm.png";
import westside from "../../assets/images/westside.png";






const brands = [
  { name: "PANTALOONS", logo: pantaloon, link: "https://www.pantaloons.com" },
  { name: "ZUDIO", logo: zudio, link: "https://www.zudio.com" },
  { name: "AJIO", logo: ajio, link: "https://www.ajio.com" },
  { name: "FIVERR", logo: fiverr, link: "https://www.hm.com" },
  { name: "WESTSIDE", logo: westside, link: "https://www.westside.com" },
];


const track = [...brands, ...brands, ...brands, ...brands];

function Brandstrip() {
  return (
    <div className="bg-white py-12 border-t border-gray-100">

<h2 className="text-center text-3xl md:text-3xl font-semibold text-gray-900 mb-12 max-w-3xl mx-auto">
  Our <span className="text-[#c9a87c] font-bold">
    Customer
  </span> Manage Thousands Of <span className="text-[#c9a87c] font-bold">
   Partners
  </span>{" "}
  <span className="text-[#c9a87c] font-bold">
    Worldwide!
  </span>
</h2>
      <div style={{ overflow: "hidden", position: "relative" }}>

        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "140px",
          background: "linear-gradient(to right, #ffffff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />


        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "140px",
          background: "linear-gradient(to left, #ffffff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          animation: "marqueeScroll 30s linear infinite",
          whiteSpace: "nowrap",
        }}>
          {track.map((b, i) => (
  <div
    key={i}
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "0 56px",
    }}
  >
   <a 
  href={b.link} 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ display: "inline-block" }}
>
  <img
    src={b.logo}
    alt={b.name}
    style={{
      height: "70px",
      objectFit: "contain",
      maxWidth: "140px",
      transition: "0.3s ease",
    }}
  />
</a>
  </div>
))}

        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Brandstrip;
