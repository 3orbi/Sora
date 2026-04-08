import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 70% 20%, #FDF2F2 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, #F1F4FF 0%, transparent 50%), #FCF9F9",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-16 right-16"
        style={{
          width: 200,
          height: 200,
          borderRadius: 32,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop)",
          backgroundSize: "cover",
          opacity: 0.2,
        }}
      />
      <div
        className="absolute bottom-20 left-16"
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(164,48,115,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Logo */}
      <div className="text-center mb-8">
        <Link to="/">
          <h1
            style={{
              fontWeight: 900,
              fontSize: 36,
              color: "#545F73",
              letterSpacing: -1.8,
            }}
          >
            Sonic Atelier
          </h1>
        </Link>
        <p
          className="mt-1"
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#7F7575",
            textTransform: "uppercase",
          }}
        >
          THE DIGITAL GALLERY OF SOUND
        </p>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-[480px] p-12 relative z-10"
        style={{ backgroundColor: "#FDF2F2", borderRadius: 32 }}
      >
        {/* Tabs */}
        <div className="flex gap-8 mb-8">
          <button
            onClick={() => setTab("login")}
            className="pb-2"
            style={{
              fontSize: 16,
              fontWeight: tab === "login" ? 700 : 400,
              color: tab === "login" ? "#1B1B1C" : "#7F7575",
              borderBottom: tab === "login" ? "2px solid #545F73" : "2px solid transparent",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            className="pb-2"
            style={{
              fontSize: 16,
              fontWeight: tab === "register" ? 700 : 400,
              color: tab === "register" ? "#1B1B1C" : "#7F7575",
              borderBottom: tab === "register" ? "2px solid #545F73" : "2px solid transparent",
            }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {tab === "register" && (
            <div>
              <label
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#4D4545",
                  textTransform: "uppercase",
                }}
              >
                USERNAME
              </label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full mt-2 outline-none"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 9999,
                  padding: "19.5px 24px",
                  fontSize: 14,
                  color: "#1B1B1C",
                }}
              />
            </div>
          )}

          <div>
            <label
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#4D4545",
                textTransform: "uppercase",
              }}
            >
              EMAIL
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full mt-2 outline-none"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 9999,
                padding: "19.5px 24px",
                fontSize: 14,
                color: "#1B1B1C",
              }}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#4D4545",
                  textTransform: "uppercase",
                }}
              >
                PASSWORD
              </label>
              {tab === "login" && (
                <a
                  href="#"
                  style={{ fontSize: 12, fontWeight: 500, color: "#A43073" }}
                >
                  Forgot?
                </a>
              )}
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 outline-none"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 9999,
                padding: "19.5px 24px",
                fontSize: 14,
                color: "#1B1B1C",
              }}
            />
          </div>

          <button
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{
              backgroundColor: "#545F73",
              padding: "16px 24px",
            }}
          >
            {tab === "login" ? "Login" : "Register"} <ArrowRight size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(208,196,196,0.3)" }} />
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#7F7575",
              textTransform: "uppercase",
            }}
          >
            OR CONTINUE WITH
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(208,196,196,0.3)" }} />
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <button
            className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-full text-sm font-medium transition-all hover:opacity-80"
            style={{ backgroundColor: "#FFFFFF", color: "#4D4545" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-full text-sm font-medium transition-all hover:opacity-80"
            style={{ backgroundColor: "#FFFFFF", color: "#4D4545" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p style={{ fontSize: 11, color: "#7F7575", opacity: 0.5 }}>
          By continuing, you agree to Sonic Atelier's Terms of Service and Privacy Policy.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          {["Twitter", "Instagram", "YouTube"].map((social) => (
            <div
              key={social}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              style={{ backgroundColor: "#FDF2F2" }}
            >
              <span style={{ fontSize: 10, fontWeight: 600, color: "#7F7575" }}>
                {social[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
