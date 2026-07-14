import { useEffect, useMemo, useState } from "react";

function Countdown() {
  const targetDate = useMemo(() => new Date("2026-09-05T11:00:00"), []);

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

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

      minutes: Math.floor((difference / (1000 * 60)) % 60),

      seconds: Math.floor((difference / 1000) % 60),
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
        py-20
        px-5
      "
      style={{
        background:
          "linear-gradient(180deg,#F7F3EC 0%,#F4EBDD 45%,#EFE1D1 100%)",
      }}
    >
      {/* Главный блок */}
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
        {/* Заголовок */}
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
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Осталось совсем немного
        </h2>

        {/* Таймер */}
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
          {/* Дни */}
          <div>
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
              {time.days}
            </div>

            <p
              className="
                mt-2
                text-sm
                tracking-widest
              "
              style={{
                color: "#8A7565",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              ДНЕЙ
            </p>
          </div>

          {/* Часы */}
          <div>
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
              {String(time.hours).padStart(2, "0")}
            </div>

            <p
              className="
                mt-2
                text-sm
                tracking-widest
              "
              style={{
                color: "#8A7565",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              ЧАСОВ
            </p>
          </div>

          {/* Минуты */}
          <div>
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
              {String(time.minutes).padStart(2, "0")}
            </div>

            <p
              className="
                mt-2
                text-sm
                tracking-widest
              "
              style={{
                color: "#8A7565",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              МИНУТ
            </p>
          </div>

          {/* Секунды */}
          <div>
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
              {String(time.seconds).padStart(2, "0")}
            </div>

            <p
              className="
                mt-2
                text-sm
                tracking-widest
              "
              style={{
                color: "#8A7565",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              СЕКУНД
            </p>
          </div>
        </div>

        {/* Дата */}
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

        {/* Линия */}
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
    </section>
  );
}

export default Countdown;
