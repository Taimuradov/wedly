import eucalyptusTop from "../../images/eucalyptus-top-left.png";
import greenLeavesFrame from "../../images/Green leaves-Photoroom.png";

function Invitation() {
  return (
    <section
      id="invitation"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        py-12
        px-5
      "
      style={{
        background:
          "linear-gradient(135deg, #5F786B 0%, #7F998A 45%, #A7B9AA 100%)",
      }}
    >
      {/* Эвкалипт слева сверху */}
      <img
        src={eucalyptusTop}
        alt="eucalyptus decoration"
        className="
          absolute
          top-[-40px]
          left-[-40px]
          w-[450px]
          md:w-[650px]
          opacity-90
          pointer-events-none
        "
      />

      {/* Главный контейнер */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-lg
        "
      >
        {/* РАМКА GREEN LEAVES */}
        <img
          src={greenLeavesFrame}
          alt="green leaves frame"
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[85%]
            h-[80%]
            object-cover
            scale-150
            z-20
            pointer-events-none
          "
        />

        {/* Лист приглашения */}
        <div
          className="
            relative
            z-10
            w-full
            min-h-[620px]
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
            pt-20
            pb-12
            rounded-[25px]
          "
          style={{
            background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",
            border: "1px solid rgba(232,216,196,0.8)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
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
              background: "#DFA3A3",
            }}
          />

          {/* Заголовок */}
          <p
            className="
              text-xs
              md:text-sm
              tracking-[0.45em]
              uppercase
              mb-5
            "
            style={{
              color: "#829889",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Приглашение
          </p>

          <h1
            className="
              text-6xl md:text-8xl
              leading-none
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#54493F",
              fontWeight: "400",
            }}
          >
            Венчание
          </h1>

          {/* Имена */}
          <div className="mt-7">
            <h2
              className="
                text-6xl md:text-7xl
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#53675B",
                fontWeight: "400",
              }}
            >
              Игнат
            </h2>

            <div
              className="
                my-1
                text-3xl
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#D89A9A",
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
                color: "#53675B",
                fontWeight: "400",
              }}
            >
              Енлик
            </h2>
          </div>

          {/* Дата */}
          <div
            className="
              mt-7
              text-base
              md:text-lg
              tracking-[0.3em]
            "
            style={{
              color: "#8A7565",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            5 сентября 2026
          </div>

          {/* Линия */}
          <div
            className="
              my-6
              w-28
              h-px
            "
            style={{
              background: "#DFA3A3",
            }}
          />

          {/* Нижняя линия */}
          <div
            className="
              w-24
              h-[2px]
              mt-8
            "
            style={{
              background: "#DFA3A3",
            }}
          />
        </div>
      </div>

      {/* Плавный переход к Couple */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-64
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(238,243,234,0.35) 45%, #EEF3EA 100%)",
        }}
      />
    </section>
  );
}

export default Invitation;
