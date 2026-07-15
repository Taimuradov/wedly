import { motion } from "framer-motion";
import allowImage from "../../images/gold.png";
import proposalPhoto from "../../assets/story/proposal.jpg";

const moments = [
  {
    year: "5 марта 2025",
    title: "Первое знакомство",
    text: "5 марта 2025 года началась наша история.",
  },
  {
    year: "5 марта 2026",
    title: "Важный этап",
    text: "Спустя год, в этот же день, 5 марта 2026 года, мы стали женихом и невестой. Именно с этого момента началась подготовка к самому важному дню нашей жизни.",
    image: proposalPhoto,
  },
  {
    year: "5 сентября 2026",
    title: "День нашего венчания",
    text: "Мы решили объединить наши жизни и разделить этот счастливый день с вами.",
  },
];

function Story() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        px-5
        py-24
      "
      style={{
        background:
          "linear-gradient(180deg,#EFE1D1 0%,#F7F3EC 35%,#EEF3EA 100%)",
      }}
    >
      {/* Плавный переход сверху */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-48
          pointer-events-none
        "
        style={{
          background: "linear-gradient(to bottom,#EFE1D1,transparent)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >
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
          className="
            mb-16
            text-center
          "
        >
          <p
            className="
              mb-5
              text-sm
              uppercase
              tracking-[0.45em]
            "
            style={{
              color: "#829889",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Наша история
          </p>

          <h2
            className="
    text-6xl
    md:text-8xl
  "
            style={{
              color: "#54493F",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "400",
            }}
          >
            Как всё начиналось
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Центральная линия */}
          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-px
              md:left-1/2
            "
            style={{
              background: "#DFA3A3",
            }}
          />

          <div className="space-y-12">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  relative
                  grid
                  md:grid-cols-2
                "
              >
                {/* Карточка */}
                <div
                  className={`
                    ml-10
                    rounded-[25px]
                    px-8
                    py-8
                    md:ml-0
                    ${index % 2 === 0 ? "md:mr-8" : "md:col-start-2 md:ml-8"}
                  `}
                  style={{
                    background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.10)",
                    border: "1px solid rgba(232,216,196,0.8)",
                  }}
                >
                  <span
                    className="
                      text-sm
                      tracking-[0.3em]
                    "
                    style={{
                      color: "#D89A9A",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {moment.year}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-3xl
                    "
                    style={{
                      color: "#53675B",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {moment.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-lg
                      leading-relaxed
                    "
                    style={{
                      color: "#6B625A",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {moment.text}
                  </p>

                  {/* Фото предложения без обрезки */}
                  {moment.image && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="
                        mt-8
                        w-full
                        rounded-[20px]
                        overflow-hidden
                        flex
                        justify-center
                        items-center
                        p-3
                      "
                      style={{
                        background: "#F7F1E8",
                        boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
                      }}
                    >
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="
                          max-h-[520px]
                          w-auto
                          max-w-full
                          rounded-[15px]
                          object-contain
                        "
                      />
                    </motion.div>
                  )}
                </div>

                {/* Точка */}
                <div
                  className="
                    absolute
                    left-0
                    top-8
                    h-8
                    w-8
                    rounded-full
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                  style={{
                    background: "#D89A9A",
                    boxShadow: "0 0 0 8px rgba(216,154,154,0.2)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Декоративная картинка после истории */}
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
        className="
          relative
          z-10
          mt-20
          flex
          justify-center
          px-5
        "
      >
        <img
          src={allowImage}
          alt="decoration"
          className="
            w-[420px]
            md:w-[600px]
            lg:w-[700px]
            object-contain
          "
        />
      </motion.div>
    </section>
  );
}

export default Story;
