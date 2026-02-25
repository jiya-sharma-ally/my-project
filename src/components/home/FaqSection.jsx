import { useState } from "react";
import faqImg from "../../assets/images/faq.png.png"; 
import { IoMdAdd } from "react-icons/io";



const faqs = [
  {
    title: "How long does the approval process take?",
    desc: "Our team reviews all partner applications within 2–3 business days. You'll receive an email confirmation once approved.",
  },
  {
    title: "What revenue threshold is required to qualify?",
    desc: "There is no strict revenue threshold. We evaluate partners based on audience quality, reach, and alignment with our brand.",
  },
  {
    title: "Can I upgrade my tier after joining?",
    desc: "Yes! You can upgrade your partner tier at any time by reaching the required milestones for the next level.",
  },
  {
    title: "How and when are commissions paid out?",
    desc: "Commissions are paid monthly via bank transfer or PayPal, provided you have reached the minimum payout threshold of $50.",
  },
  {
    title: "Is there a fee to join the partner program?",
    desc: "No. Joining our partner program is completely free. There are no hidden fees or setup costs.",
  },
  {
    title: "Can I promote multiple products at once?",
    desc: "Absolutely. Once approved, you can promote any of our products and earn separate commissions for each.",
  },
  {
    title: "What marketing materials are provided?",
    desc: "Partners get access to our full media kit including banners, product images, copy templates, and tracking links.",
  },
  {
    title: "Is there dedicated support for partners?",
    desc: "Yes. All partners get access to a dedicated partner manager and a private support channel with priority response times.",
  },
  {
    title: "How do I track my referrals and earnings?",
    desc: "You'll have access to a real-time partner dashboard showing clicks, conversions, and earnings updated daily.",
  },
  {
    title: "Are there performance bonuses available?",
    desc: "Yes. Top-performing partners are eligible for quarterly bonuses, co-marketing opportunities, and exclusive perks.",
  },
];

const col1 = faqs.slice(0, 5);
const col2 = faqs.slice(5, 10);

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? null : i);

 const Item = ({ faq, index }) => {
  const isOpen = open === index;

  return (
    <div
      onClick={() => toggle(index)}
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        padding: "16px 0",
        cursor: "pointer",
      }}
    >
      {/* Title Row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px"
      }}>
        <strong style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
          lineHeight: "1.45",
          flex: 1
        }}>
          {faq.title}
        </strong>

        {/* New Icon */}
        <span style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#c9a87c",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease, color 0.3s ease",
        }}>
       <IoMdAdd />


        </span>
      </div>

      {/* Smooth Content */}
      <div style={{
        maxHeight: isOpen ? "200px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s ease, opacity 0.3s ease",
        opacity: isOpen ? 1 : 0,
      }}>
        <p style={{
          margin: "12px 0 0 0",
          fontSize: "13px",
          color: "#555",
          lineHeight: "1.75",
          fontFamily: "sans-serif",
        }}>
          <span style={{
            color: "#c9a87c",
            fontWeight: "700",
            marginRight: "4px"
          }}>
            Ans.
          </span>
          {faq.desc}
        </p>
      </div>
    </div>
  );
};

  return (
    <section style={{
      background: "#f5f0e8",
      padding: "80px 40px",
      fontFamily: "Georgia, serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "clamp(120px, 20vw, 220px)", fontWeight: "900",
        color: "rgba(0,0,0,0.04)", fontFamily: "Georgia, serif",
        pointerEvents: "none", userSelect: "none", lineHeight: 1,
        whiteSpace: "nowrap", zIndex: 0,
      }}>
        FAQ
      </div>

      {/* Card */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1200px", margin: "0 auto",
        background: "rgba(255,255,255,0.7)",
        borderRadius: "2px", padding: "52px",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.07)",
      }}>

        {/* Heading */}
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(22px, 3vw, 34px)", fontWeight: "700",
          color: "#1a1a1a", margin: "0 0 40px",
          fontFamily: "sans-serif", letterSpacing: "-0.3px",
        }}>
          You have questions?<br />We have answers!
        </h2>


        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 32px", alignItems: "start" }}>

          <div>
            {col1.map((faq, i) => <Item key={i} faq={faq} index={i} />)}
          </div>

      
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px",
          }}>
            <img
              src={faqImg}
              alt="FAQ"
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "cover",
                borderRadius: "1px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
          </div>


          <div>
            {col2.map((faq, i) => <Item key={i + 5} faq={faq} index={i + 5} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
