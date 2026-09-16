import { motion } from "framer-motion";

function Wishes() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#49432C] px-5 py-24">
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Заголовок */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Для наших гостей
          </p>

          <h2
            className="text-6xl font-normal text-[#F2E4BB] md:text-8xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Наши пожелания
          </h2>
        </motion.div>

        {/* Бордовая карточка с пожеланиями */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden px-8 py-12 text-center md:px-14 md:py-16"
          style={{
            background: "#5A292A",
            border: "1px solid #C5B477",
            borderRadius: "28px",
            boxShadow: "0 14px 30px rgba(63, 27, 20, 0.3)",
          }}
        >
          {/* Внутренняя золотая рамка */}
          <div
            className="pointer-events-none absolute inset-3"
            style={{
              border: "1px solid rgba(197, 180, 119, 0.7)",
              borderRadius: "20px",
            }}
          />

          <div className="relative z-10">
            <div className="mx-auto mb-10 h-px w-24 bg-[#C5B477]" />

            <div className="space-y-10">
              <div>
                <h3
                  className="mb-4 text-3xl text-[#C5B477] md:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Просим оставить детей дома
                </h3>

                <p
                  className="text-lg leading-relaxed text-[#F2E4BB] md:text-xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Чтобы церемония и праздничный ужин прошли в спокойной и уютной
                  атмосфере, просим вас в этот день оставить детей под
                  заботливым присмотром.
                </p>
              </div>

              <div className="mx-auto h-px w-16 bg-[#C5B477]/70" />

              <div>
                <h3
                  className="mb-4 text-3xl text-[#C5B477] md:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Пожалуйста, вовремя
                </h3>

                <p
                  className="text-lg leading-relaxed text-[#F2E4BB] md:text-xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Будем очень признательны, если вы придёте вовремя: церемония
                  начнётся точно в назначенное время.
                </p>
              </div>

              <div className="mx-auto h-px w-16 bg-[#C5B477]/70" />

              <div>
                <h3
                  className="mb-4 text-3xl text-[#C5B477] md:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Поздравления и сюрпризы
                </h3>

                <p
                  className="text-lg leading-relaxed text-[#F2E4BB] md:text-xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Наша программа продумана заранее. Если вы захотите подготовить
                  поздравление или сделать сюрприз, пожалуйста, заранее
                  согласуйте это с организаторами.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-10 h-px w-24 bg-[#C5B477]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Wishes;
