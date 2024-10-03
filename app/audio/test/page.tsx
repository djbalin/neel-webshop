"use client";
import AudioPlayer from "../AudioPlayer";

const AUDIO_FILE_PATHS = [
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
  "/audio/fryser.mp3",
];

export default function test() {
  return (
    <div>
      test
      <AudioPlayer src={AUDIO_FILE_PATHS[0]} />
    </div>
  );
}
