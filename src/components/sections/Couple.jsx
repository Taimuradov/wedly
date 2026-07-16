import eucalyptusLeavesFrame from "../../images/eucalyptus leaves.png";
import eucalyptusImageFrame from "../../images/image.png";
import ignatPhoto from "../../assets/gallery/photo5.jpg";
import enlikPhoto from "../../assets/gallery/photo6.jpg";

function Couple() {
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
          "linear-gradient(180deg,#EEF3EA 0%,#F2EFE7 35%,#F5F0E8 75%,#F7F3EC 100%)",
      }}
    >
      {/* Плавный переход сверху от Invitation */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-64
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(to bottom,rgba(238,243,234,0.8),transparent)",
        }}
      />

      {/* Главная карточка */}
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
          boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
          border: "1px solid rgba(232,216,196,0.8)",
        }}
      >
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
          Две судьбы
        </h2>

        {/* Фото блоки */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-10
          "
        >
          {/* Игнат */}
          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                relative
                w-52
                h-52
                mb-6
              "
            >
              {/* Рамка эвкалипт */}
              <img
                src={eucalyptusLeavesFrame}
                alt="eucalyptus frame"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  scale-125
                  z-10
                  pointer-events-none
                "
              />

              {/* Фото */}
              <div
                className="
                  absolute
                  inset-4
                  rounded-full
                  overflow-hidden
                "
                style={{
                  background: "#E8E0D5",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={ignatPhoto}
                  alt="Игнат"
                  className="
    w-full
    h-full
    object-cover
  "
                />
              </div>
            </div>

            <h3
              className="
    text-5xl
    md:text-6xl
  "
              style={{
                color: "#53675B",
                fontFamily: "'Great Vibes', cursive",
                fontWeight: "400",
              }}
            >
              Игнат
            </h3>
          </div>

          {/* знак */}
          <div
            className="
    text-6xl
    md:text-7xl
  "
            style={{
              color: "#D89A9A",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "400",
            }}
          >
            &
          </div>

          {/* Елкин */}
          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                relative
                w-52
                h-52
                mb-6
              "
            >
              {/* Рамка эвкалипт */}
              <img
                src={eucalyptusImageFrame}
                alt="eucalyptus frame"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  scale-125
                  z-10
                  pointer-events-none
                "
              />

              {/* Фото */}
              <div
                className="
                  absolute
                  inset-4
                  rounded-full
                  overflow-hidden
                "
                style={{
                  background: "#E8E0D5",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={enlikPhoto}
                  alt="Енлик"
                  className="
    w-full
    h-full
    object-cover
  "
                />
              </div>
            </div>

            <h3
              className="
    text-5xl
    md:text-6xl
  "
              style={{
                color: "#53675B",
                fontFamily: "'Great Vibes', cursive",
                fontWeight: "400",
              }}
            >
              Енлик
            </h3>
          </div>
        </div>

        {/* Библейский стих */}
        <div
          className="
            mt-12
            max-w-xl
            mx-auto
            px-6
          "
        >
          <p
            className="
              text-xl
              md:text-2xl
              leading-relaxed
              italic
            "
            style={{
              color: "#6B625A",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            «Итак, они уже не двое, но одна плоть; итак, что Бог сочетал, того
            человек да не разлучает»
          </p>

          <span
            className="
              block
              mt-5
              text-base
            "
            style={{
              color: "#829889",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Матфея 19:6
          </span>
        </div>

        {/* линия */}
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

      {/* Плавный переход к Countdown */}
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
            "linear-gradient(to bottom,transparent 0%,rgba(247,243,236,0.5) 50%,#F7F3EC 100%)",
        }}
      />
    </section>
  );
}

export default Couple;
