import { useMusic } from "../context/MusicContext";

export default function MusicToggle() {
  const { isPlaying, play, pause } = useMusic();

  return (
    <button
      onClick={isPlaying ? pause : play}
      className="fixed bottom-5 right-5 bg-white text-gray-900 px-4 py-3 rounded-full shadow-2xl font-semibold hover:bg-gray-100 transition-colors"
    >
      {isPlaying ? "⏸️ Pause" : "▶️ Play"}
    </button>
  );
}