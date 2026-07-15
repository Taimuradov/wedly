import { useRef } from "react";

import weddingMusic from "../assets/music/wedding.mp3";

function MusicPlayer({ play }) {
  const audioRef = useRef(null);

  const startMusic = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.4;

    try {
      await audioRef.current.play();

      // Через 2 минуты начинаем затихание
      setTimeout(() => {
        let volume = 0.4;

        const fadeOut = setInterval(() => {
          volume -= 0.02;

          if (volume <= 0) {
            audioRef.current.pause();
            clearInterval(fadeOut);
          } else {
            audioRef.current.volume = volume;
          }
        }, 200);
      }, 120000);
    } catch (error) {
      console.log("Музыка не запустилась:", error);
    }
  };

  if (play) {
    startMusic();
  }

  return <audio ref={audioRef} src={weddingMusic} loop />;
}

export default MusicPlayer;
