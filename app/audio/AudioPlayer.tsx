"use client";
import { PauseIcon, PlayIcon } from "lucide-react";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Duration = {
  minutes: number;
  seconds: number;
};

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaybackLocation, setCurrentPlaybackLocation] = useState(0);
  const [duration, setDuration] = useState<Duration | null>(null);

  function handlePlay() {
    audioRef.current?.play();
    setIsPlaying(true);
  }

  function handlePause() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function handleTimeUpdate(e: SyntheticEvent<HTMLAudioElement, Event>) {
    console.log("handling time update");

    setCurrentPlaybackLocation(e.currentTarget.currentTime);
  }

  function handleChangePlaybackLocation(e: ChangeEvent<HTMLInputElement>) {
    if (audioRef.current === null) return;
    const intValue = parseInt(e.target.value);
    audioRef.current.currentTime = intValue;
    setCurrentPlaybackLocation(intValue);
  }

  useEffect(() => {
    if (audioRef.current === null) return;
    const minutes = Math.floor(audioRef.current.duration / 60);
    const seconds = Math.floor(audioRef.current.duration % 60);
    setDuration({ minutes, seconds });
  }, [audioRef]);

  return (
    <div className="flex flex-row  rounded-lg bg-slate-50  p-8">
      <audio
        onEnded={handlePause}
        onTimeUpdate={handleTimeUpdate}
        ref={audioRef}
        src={src}
      />
      {isPlaying ? (
        <button onClick={handlePause}>
          <PauseIcon size={20} fill="black" />
        </button>
      ) : (
        <button onClick={handlePlay}>
          <PlayIcon size={20} fill="black" />
        </button>
      )}
      <span>
        {Math.floor(audioRef.current?.currentTime)} /{duration?.minutes}:
        {duration?.seconds}
      </span>
      <input
        type="range"
        min="0"
        max={audioRef.current?.duration}
        value={currentPlaybackLocation}
        onChange={handleChangePlaybackLocation}
        step={1}
      />
    </div>
  );
}
