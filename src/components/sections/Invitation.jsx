import photo3 from "../../assets/gallery/photo3.jpg";
import photo4 from "../../assets/gallery/photo4.jpg";

const invitationShape = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 620' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M30 620C13 620 0 607 0 590V190C0 166 14 147 39 141C46 101 75 77 112 73C120 33 156 8 200 8C244 8 280 33 288 73C325 77 354 101 361 141C386 147 400 166 400 190V590C400 607 387 620 370 620H30Z'/%3E%3C/svg%3E")`;

function Invitation() {
  return (
    <section
      id="invitation"
      className="relative flex items-center justify-center overflow-hidden bg-[#49432C] px-5 py-14 md:py-18"
    >
      <div className="relative w-full max-w-5xl -translate-y-6 md:-translate-y-8">
        {/* Левая фотография */}
        <div
          className="
            absolute
            bottom-[-50px]
            left-[-8px]
            z-20
            rotate-[-7deg]
            sm:bottom-[-55px]
            sm:left-[0]
            md:bottom-[4%]
            md:left-[2%]
            lg:left-[3%]
            xl:left-[5%]
          "
        >
          <div
            className="overflow-hidden"
            style={{
              border: "1px solid #C5B477",
              borderRadius: "10px",
              boxShadow: "0 12px 25px rgba(63, 27, 20, 0.35)",
            }}
          >
            <div
              className="h-[120px] w-[88px] overflow-hidden sm:h-[160px] sm:w-[115px] md:h-[190px] md:w-[145px]"
              style={{
                border: "1px solid #C5B477",
                borderRadius: "6px",
              }}
            >
              <img
                src={photo3}
                alt="Сиродж и Мария"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Правая фотография */}
        <div
          className="
            absolute
            right-[-8px]
            top-0
            z-20
            rotate-[7deg]
            sm:right-[0]
            sm:top-0
            md:right-[2%]
            md:top-[14%]
            lg:right-[3%]
            lg:top-[14%]
            xl:right-[5%]
            xl:top-[14%]
          "
        >
          <div
            className="overflow-hidden"
            style={{
              border: "1px solid #C5B477",
              borderRadius: "10px",
              boxShadow: "0 12px 25px rgba(63, 27, 20, 0.35)",
            }}
          >
            <div
              className="h-[120px] w-[88px] overflow-hidden sm:h-[160px] sm:w-[115px] md:h-[190px] md:w-[145px]"
              style={{
                border: "1px solid #C5B477",
                borderRadius: "6px",
              }}
            >
              <img
                src={photo4}
                alt="Сиродж и Мария"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Основная карточка */}
        <div className="relative z-10 mx-auto w-full max-w-xl">
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
                  Сиродж
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
                «Приглашаем вас разделить с нами радость этого дня и стать
                частью нашей истории».
              </p>

              <div className="mx-auto mt-3 h-px w-24 bg-[#C5B477]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
