import { ChevronDown } from "lucide-react";
import design1 from "../../assets/design/design1.png";
import design2 from "../../assets/design/design2.png";

function Invitation() {
  return (
    <section
      id="invitation"
      className="
        relative
        min-h-[100dvh]
        flex
        items-center
        justify-center
        overflow-hidden
        py-24
        px-5
      "
    >
      {/* Цветочный декор */}
{/* Верхний декор */}
<img
  src={design1}
  alt=""
  className="
    absolute
    top-[-190px]
    left-[5px]
    w-72

    md:top-5
    md:left-0
    md:w-116

    opacity-80
    z-20
    rotate-[-10deg]
    md:rotate-[-15deg]
  "
/>

{/* Нижний декор */}
<img
  src={design2}
  alt=""
  className="
    absolute
    bottom-[-140px]
    right-[15px]
    w-64

    md:bottom-10
    md:right-0
    md:w-114

    opacity-80
    z-20
    rotate-[10deg]
    md:rotate-[15deg]
  "
/>
      {/* Главный контейнер */}
      <div
        className="
    relative
    z-10
    w-full
    max-w-xl
  "
      >
        {/* Лист приглашения */}
        <div
          className="
    relative
    z-10
    w-full
    min-h-[520px]
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-6
    pt-12
    pb-10
    rounded-[25px]
  "
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(232,216,196,0.8)",
            boxShadow: "none",
          }}
        >
          {/* Верхняя линия */}
          <div
            className="
              w-24
              h-[2px]
              mb-5
            "
            style={{
              background: "#3F5148",
            }}
          />

          {/* Заголовок */}
          <div className="mb-5 text-center">
            <p
              className="
      text-xs
      md:text-sm
      uppercase
      tracking-[0.45em]
    "
              style={{
                color: "#3F5148",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Приглашение
            </p>

            <p
              className="
      mt-2
      text-xl
      md:text-2xl
      uppercase
      tracking-[0.3em]
    "
              style={{
                color: "#3F5148",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: "600",
              }}
            >
              НА
              <br />
              Венчание
            </p>
          </div>
          {/* Имена */}
          <div className="mt-7">
            <h2
              className="
                text-6xl md:text-7xl
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#3F5148",
                fontWeight: "400",
              }}
            >
              Игната
            </h2>

            <div
              className="
                my-1
                text-3xl
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#3F5148",
                fontSize: "48px",
              }}
            >
              и
            </div>

            <h2
              className="
                text-5xl
                md:text-6xl
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#3F5148",
                fontWeight: "400",
              }}
            >
              Енлик
            </h2>
          </div>

          {/* Дата */}
          <p
            className="
    mt-7
    text-lg
    md:text-xl
    leading-relaxed
    max-w-[280px]
  "
            style={{
              color: "#3F5148",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Будем рады провести этот особенный день вместе с вами
          </p>
          {/* Нижняя линия */}
          <div
            className="
              w-24
              h-[2px]
              mt-8
            "
            style={{
              background: "#3F5148",
            }}
          />
        </div>
      </div>

      {/* Подсказка прокрутки */}
      <div
        className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    z-30
    flex
    flex-col
    items-center
    animate-bounce
    pointer-events-none
  "
      >
        <span
          className="
      mb-2
      text-xs
      md:text-sm
      tracking-[0.3em]
      uppercase
    "
          style={{
            color: "#FFFFFF",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Листайте вниз
        </span>

        <ChevronDown size={34} strokeWidth={1.7} color="#FFFFFF" />
      </div>
    </section>
    
  );
}

export default Invitation;
