// Replace icon imports with your actual icon images
import icon1 from "../../assets/images/revenue.png";
import icon2 from "../../assets/images/support.png";
import icon3 from "../../assets/images/marketing.png";
import icon4 from "../../assets/images/training.png";

const features = [
  {
    icon: icon1,
    title: "Revenue Sharing",
    desc: "Earn up to 40% recurring commission on every client you bring in. Monthly payouts, zero delays.",
  },
  {
    icon: icon2,
    title: "Priority Support",
    desc: "Earn up to 40% recurring commission on every client you bring in. Monthly payouts, zero delays.",
  },
  {
    icon: icon3,
    title: "Co-Marketing",
    desc: "Earn up to 40% recurring commission on every client you bring in. Monthly payouts, zero delays.",
  },
  {
    icon: icon4,
    title: "Exclusive Training",
    desc: "Earn up to 40% recurring commission on every client you bring in. Monthly payouts, zero delays.",
  },
   {
    icon: icon2,
    title: "Exclusive Training",
    desc: "Earn up to 40% recurring commission on every client you bring in. Monthly payouts, zero delays.",
  },
];

export default function SuccessStories() {
  return (
    <section
      style={{
        position: "relative",
        padding: "64px 24px 80px",
        textAlign: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Brown Top Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "350px",  
          background: "#c9a87c",
          zIndex: 0,
        }}
      ></div>

      {/* Content (must be separate) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#1a1a1a",
            margin: "0 0 12px",
          }}
        >
          How It Works
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#3a2e22",
            lineHeight: "1.7",
            maxWidth: "420px",
            margin: "0 auto 52px",
            fontStyle: "italic",
          }}
        >
          Getting started is quick and easy. Follow these simple steps and
          let us take care of the rest.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "#f5ede0",
                borderRadius: "2px",
                padding: "32px 24px 28px",
                width: "210px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "#f5ede0",
                  border: "1.5px solid #d4b896",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={f.icon}
                  alt={f.title}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <strong style={{ fontSize: "15px", fontWeight: "700" }}>
                {f.title}
              </strong>

              <p style={{ fontSize: "13px", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
