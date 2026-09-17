import { useEffect, useRef } from "react";

import weddingMusic from "../assets/music/wedding.mp3";

function MusicPlayer({ play }) {
  const audioRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const clearFade = () => {
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const startFadeOut = () => {
    const audio = audioRef.current;

    if (!audio) return;

    clearFade();

    fadeTimeoutRef.current = setTimeout(() => {
      let volume = audio.volume;

      fadeIntervalRef.current = setInterval(() => {
        volume -= 0.02;

        if (volume <= 0) {
          audio.volume = 0;
          audio.pause();

          clearFade();
        } else {
          audio.volume = volume;
        }
      }, 200);
    }, 120000);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else if (play) {
        audio.play().catch((error) => {
          console.log("Музыка не возобновилась:", error);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [play]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    clearFade();

    if (play) {
      audio.volume = 0.4;

      audio
        .play()
        .then(() => {
          startFadeOut();
        })
        .catch((error) => {
          console.log("Музыка не запустилась:", error);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      clearFade();
    };
  }, [play]);

  useEffect(() => {
    return () => {
      clearFade();

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return <audio ref={audioRef} src={weddingMusic} loop />;
}

export default MusicPlayer;
