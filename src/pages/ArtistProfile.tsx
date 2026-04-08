import Navbar from "../components/Navbar";
import { Heart, MoreHorizontal, Play, Calendar, Star, ShoppingCart, CheckCircle, Download } from "lucide-react";

const tracks = [
  { num: "01", title: "Pocahontas", from: "Grand Garçon", duration: "3:24", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=56&h=56&fit=crop" },
  { num: "02", title: "Sex Model", from: "Single Release", duration: "2:48", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=56&h=56&fit=crop" },
  { num: "03", title: "Tu dors?", from: "Grand Garçon", duration: "3:12", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=56&h=56&fit=crop" },
];

const liveDates = [
  { month: "DEC", day: "4", city: "MARSEILLE", country: "France", status: "SOLD OUT", available: false },
  { month: "DEC", day: "5", city: "Montpellier", country: "France", status: "TICKETS AVAILABLE", available: true },
  { month: "JAN", day: "6", city: "Nice", country: "France", status: "TICKETS AVAILABLE", available: true },
];

const merch = [
  { name: "Tshirt", price: "35€", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop", limited: true },
  { name: "CD", price: "25€", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop", limited: false },
  { name: "Pack CD+Pull+Tshirt", price: "70€", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&h=200&fit=crop", limited: true },
  { name: "Maillot 'Enna'+CD", price: "50€", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=200&fit=crop", limited: false },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=300&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=250&fit=crop",
];

const ArtistProfile = () => {
  return (
    <div style={{ backgroundColor: "#FCF9F9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div className="px-8 pt-24">
        <div
          className="relative overflow-hidden mx-auto"
          style={{
            borderRadius: 48,
            maxWidth: 1280,
            height: 480,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=600&fit=crop)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(70,52,38,0.8) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12">
            {/* Avatar */}
            <div
              className="w-48 h-48 rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=192&h=192&fit=crop)",
                border: "8px solid #FCF9F9",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            />
            {/* Badge */}
            <span
              className="px-4 py-1.5 rounded-full mb-2"
              style={{
                backgroundColor: "#A43073",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              FEATURED ARTIST
            </span>
            {/* Verified */}
            <div className="flex items-center gap-1.5 mb-2">
              <CheckCircle size={14} color="#FCF9F9" />
              <span style={{ fontSize: 12, color: "#FCF9F9" }}>Verified Vault Member</span>
            </div>
            {/* Name */}
            <h1
              style={{
                fontWeight: 600,
                fontSize: 72,
                letterSpacing: -3.6,
                color: "#F6F3F3",
                lineHeight: "72px",
              }}
            >
              PLK
            </h1>
            {/* Stats */}
            <p className="mt-2" style={{ fontSize: 16, color: "#FCF9F9" }}>
              6 544 546 auditeurs mensuels
            </p>
            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#545F73" }}
              >
                Subscribe <Star size={14} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "rgba(164,48,115,0.84)" }}
              >
                Buy Now <ShoppingCart size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex gap-8">
        {/* Left Column */}
        <div className="flex-[6]">
          {/* Sonic Artifacts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: 10,
                    letterSpacing: 2,
                    color: "#A43073",
                    textTransform: "uppercase",
                  }}
                >
                  LATEST RELEASES
                </span>
                <h2
                  className="mt-1"
                  style={{
                    fontWeight: 900,
                    fontSize: 30,
                    letterSpacing: -0.9,
                    color: "#1B1B1C",
                  }}
                >
                  Sonic Artifacts
                </h2>
              </div>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity"
                style={{ fontSize: 14, fontWeight: 500, color: "#545F73" }}
              >
                View Discography →
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {tracks.map((track) => (
                <div
                  key={track.num}
                  className="flex items-center gap-5 px-6 py-4 transition-all hover:scale-[1.01] cursor-pointer"
                  style={{
                    backgroundColor: "rgba(253,242,242,0.4)",
                    backdropFilter: "blur(6px)",
                    borderRadius: 48,
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 900,
                      color: "#1B1B1C",
                      opacity: 0.4,
                      minWidth: 24,
                    }}
                  >
                    {track.num}
                  </span>
                  <div
                    className="w-14 h-14 bg-cover bg-center flex-shrink-0"
                    style={{
                      borderRadius: 6,
                      backgroundImage: `url(${track.image})`,
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#545F73" }}>
                      {track.title}
                    </p>
                    <p style={{ fontSize: 12, color: "#4D4545" }}>
                      From '{track.from}' · {track.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="hover:opacity-70 transition-opacity">
                      <Heart size={18} color="#7F7575" />
                    </button>
                    <button className="hover:opacity-70 transition-opacity">
                      <MoreHorizontal size={18} color="#7F7575" />
                    </button>
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      style={{ backgroundColor: "#545F73" }}
                    >
                      <Play size={16} color="#FFFFFF" fill="#FFFFFF" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-12">
            <span
              style={{
                fontWeight: 900,
                fontSize: 10,
                letterSpacing: 2,
                color: "#A43073",
                textTransform: "uppercase",
              }}
            >
              VISUAL ARCHIVE
            </span>
            <h2
              className="mt-1 mb-6"
              style={{
                fontWeight: 900,
                fontSize: 30,
                letterSpacing: -0.9,
                color: "#1B1B1C",
              }}
            >
              Gallery
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`bg-cover bg-center transition-transform hover:scale-[1.03] cursor-pointer ${
                    i === 0 ? "col-span-2 h-[200px]" : i === 1 ? "row-span-2 h-full" : "h-[200px]"
                  }`}
                  style={{
                    borderRadius: 16,
                    backgroundImage: `url(${img})`,
                    minHeight: 150,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[3]">
          {/* Live Dates */}
          <div
            className="p-8"
            style={{ backgroundColor: "#F6F3F3", borderRadius: 32 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={20} color="#A43073" />
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#545F73" }}>
                Live Dates
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {liveDates.map((date, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-[60px] h-[59px] flex flex-col items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#FCF9F9",
                      borderRadius: 48,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#A43073",
                        textTransform: "uppercase",
                      }}
                    >
                      {date.month}
                    </span>
                    <span
                      style={{ fontSize: 20, fontWeight: 700, color: "#545F73" }}
                    >
                      {date.day}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#545F73" }}>
                      {date.city}
                    </p>
                    <p style={{ fontSize: 12, color: "#4D4545" }}>{date.country}</p>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: date.available ? 700 : 400,
                        color: date.available ? "#A43073" : "#7F7575",
                        opacity: date.available ? 1 : 0.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {date.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusives / Merch */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between mb-6">
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#545F73" }}>
                Exclusives
              </h3>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#4D4545" }}>
                4 Items
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {merch.map((item) => (
                <div
                  key={item.name}
                  className="relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.03]"
                  style={{ backgroundColor: "#F0EDED", borderRadius: 16 }}
                >
                  <div
                    className="w-full h-[140px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {item.limited && (
                    <span
                      className="absolute top-3 right-3 px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#545F73",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      Limited
                    </span>
                  )}
                  <div className="p-3">
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#1B1B1C" }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#A43073" }}>
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="w-full mt-4 py-3 text-center text-sm font-medium transition-all hover:opacity-70"
              style={{
                border: "1px solid rgba(208,196,196,0.3)",
                borderRadius: 48,
                color: "#545F73",
              }}
            >
              Shop All Merch
            </button>
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

export default ArtistProfile;
