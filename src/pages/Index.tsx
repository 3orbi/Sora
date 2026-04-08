import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Heart, Play, Plus, ArrowRight } from "lucide-react";

const trendingArtists = [
  { name: "PLK", genre: "RAP", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=256&h=256&fit=crop", id: "plk" },
  { name: "RAYE", genre: "POP", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=256&h=256&fit=crop", id: "raye" },
  { name: "Kanye West", genre: "RAP", image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=256&h=256&fit=crop", id: "kanye" },
  { name: "PEET", genre: "RAP", image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=256&h=256&fit=crop", id: "peet" },
  { name: "Naïka", genre: "INDIE POP", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop", id: "naika" },
];

const discoveryArtists = [
  { name: "KAYTRANADA", label: "New Release", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=500&fit=crop" },
  { name: "JOSMAN", label: "Featured", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=500&fit=crop" },
  { name: "SAD NIGHT DYNAMITE", label: "Editor's Choice", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=500&fit=crop" },
];

const latestReleases = [
  { artist: "RAYE", album: "THIS MUSIC MAY CONTAIN HOPE.", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=242&h=242&fit=crop" },
  { artist: "PLK", album: "Grand Garçon", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=242&h=242&fit=crop" },
  { artist: "Justine Skye", album: "CANDY", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=242&h=242&fit=crop" },
  { artist: "NeS", album: "Des pieds et de mains", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=242&h=242&fit=crop" },
];

const suggestedArtists = [
  { name: "J. Cole", genre: "RAP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop" },
  { name: "Sébastien Tellier", genre: "ECLECTRO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop" },
  { name: "Papooz", genre: "INDIE POP", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=56&h=56&fit=crop" },
];

const genres = ["All Genres", "Ambient", "Neo-Classical", "Synthwave", "Lo-fi", "Experimental"];

const Index = () => {
  return (
    <div style={{ backgroundColor: "#FCF9F9", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <div className="px-8 pt-24 pb-0">
        <div
          className="relative overflow-hidden mx-auto"
          style={{
            borderRadius: 48,
            maxWidth: 1280,
            height: 520,
            background: "#545F73",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1400&h=600&fit=crop)",
              opacity: 0.4,
            }}
          />
          <div className="relative z-10 flex flex-col justify-center h-full px-16 max-w-[800px]">
            <h1
              style={{
                fontWeight: 900,
                fontSize: 72,
                lineHeight: "72px",
                letterSpacing: -3.6,
                color: "#FFFFFF",
              }}
            >
              Unlock Exclusive MUSIC, Merch & Moments
            </h1>
            <p
              className="mt-6"
              style={{
                fontSize: 20,
                color: "#D8E3FB",
                lineHeight: "30px",
              }}
            >
              The Digital Gallery of Sound. Curating the finest auditory experiences for the modern collector.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                className="px-8 py-3 rounded-full font-semibold text-sm text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#545F73" }}
              >
                Join Now
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold text-sm text-white transition-transform hover:scale-105"
                style={{
                  backgroundColor: "rgba(252,249,249,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Explore Vault
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Artists */}
      <section style={{ backgroundColor: "#F6F3F3", padding: "48px 0", marginTop: 48 }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
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
                CURATION
              </span>
              <h2
                className="mt-1"
                style={{
                  fontWeight: 900,
                  fontSize: 36,
                  letterSpacing: -1.8,
                  color: "#1B1B1C",
                }}
              >
                Trending Artists
              </h2>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ fontSize: 14, fontWeight: 500, color: "#545F73" }}
            >
              View Gallery <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {trendingArtists.map((artist) => (
              <Link
                to={`/artist/${artist.id}`}
                key={artist.name}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div
                  className="w-[256px] h-[256px] bg-cover bg-center transition-transform group-hover:scale-[1.03]"
                  style={{
                    borderRadius: 32,
                    backgroundImage: `url(${artist.image})`,
                  }}
                />
                <p
                  className="mt-3"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "#7F7575",
                    textTransform: "uppercase",
                  }}
                >
                  {artist.genre}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1B1B1C",
                    letterSpacing: -0.5,
                  }}
                >
                  {artist.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery & Genres */}
      <section className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="flex gap-12">
          {/* Left column */}
          <div className="flex-1">
            <span
              style={{
                fontWeight: 900,
                fontSize: 10,
                letterSpacing: 2,
                color: "#A43073",
                textTransform: "uppercase",
              }}
            >
              EXPLORE
            </span>
            <h2
              className="mt-1"
              style={{
                fontWeight: 900,
                fontSize: 36,
                letterSpacing: -1.8,
                color: "#1B1B1C",
              }}
            >
              Discovery
            </h2>
            <p
              className="mt-4 max-w-md"
              style={{ fontSize: 16, lineHeight: "26px", color: "#4D4545" }}
            >
              Explore a curated selection of artists across genres. From ambient soundscapes to experimental beats, find your next obsession.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {genres.map((genre, i) => (
                <button
                  key={genre}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={
                    i === 0
                      ? { backgroundColor: "#545F73", color: "#FFFFFF" }
                      : { backgroundColor: "#FDF2F2", color: "#756E6E" }
                  }
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Right column - 3 artist cards */}
          <div className="flex gap-4">
            {discoveryArtists.map((artist) => (
              <div
                key={artist.name}
                className="relative w-[200px] h-[280px] overflow-hidden cursor-pointer group"
                style={{ borderRadius: 32 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${artist.image})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: "#FFD8E7",
                      textTransform: "uppercase",
                    }}
                  >
                    {artist.label}
                  </span>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: -0.5,
                    }}
                  >
                    {artist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section style={{ backgroundColor: "#F0EDED", padding: "64px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12">
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
              className="mt-2"
              style={{
                fontWeight: 900,
                fontSize: 36,
                letterSpacing: -1.8,
                color: "#1B1B1C",
              }}
            >
              Latest Releases
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: 16, color: "#4D4545", lineHeight: "26px" }}
            >
              Fresh drops from the vault. Discover what's new.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {latestReleases.map((release) => (
              <div
                key={release.album}
                className="p-4 transition-transform hover:scale-[1.03] cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 32,
                }}
              >
                <div
                  className="w-full aspect-square bg-cover bg-center"
                  style={{
                    borderRadius: 6,
                    backgroundImage: `url(${release.image})`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
                <p
                  className="mt-4"
                  style={{ fontSize: 16, fontWeight: 700, color: "#1B1B1C" }}
                >
                  {release.artist}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: 14, color: "#4D4545" }}
                >
                  {release.album}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested for You */}
      <section className="max-w-[1280px] mx-auto px-8 py-16">
        <h2
          style={{
            fontWeight: 900,
            fontSize: 30,
            letterSpacing: -0.9,
            color: "#1B1B1C",
          }}
        >
          Suggested for You
        </h2>
        <div className="flex gap-4 mt-8">
          {suggestedArtists.map((artist) => (
            <div
              key={artist.name}
              className="flex items-center gap-4 flex-1 px-5 py-3 transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: "#F6F3F3",
                borderRadius: 9999,
              }}
            >
              <div
                className="w-14 h-14 rounded-full bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 16, fontWeight: 600, color: "#1B1B1C" }}>
                  {artist.name}
                </p>
                <p style={{ fontSize: 12, color: "#4D4545" }}>{artist.genre}</p>
              </div>
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Plus size={16} color="#545F73" />
              </button>
            </div>
          ))}
        </div>
      </section>

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

export default Index;
