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
    >
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
          background: "#FFFFFF",
          boxShadow: "none",
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
            color: "#3F5148",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Два сердца
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
                color: "#3F5148",
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
              color: "#3F5148",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "400",
            }}
          >
            &
          </div>

          {/* Енлик */}
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
                color: "#3F5148",
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
              color: "#3F5148",
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
              color: "#3F5148",
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
            background: "#3F5148",
          }}
        />
      </div>
    </section>
  );
}

export default Couple;
