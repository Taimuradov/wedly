import { useState, useEffect } from "react";
import background from "../../images/background.jpg";
import waxSeal from "../../images/wax-seal.png";

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
          w-[80%]
          max-w-[780px]
          aspect-[1.7/1]
          cursor-pointer
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      >
        {/* тень конверта */}
        <div
          className="
            absolute
            -inset-10
            bg-black/30
            blur-[70px]
            rounded-3xl
          "
        />

        {/* конверт */}
        <div
          className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-xl
            shadow-2xl
            border
            border-[#ded8cc]
          "
          style={{
            background: "linear-gradient(135deg,#ffffff 0%,#f4f1eb 100%)",
          }}
        >
          {/* левая складка */}
          <div
            className="
              absolute
              left-0
              top-0
              w-[55%]
              h-full
              z-10
            "
            style={{
              background: "linear-gradient(to right,#f2eee7,#ffffff)",
              clipPath: "polygon(0 0,100% 50%,0 100%)",
            }}
          />

          {/* правая складка */}
          <div
            className="
              absolute
              right-0
              top-0
              w-[55%]
              h-full
              z-10
            "
            style={{
              background: "linear-gradient(to left,#f2eee7,#ffffff)",
              clipPath: "polygon(100% 0,0 50%,100% 100%)",
            }}
          />

          {/* нижний клапан */}
          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[65%]
              z-20
            "
            style={{
              background: "linear-gradient(to top,#e8e2d8,#ffffff)",
              clipPath: "polygon(0 100%,50% 0,100% 100%)",
            }}
          />

          {/* верхний клапан */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-[60%]
              z-30
            "
            style={{
              background: "linear-gradient(145deg,#ffffff,#ebe5dc)",
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
          />

          {/* восковая печать */}
          <div
            className="
              absolute
              top-[46%]
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50
              w-[16%]
              aspect-square
              max-w-[140px]
              min-w-[70px]
            "
          >
            <img
              src={waxSeal}
              alt="wax seal"
              className="
                w-full
                h-full
                object-contain
                drop-shadow-xl
              "
            />
          </div>
        </div>
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
