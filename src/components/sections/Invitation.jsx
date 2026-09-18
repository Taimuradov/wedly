import { motion } from "framer-motion";

import photo3 from "../../assets/gallery/photo3.webp";
import photo4 from "../../assets/gallery/photo4.webp";

function Invitation() {
  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-[#5A292A] px-5 py-20 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
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
          className="mb-14 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Особенный день
          </p>

          <h2
            className="text-5xl font-normal text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Приглашение
          </h2>
        </motion.div>

        {/* Основная композиция */}
        <div className="mx-auto grid max-w-4xl grid-cols-[80px_1fr_80px] items-center gap-3 sm:grid-cols-[120px_1fr_120px] sm:gap-6 md:grid-cols-[160px_1fr_160px] md:gap-10">
          {/* Левая фотография */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -5,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div
              className="relative p-1"
              style={{
                border: "1px solid #C5B477",
                boxShadow: "0 12px 25px rgba(63, 27, 20, 0.3)",
              }}
            >
              <img
                src={photo3}
                alt="Сиродж и Мария"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Имена */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            className="text-center"
          >
            <div className="mx-auto mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-[#C5B477]/60 sm:w-10" />

              <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

              <div className="h-px w-6 bg-[#C5B477]/60 sm:w-10" />
            </div>

            <p
              className="text-xs uppercase tracking-[0.4em] text-[#C5B477] sm:text-sm"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              На свадьбу
            </p>

            <div className="mt-6">
              <h2
                className="text-5xl font-normal leading-none text-[#F2E4BB] sm:text-6xl md:text-7xl"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Сиродж
              </h2>

              <div
                className="my-1 text-3xl text-[#C5B477] sm:my-2 sm:text-4xl"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                и
              </div>

              <h2
                className="text-4xl font-normal leading-none text-[#F2E4BB] sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Мария
              </h2>
            </div>

            <div className="mx-auto mt-7 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-[#C5B477]/60 sm:w-10" />

              <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

              <div className="h-px w-6 bg-[#C5B477]/60 sm:w-10" />
            </div>
          </motion.div>

          {/* Правая фотография */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              rotate: 8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 5,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div
              className="relative p-1"
              style={{
                border: "1px solid #C5B477",
                boxShadow: "0 12px 25px rgba(63, 27, 20, 0.3)",
              }}
            >
              <img
                src={photo4}
                alt="Сиродж и Мария"
                className="aspect-[3/4] w-full object-cover"
              />

              <div
                className="pointer-events-none absolute inset-1"
                style={{
                  background: "rgba(20, 18, 16, 0.1)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Текст */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p
            className="text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            «Приглашаем вас разделить с нами радость этого дня и стать частью
            нашей истории».
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-[#C5B477]" />
        </motion.div>
      </div>
    </section>
  );
}

export default Invitation;
