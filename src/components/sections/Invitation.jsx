import design1 from "../../assets/design/design1.png";
import design2 from "../../assets/design/design2.png";

const invitationShape = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 620' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M30 620C13 620 0 607 0 590V190C0 166 14 147 39 141C46 101 75 77 112 73C120 33 156 8 200 8C244 8 280 33 288 73C325 77 354 101 361 141C386 147 400 166 400 190V590C400 607 387 620 370 620H30Z'/%3E%3C/svg%3E")`;

function Invitation() {
  return (
    <section
      id="invitation"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#49432C] px-5 py-20"
    >
      <img
        src={design1}
        alt=""
        className="absolute left-[5px] top-[-190px] z-20 w-72 rotate-[-10deg] opacity-80 md:left-0 md:top-5 md:w-116 md:rotate-[-15deg]"
      />

      <img
        src={design2}
        alt=""
        className="absolute bottom-[-140px] right-[15px] z-20 w-64 rotate-[10deg] opacity-80 md:bottom-10 md:right-0 md:w-114 md:rotate-[15deg]"
      />

      <div className="relative z-10 w-full max-w-xl">
        <div
          className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden px-6 pb-3 pt-10 text-center md:min-h-[550px]"
          style={{
            background: "#C5B477",
            boxShadow: "0 14px 30px rgba(63, 27, 20, 0.35)",
            WebkitMaskImage: invitationShape,
            maskImage: invitationShape,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          {/* Бордовая внутренняя часть и золотая окантовка */}
          <div
            className="pointer-events-none absolute inset-[3px]"
            style={{
              background: "#5A292A",
              WebkitMaskImage: invitationShape,
              maskImage: invitationShape,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />

          <div className="relative z-10">
            <div className="mx-auto mb-4 h-px w-24 bg-[#C5B477]" />

            <div className="mb-4 text-center">
              <p
                className="text-xs uppercase tracking-[0.45em] text-[#F2E4BB] md:text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Приглашение
              </p>

              <p
                className="mt-2 text-lg font-semibold uppercase tracking-[0.3em] text-[#F2E4BB] md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                На
                <br />
                Свадьбу
              </p>
            </div>

            <div className="mt-5">
              <h2
                className="text-5xl font-normal text-[#C5B477] md:text-6xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Сергей
              </h2>

              <div
                className="my-1 text-4xl text-[#C5B477]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                и
              </div>

              <h2
                className="text-4xl font-normal text-[#C5B477] md:text-5xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Мария
              </h2>
            </div>

            <p
              className="mx-auto mt-5 max-w-[310px] text-base leading-relaxed text-[#F2E4BB] md:text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              «Приглашаем вас разделить с нами радость этого дня и стать частью
              нашей истории».
            </p>

            <div className="mx-auto mt-3 h-px w-24 bg-[#C5B477]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
