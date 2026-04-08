import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(253,242,242,0.7)",
      }}
    >
      <Link
        to="/"
        className="select-none"
        style={{
          fontWeight: 900,
          fontSize: 24,
          letterSpacing: -1.2,
          color: "#545F73",
        }}
      >
        Sonic Atelier
      </Link>

      <div className="flex items-center gap-8">
        {[
          { label: "Home", path: "/" },
          { label: "Discover", path: "/discover" },
          { label: "Pricing", path: "/pricing" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: -0.35,
              color: isActive(link.path) ? "#1B1B1C" : "#4D4545",
            }}
            className="hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:opacity-70 transition-opacity">
          <Search size={18} color="#4D4545" />
        </button>
        <Link to="/login">
          <div
            className="w-9 h-9 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop)",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
