import { useEffect, useState } from "react";
import envelopeImage from "../../images/envelope.png";
import MusicPlayer from "../MusicPlayer";

function Envelope() {
  const [opened, setOpened] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const openInvitation = () => {
    if (opened) return;

    setOpened(true);
    setMusicStarted(true);
  };

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    let startY = 0;

    const handleWheel = (e) => {
      if (!opened && e.deltaY > 0) {
        openInvitation();
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;

      if (!opened && startY - currentY > 40) {
        openInvitation();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [opened]);

  return (
    <>
      <MusicPlayer play={musicStarted} />

      {!opened && (
        <section
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden py-10"
          style={{
            background: "#49432C",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(197, 180, 119, 0.16) 0%, rgba(73, 67, 44, 0) 62%)",
            }}
          />

          <button
            type="button"
            onClick={openInvitation}
            className="relative z-10 cursor-pointer transition-transform duration-500 hover:scale-105"
            aria-label="Открыть приглашение"
          >
            <img
              src={envelopeImage}
              alt="Конверт"
              className="h-[430px] w-[340px] select-none object-contain drop-shadow-[0_25px_45px_rgba(63,27,20,0.45)] sm:h-[520px] sm:w-[460px] md:h-[620px] md:w-[600px] lg:h-[680px] lg:w-[700px] xl:h-[740px] xl:w-[760px]"
              draggable="false"
            />
          </button>

          <div className="absolute bottom-[10%] left-1/2 z-20 w-full -translate-x-1/2 px-4 text-center">
            <div className="mx-auto mb-4 h-px w-20 bg-[#C5B477]" />

            <p
              className="text-sm tracking-[0.2em] text-[#C5B477] sm:text-base sm:tracking-[0.3em] md:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Нажмите, чтобы открыть приглашение
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Envelope;
