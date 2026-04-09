import { usePlayer, formatTime } from "@/contexts/PlayerContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, Repeat1, Heart } from "lucide-react";

const MiniPlayer = () => {
  const {
    currentTrack, isPlaying, progress, currentTime, duration, volume,
    shuffle, repeat, liked,
    togglePlay, nextTrack, prevTrack, seekTo, setVolume,
    toggleShuffle, toggleRepeat, toggleLike,
  } = usePlayer();

  if (!currentTrack) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-4 border-t"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(208,196,196,0.3)",
        }}
      >
        <p className="text-sm text-slate-muted">Select a track to start listening</p>
      </div>
    );
  }

  const isLiked = liked.has(currentTrack.id);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-6 px-8 py-3 border-t"
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(208,196,196,0.3)",
      }}
    >
      {/* Track Info */}
      <div className="flex items-center gap-4 w-[260px] flex-shrink-0">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/48x48/F0EDED/7F7575?text=♪"; }}
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-heading truncate">{currentTrack.title}</p>
          <p className="text-xs text-slate-muted truncate">{currentTrack.artistName}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`w-8 h-8 rounded-full flex-shrink-0 ${isLiked ? "text-rose-500" : "text-slate-muted hover:text-rose-500"}`}
          onClick={() => toggleLike(currentTrack.id)}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
        </Button>
      </div>

      {/* Controls + Progress */}
      <div className="flex-1 flex flex-col items-center gap-1.5 max-w-[600px]">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 rounded-full ${shuffle ? "text-rose-500" : "text-slate-muted hover:text-slate-sub"}`}
            onClick={toggleShuffle}
          >
            <Shuffle size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-full text-slate-sub hover:text-slate-heading"
            onClick={prevTrack}
          >
            <SkipBack size={16} />
          </Button>
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-slate-sub hover:bg-slate-sub/90 text-white"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-full text-slate-sub hover:text-slate-heading"
            onClick={nextTrack}
          >
            <SkipForward size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 rounded-full ${repeat !== "off" ? "text-rose-500" : "text-slate-muted hover:text-slate-sub"}`}
            onClick={toggleRepeat}
          >
            {repeat === "one" ? <Repeat1 size={14} /> : <Repeat size={14} />}
          </Button>
        </div>
        <div className="flex items-center gap-3 w-full">
          <span className="text-[10px] text-slate-muted font-medium w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div
            className="flex-1 h-1.5 rounded-full cursor-pointer relative group bg-surface-tertiary"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = ((e.clientX - rect.left) / rect.width) * 100;
              seekTo(Math.max(0, Math.min(100, percent)));
            }}
          >
            <div
              className="h-full rounded-full bg-rose-500 transition-all relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity shadow" />
            </div>
          </div>
          <span className="text-[10px] text-slate-muted font-medium w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-[140px] flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="w-7 h-7 rounded-full text-slate-muted hover:text-slate-sub"
          onClick={() => setVolume(volume === 0 ? 70 : 0)}
        >
          {volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </Button>
        <div
          className="flex-1 h-1.5 rounded-full cursor-pointer relative group bg-surface-tertiary"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = ((e.clientX - rect.left) / rect.width) * 100;
            setVolume(Math.max(0, Math.min(100, percent)));
          }}
        >
          <div
            className="h-full rounded-full bg-slate-sub transition-all"
            style={{ width: `${volume}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
