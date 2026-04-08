import Navbar from "../components/Navbar";
import { Check, Headphones, Users } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    bg: "#F6F3F3",
    border: false,
    popular: false,
    buttonStyle: "outline" as const,
    buttonLabel: "Start Listening",
    features: [
      { text: "Standard Audio Quality", active: true },
      { text: "Ad-supported Playback", active: true },
      { text: "Offline Downloads", active: false },
    ],
  },
  {
    name: "Standard",
    price: "$9.99",
    period: "/month",
    bg: "#FFFFFF",
    border: true,
    popular: true,
    buttonStyle: "filled" as const,
    buttonLabel: "Choose Plan",
    features: [
      { text: "High-Fidelity Audio (320kbps)", active: true },
      { text: "Ad-Free Experience", active: true },
      { text: "Unlimited Offline Downloads", active: true },
      { text: "Exclusive Vault Releases", active: true },
    ],
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    bg: "#F6F3F3",
    border: false,
    popular: false,
    buttonStyle: "outline" as const,
    buttonLabel: "Choose Plan",
    features: [
      { text: "Lossless Spatial Audio", active: true },
      { text: "Master Quality Authenticated", active: true },
      { text: "Up to 6 Family Members", active: true },
      { text: "Early Ticket Access", active: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div style={{ backgroundColor: "#FCF9F9", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 text-center max-w-[800px] mx-auto px-8">
        <span
          style={{
            fontWeight: 900,
            fontSize: 10,
            letterSpacing: 2,
            color: "#A43073",
            textTransform: "uppercase",
          }}
        >
          MEMBERSHIP
        </span>
        <h1
          className="mt-3"
          style={{
            fontWeight: 800,
            fontSize: 72,
            lineHeight: "72px",
            letterSpacing: -3.6,
            color: "#1B1B1C",
          }}
        >
          Invest in Sound.
        </h1>
        <p
          className="mt-6"
          style={{ fontSize: 18, color: "#4D4545", lineHeight: "28px" }}
        >
          Choose the plan that fits your listening style. Upgrade anytime to unlock the full vault experience.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-[1080px] mx-auto px-8 flex gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 relative p-8 flex flex-col"
            style={{
              backgroundColor: plan.bg,
              borderRadius: 32,
              border: plan.border ? "2px solid #A43073" : "none",
              boxShadow: plan.border
                ? "0 8px 40px rgba(164,48,115,0.1)"
                : "none",
            }}
          >
            {plan.popular && (
              <span
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full"
                style={{
                  backgroundColor: "#A43073",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                MOST POPULAR
              </span>
            )}

            <h3
              className="mb-4"
              style={{ fontSize: 24, fontWeight: 700, color: "#545F73" }}
            >
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span
                style={{ fontSize: 48, fontWeight: 900, color: "#1B1B1C", letterSpacing: -2 }}
              >
                {plan.price}
              </span>
              <span style={{ fontSize: 16, color: "#7F7575" }}>{plan.period}</span>
            </div>

            <div className="flex flex-col gap-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <Check
                    size={16}
                    color={plan.border ? "#A43073" : "#4D4545"}
                    style={{ opacity: feature.active ? 1 : 0.4 }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color: plan.border ? "#1B1B1C" : "#4D4545",
                      fontWeight: plan.border ? 500 : 400,
                      opacity: feature.active ? 1 : 0.4,
                      textDecoration: feature.active ? "none" : "line-through",
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="w-full py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]"
              style={
                plan.buttonStyle === "filled"
                  ? {
                      backgroundColor: "#545F73",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 16px rgba(84,95,115,0.3)",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#545F73",
                      border: "1px solid rgba(208,196,196,0.3)",
                    }
              }
            >
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>

      {/* Beyond Section */}
      <div className="max-w-[1080px] mx-auto px-8 py-24">
        <div className="flex gap-12 items-center">
          {/* Image */}
          <div
            className="flex-1 h-[400px] relative overflow-hidden"
            style={{ borderRadius: 32 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(164,48,115,0.1) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2
              style={{
                fontWeight: 800,
                fontSize: 30,
                letterSpacing: -0.9,
                color: "#1B1B1C",
              }}
            >
              Beyond just a stream, it's an archive.
            </h2>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#FDF2F2" }}
                >
                  <Headphones size={20} color="#A43073" />
                </div>
                <div>
                  <h4
                    style={{ fontSize: 16, fontWeight: 700, color: "#1B1B1C" }}
                  >
                    Lossless Precision
                  </h4>
                  <p
                    className="mt-1"
                    style={{ fontSize: 14, color: "#4D4545", lineHeight: "23px" }}
                  >
                    Experience every note as the artist intended, with studio-quality lossless audio streaming.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#FDF2F2" }}
                >
                  <Users size={20} color="#A43073" />
                </div>
                <div>
                  <h4
                    style={{ fontSize: 16, fontWeight: 700, color: "#1B1B1C" }}
                  >
                    Human Curation
                  </h4>
                  <p
                    className="mt-1"
                    style={{ fontSize: 14, color: "#4D4545", lineHeight: "23px" }}
                  >
                    No algorithms. Real curators handpick every playlist and recommendation just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-12 text-center"
        style={{ borderTop: "1px solid rgba(208,196,196,0.3)" }}
      >
        <p style={{ fontSize: 12, color: "#7F7575" }}>
          © 2026 Sonic Atelier. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Pricing;
