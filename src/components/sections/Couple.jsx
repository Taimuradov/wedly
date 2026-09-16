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
            <div className="flex flex-col items-center justify-center text-center">
              <p
                className="text-[135px] font-light leading-[0.68] tracking-[-0.06em] text-[#F2E4BB] sm:text-[165px] md:text-[190px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                10
              </p>

              <div className="mt-7 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-[#C5B477]/70 sm:w-11" />

                <div className="h-2 w-2 rotate-45 bg-[#C5B477]" />

                <div className="h-px w-8 bg-[#C5B477]/70 sm:w-11" />
              </div>

              <p
                className="mt-5 text-xl uppercase tracking-[0.36em] text-[#C5B477] sm:text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                октября
              </p>

              <p
                className="mt-1 text-3xl font-light tracking-[0.25em] text-[#F2E4BB] sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                2026
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-3xl leading-tight text-[#F2E4BB] sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Две души
                <br />— один путь
              </p>
            </div>

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

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "rgba(20, 18, 16, 0.14)",
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
