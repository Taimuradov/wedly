import { motion } from "framer-motion";

const events = [
  {
    time: "12:00",
    title: "Церемония венчания",
    description: "Самый трепетный момент нашего дня.",
  },
  {
    time: "13:00",
    title: "Фотосессия и ваши подарки",
    description:
      "Если вы не знаете, что подарить молодожёнам, будем благодарны за подарок в виде конверта.",
  },
  {
    time: "13:30",
    title: "Праздничный фуршет",
    description: "Разделим радость этого дня за праздничным фуршетом",
  },
];

function Schedule() {
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
          "linear-gradient(180deg,#EEF3EA 0%,#F5F1EA 40%,#FCFAF7 100%)",
      }}
    >
      {/* Плавный переход сверху от Story */}
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
          background: "linear-gradient(to bottom,#EEF3EA,transparent)",
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
            Программа дня
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
            "
            style={{
              color: "#54493F",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Расписание венчания
          </h2>
        </motion.div>

        {/* Карточки */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[30px]
                p-8
                text-center
              "
              style={{
                background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",

                boxShadow: "0 25px 60px rgba(0,0,0,0.10)",

                border: "1px solid rgba(232,216,196,0.8)",
              }}
            >
              {/* Декор */}
              <div
                className="
                  mb-5
                  text-4xl
                "
                style={{
                  color: "#D89A9A",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                ♡
              </div>

              {/* Время */}
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                "
                style={{
                  color: "#829889",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {event.time}
              </p>

              {/* Название */}
              <h3
                className="
                  mt-4
                  text-3xl
                "
                style={{
                  color: "#53675B",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {event.title}
              </h3>

              {/* Описание */}
              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                "
                style={{
                  color: "#6B625A",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
