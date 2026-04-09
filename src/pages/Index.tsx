import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MiniPlayer from "../components/MiniPlayer";
import { usePlayer } from "@/contexts/PlayerContext";
import { artists, tracks, playlists, getArtistTracks, getPlaylistTracks } from "@/data/musicData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Plus, Play } from "lucide-react";

const trendingArtists = [
  artists.find((a) => a.id === "plk")!,
  artists.find((a) => a.id === "raye")!,
  artists.find((a) => a.id === "kanye")!,
  artists.find((a) => a.id === "pnl")!,
  artists.find((a) => a.id === "naika")!,
];

const discoveryArtists = [
  { ...artists.find((a) => a.id === "kaytranada")!, label: "New Release" },
  { ...artists.find((a) => a.id === "josman")!, label: "Featured" },
  { ...artists.find((a) => a.id === "daftpunk")!, label: "Editor's Choice" },
];

const latestReleases = [
  { track: tracks.find((t) => t.id === "t4")!, artistName: "RAYE", album: "My 21st Century Blues" },
  { track: tracks.find((t) => t.id === "t1")!, artistName: "PLK", album: "Grand Garçon" },
  { track: tracks.find((t) => t.id === "t18")!, artistName: "Rihanna", album: "Unapologetic" },
  { track: tracks.find((t) => t.id === "t16")!, artistName: "Stromae", album: "Cheese" },
];

const suggestedArtistsList = [
  artists.find((a) => a.id === "jcole")!,
  artists.find((a) => a.id === "tellier")!,
  artists.find((a) => a.id === "kendrick")!,
];

const genres = ["All Genres", "Ambient", "Neo-Classical", "Synthwave", "Lo-fi", "Experimental"];

const Index = () => {
  const { playTrack } = usePlayer();
  const [activeGenre, setActiveGenre] = useState(0);
  const [followed, setFollowed] = useState<Set<string>>(new Set());

  const toggleFollow = (id: string) => {
    setFollowed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      <Navbar />

      {/* Hero Section */}
      <div className="px-8 pt-24">
        <div className="relative overflow-hidden mx-auto max-w-[1280px] h-[520px] rounded-5xl bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1400&h=600&fit=crop"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 flex flex-col justify-center h-full px-16 max-w-[800px]">
            <h1 className="font-black text-[72px] leading-[72px] text-white" style={{ letterSpacing: -3.6 }}>
              Unlock Exclusive MUSIC, Merch & Moments
            </h1>
            <p className="mt-6 text-xl text-[#D8E3FB] leading-[30px]">
              The Digital Gallery of Sound. Curating the finest auditory experiences for the modern collector.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/pricing">
                <Button className="rounded-full px-8 py-6 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm">
                  Join Now
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-semibold text-sm text-white border-white/20 hover:bg-white/10"
                style={{ backgroundColor: "rgba(252,249,249,0.1)", backdropFilter: "blur(8px)" }}
                onClick={() => {
                  const allTracks = tracks.slice(0, 10);
                  playTrack(allTracks[0], allTracks);
                }}
              >
                <Play size={14} className="mr-1" /> Explore Vault
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Artists */}
      <section className="bg-surface-secondary mt-12 py-12">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-black text-[10px] tracking-[2px] uppercase border-0">
                CURATION
              </Badge>
              <h2 className="mt-1 font-black text-4xl text-slate-heading" style={{ letterSpacing: -1.8 }}>
                Trending Artists
              </h2>
            </div>
            <Button variant="ghost" className="text-slate-sub text-sm font-medium gap-1 hover:bg-rose-50">
              View Gallery <ArrowRight size={14} />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {trendingArtists.map((artist) => (
              <Link to={`/artist/${artist.id}`} key={artist.id} className="flex-shrink-0 group cursor-pointer">
                <div className="relative w-[256px] h-[256px] rounded-4xl overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-[1.05]"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/256x256/545F73/FFFFFF?text=${encodeURIComponent(artist.name)}`; }}
                  />
                  {/* Play button on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button
                      size="icon"
                      className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-heading opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        const artistTracks = getArtistTracks(artist.id);
                        if (artistTracks.length) playTrack(artistTracks[0], artistTracks);
                      }}
                    >
                      <Play size={20} fill="currentColor" />
                    </Button>
                  </div>
                </div>
                <p className="mt-3 text-[10px] font-bold tracking-[2px] text-slate-muted uppercase">{artist.genre}</p>
                <p className="text-xl font-bold text-slate-heading" style={{ letterSpacing: -0.5 }}>{artist.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery & Genres */}
      <section className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="flex gap-12">
          <div className="flex-1">
            <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-black text-[10px] tracking-[2px] uppercase border-0">
              EXPLORE
            </Badge>
            <h2 className="mt-1 font-black text-4xl text-slate-heading" style={{ letterSpacing: -1.8 }}>
              Discovery
            </h2>
            <p className="mt-4 max-w-md text-base leading-[26px] text-slate-body">
              Explore a curated selection of artists across genres. From ambient soundscapes to experimental beats, find your next obsession.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {genres.map((genre, i) => (
                <Button
                  key={genre}
                  className={`rounded-full text-sm font-medium transition-all hover:scale-105 ${
                    activeGenre === i
                      ? "bg-secondary hover:bg-secondary/90 text-white"
                      : "bg-rose-50 text-slate-muted hover:bg-rose-100"
                  }`}
                  onClick={() => setActiveGenre(i)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {discoveryArtists.map((artist) => (
              <Link to={`/artist/${artist.id}`} key={artist.id} className="relative w-[200px] h-[280px] overflow-hidden rounded-4xl cursor-pointer group">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/200x280/545F73/FFFFFF?text=${encodeURIComponent(artist.name)}`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold tracking-[2px] text-rose-100 uppercase">{artist.label}</span>
                  <p className="mt-1 text-xl font-bold text-white" style={{ letterSpacing: -0.5 }}>{artist.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="bg-surface-tertiary py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12">
            <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-black text-[10px] tracking-[2px] uppercase border-0">
              LATEST RELEASES
            </Badge>
            <h2 className="mt-2 font-black text-4xl text-slate-heading" style={{ letterSpacing: -1.8 }}>
              Latest Releases
            </h2>
            <p className="mt-3 text-base text-slate-body leading-[26px]">Fresh drops from the vault.</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {latestReleases.map(({ track, artistName, album }) => (
              <Card
                key={track.id}
                className="rounded-4xl border-0 shadow-none hover:scale-[1.03] transition-transform cursor-pointer overflow-hidden group"
                onClick={() => playTrack(track, tracks)}
              >
                <CardContent className="p-4">
                  <div className="relative">
                    <img
                      src={track.cover}
                      alt={album}
                      className="w-full aspect-square object-cover rounded-md shadow-lg"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/242x242/F0EDED/7F7575?text=${encodeURIComponent(artistName)}`; }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-md flex items-center justify-center">
                      <Button
                        size="icon"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-heading opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      >
                        <Play size={18} fill="currentColor" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 text-base font-bold text-slate-heading">{artistName}</p>
                  <p className="mt-1 text-sm text-slate-body">{album}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested for You */}
      <section className="max-w-[1280px] mx-auto px-8 py-16">
        <h2 className="font-black text-[30px] text-slate-heading" style={{ letterSpacing: -0.9 }}>
          Suggested for You
        </h2>
        <div className="flex gap-4 mt-8">
          {suggestedArtistsList.map((artist) => (
            <div
              key={artist.id}
              className="flex items-center gap-4 flex-1 px-5 py-3 bg-surface-secondary rounded-full hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Link to={`/artist/${artist.id}`}>
                <Avatar className="w-14 h-14">
                  <AvatarImage src={artist.image} />
                  <AvatarFallback className="bg-surface-tertiary text-slate-muted">{artist.name[0]}</AvatarFallback>
                </Avatar>
              </Link>
              <Link to={`/artist/${artist.id}`} className="flex-1 min-w-0">
                <p className="text-base font-semibold text-slate-heading">{artist.name}</p>
                <p className="text-xs text-slate-body">{artist.genre}</p>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className={`w-8 h-8 rounded-full flex-shrink-0 ${
                  followed.has(artist.id)
                    ? "bg-rose-500 text-white hover:bg-rose-500/80"
                    : "bg-white hover:bg-white/80 text-slate-sub"
                }`}
                onClick={() => toggleFollow(artist.id)}
              >
                <Plus size={16} className={followed.has(artist.id) ? "rotate-45" : ""} />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center border-t">
        <p className="text-xs text-slate-muted">© 2026 Sonic Atelier. All rights reserved.</p>
      </footer>

      <MiniPlayer />
    </div>
  );
};

export default Index;
