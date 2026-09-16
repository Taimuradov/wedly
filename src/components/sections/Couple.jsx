import photo1 from "../../assets/gallery/photo1.jpg";
import photo2 from "../../assets/gallery/photo2.jpg";
import flo from "../../assets/design/flo.png";

function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-[#5A292A] px-5 py-12 md:py-16"
    >
      <div
        className="relative mx-auto max-w-3xl overflow-visible px-5 py-8 sm:px-8 md:px-12 md:py-10"
        style={{
          background: "#49432C",
          border: "1px solid #C5B477",
          borderRadius: "30px",
          boxShadow: "0 18px 35px rgba(63, 27, 20, 0.32)",
        }}
      >
        {/* Декоративный цветок сверху справа */}
        <img
          src={flo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-18px] top-[-58px] z-30 w-[120px] rotate-[8deg] object-contain sm:right-[-25px] sm:top-[-70px] sm:w-[155px] md:right-[-35px] md:top-[-85px] md:w-[190px]"
        />

        <div
          className="pointer-events-none absolute inset-3"
          style={{
            border: "1px solid rgba(197, 180, 119, 0.65)",
            borderRadius: "22px",
          }}
        />

        <div className="relative z-10">
          <p
            className="mb-1 text-center text-xs uppercase tracking-[0.4em] text-[#F2E4BB]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Наша свадьба
          </p>

          <h2
            className="mb-7 text-center text-5xl text-[#F2E4BB] md:text-7xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Начало навсегда
          </h2>

          <div className="grid grid-cols-2 items-center gap-5 sm:gap-8">
            {/* Левая фотография */}
            <div
              className="relative z-10 -rotate-3"
              style={{
                border: "1px solid #C5B477",
                borderRadius: "10px",
                boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
              }}
            >
              <img
                src={photo1}
                alt="Момент нашей истории"
                className="aspect-square w-full rotate-[5deg] scale-[0.96] object-cover"
                style={{
                  border: "1px solid #C5B477",
                  borderRadius: "5px",
                }}
              />
            </div>

            {/* Дата */}
            <div className="text-center">
              <p
                className="text-6xl leading-[0.85] text-[#F2E4BB] sm:text-7xl md:text-8xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                10
              </p>

              <p
                className="mt-3 text-3xl uppercase tracking-[0.1em] text-[#F2E4BB] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                октября
              </p>

              <p
                className="mt-1 text-4xl text-[#F2E4BB] sm:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2026
              </p>
            </div>

            {/* Текст */}
            <div className="text-center">
              <p
                className="text-3xl leading-tight text-[#F2E4BB] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Две души
                <br />— один путь
              </p>
            </div>

            {/* Правая фотография */}
            <div
              className="relative z-10 rotate-3"
              style={{
                border: "1px solid #C5B477",
                borderRadius: "10px",
                boxShadow: "0 10px 18px rgba(63, 27, 20, 0.28)",
              }}
            >
              <img
                src={photo2}
                alt="Наша любовь"
                className="aspect-square w-full -rotate-[5deg] scale-[0.96] object-cover"
                style={{
                  border: "1px solid #C5B477",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>

          <div className="mx-auto mt-8 h-px w-20 bg-[#C5B477]" />

          <p
            className="mx-auto mt-6 max-w-xl text-center text-base italic leading-relaxed text-[#F2E4BB] md:text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            «И нитка, втрое скрученная, нескоро порвётся.»
          </p>

          <p
            className="mt-2 text-center text-sm text-[#F2E4BB]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Екклесиаст 4:12
          </p>
        </div>
      </div>
    </section>
  );
}

export default Couple;
