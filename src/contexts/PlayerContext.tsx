import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from "react";
import type { Track } from "@/data/musicData";

interface PlayerContextType {
  // State
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;       // 0-100
  currentTime: number;    // seconds
  duration: number;       // seconds
  volume: number;         // 0-100
  queue: Track[];
  queueIndex: number;
  shuffle: boolean;
  repeat: "off" | "all" | "one";
  liked: Set<string>;     // track IDs

  // Actions
  playTrack: (track: Track, trackList?: Track[]) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (percent: number) => void;
  setVolume: (vol: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  toggleLike: (trackId: string) => void;
  addToQueue: (track: Track) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(70);
  const [queue, setQueue] = useState<Track[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<"off" | "all" | "one">("off");
  const [liked, setLiked] = useState<Set<string>>(new Set());

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onEnded = () => {
      handleTrackEnd();
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, []);

  const handleTrackEnd = useCallback(() => {
    if (repeat === "one") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }

    setQueueIndex((prev) => {
      const nextIdx = prev + 1;
      if (nextIdx < queue.length) {
        const nextTrack = queue[nextIdx];
        setCurrentTrack(nextTrack);
        if (audioRef.current) {
          audioRef.current.src = nextTrack.audioUrl;
          audioRef.current.play();
          setIsPlaying(true);
        }
        return nextIdx;
      } else if (repeat === "all" && queue.length > 0) {
        const firstTrack = queue[0];
        setCurrentTrack(firstTrack);
        if (audioRef.current) {
          audioRef.current.src = firstTrack.audioUrl;
          audioRef.current.play();
          setIsPlaying(true);
        }
        return 0;
      } else {
        setIsPlaying(false);
        return prev;
      }
    });
  }, [repeat, queue]);

  // Re-attach ended handler when repeat/queue changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => handleTrackEnd();
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [handleTrackEnd]);

  const playTrack = useCallback((track: Track, trackList?: Track[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (trackList) {
      setQueue(trackList);
      const idx = trackList.findIndex((t) => t.id === track.id);
      setQueueIndex(idx >= 0 ? idx : 0);
    }

    setCurrentTrack(track);
    audio.src = track.audioUrl;
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying, currentTrack]);

  const nextTrack = useCallback(() => {
    if (queue.length === 0) return;
    let nextIdx: number;

    if (shuffle) {
      nextIdx = Math.floor(Math.random() * queue.length);
    } else {
      nextIdx = (queueIndex + 1) % queue.length;
    }

    const track = queue[nextIdx];
    setQueueIndex(nextIdx);
    setCurrentTrack(track);
    if (audioRef.current) {
      audioRef.current.src = track.audioUrl;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [queue, queueIndex, shuffle]);

  const prevTrack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // If more than 3 seconds in, restart current track
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }

    if (queue.length === 0) return;
    const prevIdx = queueIndex <= 0 ? queue.length - 1 : queueIndex - 1;
    const track = queue[prevIdx];
    setQueueIndex(prevIdx);
    setCurrentTrack(track);
    audio.src = track.audioUrl;
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, [queue, queueIndex]);

  const seekTo = useCallback((percent: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = (percent / 100) * audio.duration;
    setProgress(percent);
  }, []);

  const setVolume = useCallback((vol: number) => {
    setVolumeState(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol / 100;
    }
  }, []);

  const toggleShuffle = useCallback(() => setShuffle((s) => !s), []);

  const toggleRepeat = useCallback(() => {
    setRepeat((r) => (r === "off" ? "all" : r === "all" ? "one" : "off"));
  }, []);

  const toggleLike = useCallback((trackId: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(trackId)) next.delete(trackId);
      else next.add(trackId);
      return next;
    });
  }, []);

  const addToQueue = useCallback((track: Track) => {
    setQueue((prev) => [...prev, track]);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        currentTrack, isPlaying, progress, currentTime, duration, volume,
        queue, queueIndex, shuffle, repeat, liked,
        playTrack, togglePlay, nextTrack, prevTrack, seekTo, setVolume,
        toggleShuffle, toggleRepeat, toggleLike, addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("usePlayer must be used within a PlayerProvider");
  return context;
};

// Format seconds to "m:ss"
export const formatTime = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};
