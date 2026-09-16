function Gifts() {
  return (
    <section
      id="gifts"
      className="relative overflow-hidden bg-[#5A292A] px-5 py-16 md:py-20"
    >
      {/* Декоративные элементы */}
      <div className="pointer-events-none absolute left-1/2 top-8 h-px w-28 -translate-x-1/2 bg-[#C5B477]/70" />

      <div className="pointer-events-none absolute left-1/2 top-5 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#C5B477] bg-[#5A292A]" />

      <div className="relative mx-auto w-full max-w-2xl">
        {/* Внешняя золотая рамка */}
        <div
          className="relative p-[2px]"
          style={{
            border: "1px solid rgba(197, 180, 119, 0.65)",
            borderRadius: "18px",
            boxShadow: "0 14px 35px rgba(63, 27, 20, 0.28)",
          }}
        >
          {/* Основной зелёный блок */}
          <div
            className="relative overflow-hidden px-7 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14"
            style={{
              background: "#49432C",
              borderRadius: "16px",
            }}
          >
            {/* Внутренняя тонкая рамка */}
            <div
              className="pointer-events-none absolute inset-3"
              style={{
                border: "1px solid rgba(197, 180, 119, 0.28)",
                borderRadius: "12px",
              }}
            />

            {/* Декоративный верх */}
            <div className="relative z-10 mb-7 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#C5B477]/70 sm:w-16" />

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5B477]/70">
                <span
                  className="text-xl text-[#C5B477]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  ♡
                </span>
              </div>

              <div className="h-px w-12 bg-[#C5B477]/70 sm:w-16" />
            </div>

            {/* Заголовок */}
            <div className="relative z-10">
              <h2
                className="mt-3 text-4xl font-normal text-[#C5B477] sm:text-5xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Подарки
              </h2>

              <div className="mx-auto mt-4 h-px w-20 bg-[#C5B477]" />
            </div>

            {/* Текст */}
            <div className="relative z-10 mx-auto mt-7 max-w-lg">
              <p
                className="text-[17px] leading-[1.8] text-[#F2E4BB] sm:text-lg md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                «Думая о том, что нам подарить, вы можете доверить выбор нам. Мы
                будем рады денежному подарку, ведь так мы сможем выбрать именно
                то, что сделает наш дом уютнее».
              </p>
            </div>

            {/* Нижний декоративный элемент */}
            <div className="relative z-10 mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#C5B477]/50 sm:w-14" />

              <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

              <div className="h-px w-10 bg-[#C5B477]/50 sm:w-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
