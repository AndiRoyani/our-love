import { createContext, useContext, useRef, useState } from "react";
import { Howl } from "howler";
import music from "../assets/music/love.mp3";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const soundRef = useRef(
    new Howl({
      src: [music],
      loop: true,
      volume: 0.5,
    })
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (!isPlaying) {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    soundRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, play, pause }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
