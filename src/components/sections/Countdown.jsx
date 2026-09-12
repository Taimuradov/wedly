import { useEffect, useState } from "react";

const targetDate = new Date(2026, 9, 10, 12, 0, 0);

function calculateTime() {
  const difference = targetDate.getTime() - Date.now();

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
}

function Countdown() {
  const [time, setTime] = useState(() => calculateTime());

  useEffect(() => {
    const updateTimer = () => {
      setTime(calculateTime());
    };

    updateTimer();

    const timer = window.setInterval(updateTimer, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const timerItems = [
    { value: time.days, label: "ДНЕЙ", color: "#49432C" },
    { value: time.hours, label: "ЧАСОВ", color: "#6E6848" },
    { value: time.minutes, label: "МИНУТ", color: "#49432C" },
    { value: time.seconds, label: "СЕКУНД", color: "#6E6848" },
  ];

  const cardShape =
    "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)";

  return (
    <section className="relative overflow-hidden bg-[#5A292A] px-5 py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="relative z-10 w-full px-1 text-center sm:px-4 md:px-10">
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Совсем скоро
          </p>

          <h2
            className="mb-10 text-5xl font-normal text-[#F2E4BB] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Мы скажем друг другу «да»
          </h2>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {timerItems.map((item) => (
              <div
                key={item.label}
                className="relative mx-auto h-28 w-full max-w-[145px] sm:h-32 sm:max-w-[160px] md:h-40 md:max-w-[175px]"
                style={{
                  background: "#C5B477",
                  clipPath: cardShape,
                  boxShadow: "0 10px 22px rgba(63, 27, 20, 0.3)",
                }}
              >
                {/* Оливковая внутренняя часть */}
                <div
                  className="absolute inset-[2px]"
                  style={{
                    background: item.color,
                    clipPath: cardShape,
                  }}
                />

                {/* Тонкий золотой декор */}
                <div
                  className="pointer-events-none absolute inset-[7px]"
                  style={{
                    border: "1px solid rgba(197, 180, 119, 0.7)",
                    clipPath: cardShape,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <span className="mb-1 text-sm text-[#C5B477]">◆</span>

                  <div
                    className="text-4xl leading-none text-[#F2E4BB] sm:text-5xl md:text-6xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <p
                    className="mt-2 text-[10px] tracking-[0.2em] text-[#C5B477] sm:text-xs"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </p>

                  <span className="mt-1 text-[9px] text-[#C5B477]">◆</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 h-px w-28 bg-[#C5B477]" />
        </div>
      </div>
    </section>
  );
}

export default Countdown;
