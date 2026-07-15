import { useEffect, useMemo, useState } from "react";
import greenLeaves from "../../images/green leaves.png";

function Countdown() {
  const targetDate = useMemo(() => new Date("2026-09-05T12:00:00+05:00"), []);

  const calculateTime = () => {
    const now = new Date();

    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);

    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pb-40
pt-20
px-5
      "
      style={{
        background:
          "linear-gradient(180deg,#F7F3EC 0%,#F4EBDD 45%,#EFE1D1 100%)",
      }}
    >
      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          rounded-[35px]
          px-8
          py-16
          text-center
        "
        style={{
          background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
          border: "1px solid rgba(232,216,196,0.8)",
        }}
      >
        <p
          className="
            text-sm
            tracking-[0.45em]
            uppercase
            mb-6
          "
          style={{
            color: "#829889",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          До нашей встречи
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            mb-12
          "
          style={{
            color: "#54493F",
            fontFamily: "'Great Vibes', cursive",
            fontWeight: "400",
          }}
        >
          Осталось совсем немного
        </h2>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            max-w-3xl
            mx-auto
          "
        >
          {[
            {
              value: time.days,
              label: "ДНЕЙ",
            },
            {
              value: time.hours,
              label: "ЧАСОВ",
            },
            {
              value: time.minutes,
              label: "МИНУТ",
            },
            {
              value: time.seconds,
              label: "СЕКУНД",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                w-32
                h-32
                md:w-36
                md:h-36
                mx-auto
                rounded-full
                flex
                flex-col
                items-center
                justify-center
              "
              style={{
                background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
                border: "1px solid rgba(232,216,196,0.8)",
              }}
            >
              <div
                className="
                  text-5xl
                  md:text-6xl
                "
                style={{
                  color: "#53675B",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </div>

              <p
                className="
                  mt-1
                  text-xs
                  tracking-widest
                "
                style={{
                  color: "#8A7565",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-12
            text-xl
          "
          style={{
            color: "#D89A9A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          5 сентября 2026
        </div>

        <div
          className="
            mx-auto
            mt-10
            w-28
            h-[2px]
          "
          style={{
            background: "#DFA3A3",
          }}
        />
      </div>

      {/* Эвкалипт под таймером */}
      <img
        src={greenLeaves}
        alt="green leaves decoration"
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          w-[280px]
          md:w-[420px]
          opacity-90
          pointer-events-none
        "
      />
    </section>
  );
}

export default Countdown;
