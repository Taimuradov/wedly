import { useState, useEffect } from "react";
import background from "../../images/background.jpg";
import envelopeImage from "../../images/envelope.png";

function Envelope() {
  const [opened, setOpened] = useState(false);

  const scrollToInvitation = () => {
    setOpened(true);

    setTimeout(() => {
      document
        .getElementById("invitation")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Блокируем прокрутку до открытия конверта
  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  if (opened) {
    return null;
  }

  return (
    <section
      className="
        fixed
        inset-0
        z-50
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        py-10
      "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* затемнение фона */}
      <div className="absolute inset-0 bg-[#eef3ea]/60 backdrop-blur-[2px]" />

      <button
        onClick={scrollToInvitation}
        className="
    relative
    z-10
    cursor-pointer
    transition-transform
    duration-500
    hover:scale-105
  "
      >
        <img
          src={envelopeImage}
          alt="Конверт"
          className="
      w-[340px]
      sm:w-[460px]
      md:w-[600px]
      lg:w-[700px]
      xl:w-[760px]
      object-contain
      drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]
      select-none
    "
          draggable="false"
        />
      </button>

      {/* текст */}
      <div
        className="
          absolute
          bottom-[10%]
          left-1/2
          -translate-x-1/2
          z-20
          w-full
          px-4
          text-center
        "
      >
        <p
          className="
            text-sm
            sm:text-base
            md:text-xl
            tracking-[0.2em]
            sm:tracking-[0.3em]
            text-[#5c5347]
          "
        >
          Нажмите, чтобы открыть приглашение
        </p>
      </div>
    </section>
  );
}

export default Envelope;
