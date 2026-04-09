import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MiniPlayer from "../components/MiniPlayer";
import { usePlayer } from "@/contexts/PlayerContext";
import { artists, getArtist, getArtistTracks, tracks as allTracks } from "@/data/musicData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MoreHorizontal, Play, Pause, Calendar, Star, ShoppingCart, CheckCircle, Share2 } from "lucide-react";
import { useState } from "react";

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

const ArtistProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { playTrack, currentTrack, isPlaying, togglePlay, toggleLike, liked } = usePlayer();
  const [subscribed, setSubscribed] = useState(false);
  const [shared, setShared] = useState(false);

  const artist = getArtist(id || "plk") || artists[0];
  const artistTracks = getArtistTracks(artist.id);

  const handlePlayAll = () => {
    if (artistTracks.length) playTrack(artistTracks[0], artistTracks);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    });
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      <Navbar />

      {/* Hero */}
      <div className="px-8 pt-24">
        <div className="relative overflow-hidden mx-auto max-w-[1280px] h-[480px] rounded-5xl">
          <img
            src={artist.image}
            alt={artist.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/1280x480/545F73/FFFFFF?text=${encodeURIComponent(artist.name)}`; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(70,52,38,0.85)] via-[rgba(70,52,38,0.3)] to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12">
            <Avatar className="w-48 h-48 border-[8px] border-background shadow-2xl mb-4">
              <AvatarImage src={artist.image} />
              <AvatarFallback className="text-4xl font-bold bg-surface-secondary">{artist.name[0]}</AvatarFallback>
            </Avatar>
            {artist.verified && (
              <>
                <Badge className="bg-rose-500 hover:bg-rose-500/90 text-white font-bold text-[10px] tracking-[2px] uppercase border-0 mb-2">
                  FEATURED ARTIST
                </Badge>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle size={14} className="text-background" />
                  <span className="text-xs text-background">Verified Vault Member</span>
                </div>
              </>
            )}
            <h1 className="font-semibold text-[72px] leading-[72px] text-surface-secondary" style={{ letterSpacing: -3.6 }}>
              {artist.name}
            </h1>
            <p className="mt-2 text-base text-background">{artist.monthlyListeners} auditeurs mensuels</p>
            <div className="flex gap-4 mt-6">
              <Button
                className={`rounded-full px-6 py-5 font-semibold text-sm gap-2 ${
                  subscribed ? "bg-rose-500 hover:bg-rose-500/90" : "bg-secondary hover:bg-secondary/90"
                } text-white`}
                onClick={() => setSubscribed(!subscribed)}
              >
                {subscribed ? "Subscribed" : "Subscribe"} <Star size={14} fill={subscribed ? "currentColor" : "none"} />
              </Button>
              <Button
                className="rounded-full px-6 py-5 bg-rose-500/85 hover:bg-rose-500/75 text-white font-semibold text-sm gap-2"
                onClick={handlePlayAll}
              >
                <Play size={14} fill="white" /> Play All
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-5 py-5 border-white/20 text-white hover:bg-white/10"
                onClick={handleShare}
              >
                <Share2 size={14} />
                {shared ? " Copied!" : " Share"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex gap-8">
        {/* Left Column */}
        <div className="flex-[6]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge className="bg-transparent text-rose-500 hover:bg-transparent px-0 font-black text-[10px] tracking-[2px] uppercase border-0">
                  LATEST RELEASES
                </Badge>
                <h2 className="mt-1 font-black text-[30px] text-slate-heading" style={{ letterSpacing: -0.9 }}>
                  Sonic Artifacts
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {artistTracks.map((track, i) => {
                const isCurrent = currentTrack?.id === track.id;
                const isTrackLiked = liked.has(track.id);

                return (
                  <div
                    key={track.id}
                    className={`flex items-center gap-5 px-6 py-4 rounded-5xl transition-all cursor-pointer ${
                      isCurrent ? "bg-rose-50" : "bg-accent/40 hover:bg-accent/60"
                    }`}
                    style={{ backdropFilter: "blur(6px)" }}
                    onClick={() => playTrack(track, artistTracks)}
                  >
                    <span className="text-sm font-black text-slate-heading/40 min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/56x56/F0EDED/7F7575?text=♪"; }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-base font-bold ${isCurrent ? "text-rose-500" : "text-slate-sub"}`}>
                        {track.title}
                      </p>
                      <p className="text-xs text-slate-body">From '{track.album}' · {track.duration}</p>
                    </div>
                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-8 h-8 rounded-full ${isTrackLiked ? "text-rose-500" : "text-slate-muted hover:text-rose-500"}`}
                        onClick={() => toggleLike(track.id)}
                      >
                        <Heart size={18} fill={isTrackLiked ? "currentColor" : "none"} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-rose-50">
                        <MoreHorizontal size={18} className="text-slate-muted" />
                      </Button>
                      <Button
                        size="icon"
                        className={`w-10 h-10 rounded-full ${isCurrent && isPlaying ? "bg-rose-500" : "bg-secondary"} hover:opacity-90`}
                        onClick={() => isCurrent ? togglePlay() : playTrack(track, artistTracks)}
                      >
                        {isCurrent && isPlaying
                          ? <Pause size={16} className="text-white" />
                          : <Play size={16} className="text-white" fill="white" />
                        }
                      </Button>
                    </div>
                  </div>
                );
              })}

              {artistTracks.length === 0 && (
                <p className="text-slate-muted text-sm py-8 text-center">No tracks available for this artist yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[3]">
          {/* Live Dates */}
          <Card className="rounded-4xl border-0 shadow-none bg-surface-secondary">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={20} className="text-rose-500" />
                <h3 className="text-2xl font-bold text-slate-sub">Live Dates</h3>
              </div>
              <div className="flex flex-col gap-5">
                {liveDates.map((date, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-[60px] h-[59px] flex flex-col items-center justify-center flex-shrink-0 bg-background rounded-5xl">
                      <span className="text-[10px] font-bold text-rose-500 uppercase">{date.month}</span>
                      <span className="text-xl font-bold text-slate-sub">{date.day}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-sub">{date.city}</p>
                      <p className="text-xs text-slate-body">{date.country}</p>
                      <span className={`text-[10px] uppercase ${date.available ? "font-bold text-rose-500" : "text-slate-muted opacity-50"}`}>
                        {date.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Merch */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-sub">Exclusives</h3>
              <span className="text-xs font-bold text-slate-body">4 Items</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {merch.map((item) => (
                <Card key={item.name} className="rounded-2xl border-0 shadow-none bg-surface-tertiary overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-[140px] object-cover" />
                    {item.limited && (
                      <Badge className="absolute top-3 right-3 bg-secondary hover:bg-secondary text-white font-bold text-[10px] border-0">
                        Limited
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <p className="text-xs font-semibold text-slate-heading">{item.name}</p>
                    <p className="text-sm font-bold text-rose-500">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 rounded-5xl text-sm font-medium text-slate-sub hover:bg-rose-50">
              Shop All Merch
            </Button>
          </div>
        </div>
      </div>

      <footer className="py-12 text-center border-t">
        <p className="text-xs text-slate-muted">© 2026 Sonic Atelier. All rights reserved.</p>
      </footer>

      <MiniPlayer />
    </div>
  );
};

export default ArtistProfile;
