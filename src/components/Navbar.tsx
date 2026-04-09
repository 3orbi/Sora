import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, LogOut, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { artists } from "@/data/musicData";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const filteredArtists = searchQuery.trim()
    ? artists.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(253,242,242,0.7)",
      }}
    >
      <Link to="/" className="select-none font-black text-2xl text-slate-sub" style={{ letterSpacing: -1.2 }}>
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
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${
              isActive(link.path) ? "text-slate-heading" : "text-slate-body"
            }`}
            style={{ letterSpacing: -0.35 }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 relative">
        {searchOpen ? (
          <div className="relative">
            <Input
              autoFocus
              placeholder="Search artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setTimeout(() => { setSearchOpen(false); setSearchQuery(""); }, 200)}
              className="w-[220px] h-9 rounded-full bg-white border-0 pl-4 pr-8 text-sm placeholder:text-slate-placeholder focus-visible:ring-rose-500"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 w-9 h-9 rounded-full"
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
            >
              <X size={14} className="text-slate-muted" />
            </Button>
            {filteredArtists.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-lg border overflow-hidden z-50">
                {filteredArtists.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-rose-50 cursor-pointer transition-colors"
                    onMouseDown={() => { navigate(`/artist/${a.id}`); setSearchOpen(false); setSearchQuery(""); }}
                  >
                    <img
                      src={a.image}
                      alt={a.name}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/32x32/545F73/FFF?text=${a.name[0]}`; }}
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-heading">{a.name}</p>
                      <p className="text-[10px] text-slate-muted">{a.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-rose-50"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={18} className="text-slate-body" />
          </Button>
        )}

        {user ? (
          <>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-50">
                <MessageSquare size={18} className="text-slate-body" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-rose-50"
              onClick={handleSignOut}
              title="Sign out"
            >
              <LogOut size={18} className="text-slate-body" />
            </Button>
            <Avatar className="w-9 h-9">
              <AvatarFallback className="bg-rose-50 text-rose-500 text-xs font-bold">
                {user.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </>
        ) : (
          <Link to="/login">
            <Button className="rounded-full px-6 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium">
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
