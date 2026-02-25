import { useState } from "react";
import heroImg from "../assets/images/handshake.png";
import modalImg from "../assets/images/handshake2.jpg";
import SuccessStories from "../components/home/SuccessStories";
import Brandstrip from "../components/home/Brandstrip";
import FaqSection from "../components/home/FaqSection";

function RegisterModal({ onClose, image }) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", partnerType: "", agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div style={{
        display: "flex",
        width: "100%", maxWidth: "860px",
        maxHeight: "90vh",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
      }}>

        {/* LEFT — Image side */}
        <div style={{
          flex: 1,
          position: "relative",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "36px",
        }}>
          <img src={image}
            alt=""
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5)",
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "28px", fontWeight: "700",
              color: "#d8ba95", margin: "0 0 10px",
            }}>
              Become Our Partner
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "14px", lineHeight: "1.7", margin: 0,
            }}>
              Join thousands of partners growing their business with us.
            </p>
            <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
              {[["2,400+", "Partners"], ["40%", "Commission"], ["24h", "Support"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ color: "#d8ba95", fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: "700" }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form side */}
        <div style={{
          flex: 1,
          background: "#fff",
          overflowY: "auto",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              alignSelf: "flex-end",
              background: "#f5f0e8", border: "none",
              width: "32px", height: "32px",
              borderRadius: "50%", cursor: "pointer",
              fontSize: "16px", color: "#666",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "20px",
            }}
          >✕</button>

          {submitted ? (
            <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#1a1a1a", margin: 0 }}>Thankyou!<br></br>We will contact you soon!</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.6", maxWidth: "280px", margin: 0 }}>
                Thanks {form.firstName}! Our team will reach out to <strong>{form.email}</strong> within 24 hours.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: "12px 32px", background: "#c9a87c",
                  color: "#fff", border: "none", borderRadius: "6px",
                  fontSize: "13px", fontWeight: "700", cursor: "pointer",
                  letterSpacing: "0.5px",
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <h3 style={{
                fontFamily: "Georgia, serif", fontSize: "22px",
                fontWeight: "700", color: "#1a1a1a", margin: "0 0 6px",
              }}>
                Create Your Account
              </h3>
              <p style={{ color: "#999", fontSize: "13px", margin: "0 0 24px", fontFamily: "sans-serif" }}>
                Fill in your details to get started as a partner.
              </p>

              {/* Name row */}
              <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>First Name *</label>
                  <input style={inputStyle} value={form.firstName} onChange={e => set("firstName", e.target.value)} required placeholder="John" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Last Name *</label>
                  <input style={inputStyle} value={form.lastName} onChange={e => set("lastName", e.target.value)} required placeholder="Doe" />
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Email Address *</label>
                <input style={inputStyle} type="email" value={form.email} onChange={e => set("email", e.target.value)} required placeholder="john@company.com" />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+1 234 567 8900" />
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Company Name *</label>
                <input style={inputStyle} value={form.company} onChange={e => set("company", e.target.value)} required placeholder="Your Company Ltd." />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>Partner Type *</label>
                <select style={inputStyle} value={form.partnerType} onChange={e => set("partnerType", e.target.value)} required>
                  <option value="">Select a type…</option>
                  <option>Reseller</option>
                  <option>Affiliate</option>
                  <option>Agency / Consultant</option>
                  <option>Technology / Integration</option>
                  <option>Referral</option>
                </select>
              </div>

              {/* Checkbox */}
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "24px" }}>
                <input
                  type="checkbox" id="agree"
                  checked={form.agree} onChange={e => set("agree", e.target.checked)}
                  required style={{ marginTop: "3px", accentColor: "#c9a87c", flexShrink: 0 }}
                />
                <label htmlFor="agree" style={{ fontSize: "12px", color: "#777", lineHeight: "1.6", fontFamily: "sans-serif" }}>
                  I agree to the <a href="#" style={{ color: "#c9a87c" }}>Partner Terms</a> and <a href="#" style={{ color: "#c9a87c" }}>Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" style={{
                width: "100%", padding: "14px",
                background: "#c9a87c", color: "#fff",
                border: "none", borderRadius: "8px",
                fontSize: "13px", fontWeight: "700",
                letterSpacing: "1.5px", textTransform: "uppercase",
                cursor: "pointer", fontFamily: "sans-serif",
                boxShadow: "0 4px 16px rgba(201,168,124,0.4)",
              }}>
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block", fontSize: "11px", fontWeight: "700",
  color: "#555", letterSpacing: "0.5px", marginBottom: "5px",
  fontFamily: "sans-serif", textTransform: "uppercase",
};

const inputStyle = {
  width: "100%", padding: "10px 13px",
  border: "1.5px solid #e0d8cc", borderRadius: "8px",
  fontSize: "14px", fontFamily: "sans-serif", color: "#1a1a1a",
  background: "#fafaf7", outline: "none", boxSizing: "border-box",
};

export default function Becomepartner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <section className="mt-25" style={{
        position: "relative", width: "100%", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center",
      }}>
      <img
  src={heroImg} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "brightness(0.6)",
        }} />
        <div style={{ position: "relative", zIndex: 1, padding: "60px 24px" }}>
          <h1 style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: "700", color: "#d8ba95", margin: "0 0 18px",
          }}>
            Become Our Partner
          </h1>
          <p style={{
            color: "#f0f0f0", fontSize: "16px", lineHeight: "1.7",
            maxWidth: "420px", margin: "0 auto 32px",
          }}>
            Help your customers double their inbound conversion rates and grow
            your business with new revenue streams.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              padding: "13px 36px", border: "2px solid #d8ba95",
              background: "transparent", color: "#d8ba95",
              fontSize: "13px", fontWeight: "700", letterSpacing: "2px",
              textTransform: "uppercase", borderRadius: "2px", cursor: "pointer",
            }}
          >
            Register Now
          </button>
        </div>
      </section>

      <Brandstrip />
      <SuccessStories />
      <FaqSection />

      {modalOpen && (
  <RegisterModal
    onClose={() => setModalOpen(false)}
    image={modalImg}
  />
)}
    </div>
  );
}
