// Replace these with your actual person images
import p1 from "../../assets/images/person1.png";
import p2 from "../../assets/images/person2.png";
import p3 from "../../assets/images/person3.png";
import p4 from "../../assets/images/person4.png";
import p5 from "../../assets/images/person5.png";
import p6 from "../../assets/images/person5.png";
import p7 from "../../assets/images/person2.png";
import worldMap from "../../assets/images/world-map.png";

// Avatar positions on the map (percentage based)
const avatars = [
  { src: p1, top: "22%", left: "38%"  },  
  { src: p2, top: "15%", left: "62%"  },  
  { src: p3, top: "32%", left: "52%"  },  
  { src: p4, top: "38%", left: "42%"  }, 
  { src: p5, top: "48%", left: "55%"  },  
  { src: p6, top: "20%", left: "75%"  },  
  { src: p7, top: "55%", left: "80%"  },  
];

// SVG lines connecting avatars to center hub (index 2 is hub)
const hubX = 52;
const hubY = 32;
const lines = avatars
  .filter((_, i) => i !== 2)
  .map((a) => ({
    x1: hubX,
    y1: hubY,
    x2: parseFloat(a.left),
    y2: parseFloat(a.top),
  }));

export default function ExpandYourReach() {
  return (
    <section style={{
      background: "#111",
      padding: "52px 48px",
      position: "relative",
      overflow: "hidden",
      minHeight: "420px",
      fontFamily: "sans-serif",
    }}>

      {/* World map dot grid using SVG pattern */}
     <img
  src={worldMap}
  alt="World Map"
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120%",        // 👈 slightly bigger than container
    height: "auto",
    opacity: 0.12,
    zIndex: 0,
    pointerEvents: "none",
  }}
/>

      {/* Connection lines SVG (positioned absolutely, full size) */}
      <svg
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1
  }}
>
        {lines.map((l, i) => (
          <line
  key={i}
  x1={`${l.x1}%`} 
  y1={`${l.y1}%`}
  x2={`${l.x2}%`} 
  y2={`${l.y2}%`}
  stroke="rgba(255,255,255,0.6)"   // 👈 stronger opacity
  strokeWidth="2.5"               // 👈 thicker line
  strokeDasharray="6 6"
/>
        ))}
      </svg>

      {/* Avatars */}
      {avatars.map((a, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: a.top,
            left: a.left,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <img
            src={a.src}
            alt=""
            style={{
              width: i === 2 ? "64px" : "52px",
              height: i === 2 ? "64px" : "52px",
              borderRadius: "50%",
              objectFit: "cover",
              border: i === 2 ? "3px solid #fff" : "2px solid rgba(255,255,255,0.6)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              display: "block",
            }}
          />
        </div>
      ))}

      {/* Text content */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "320px" }}>
        <h2 style={{
          color: "#fff",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: "600",
          margin: "0 0 20px",
          letterSpacing: "-0.3px",
        }}>
          Expand Your Reach
        </h2>

        <button style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#fff",
          color: "#111",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          marginBottom: "140px",
        }}>
          Get Started <span style={{ fontSize: "16px" }}>→</span>
        </button>

        <p style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
          lineHeight: "1.7",
          margin: 0,
          maxWidth: "280px",
        }}>
          Connect with customers and partners across the globe. Grow
          your business internationally with seamless transactions and a
          borderless presence.
        </p>
      </div>

    </section>
  );
}
