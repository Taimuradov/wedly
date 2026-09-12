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
    <section className="relative min-h-screen overflow-hidden bg-[#49432C] px-5 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Программа дня
          </p>

          <h2
            className="text-5xl text-[#F2E4BB] md:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Торжества
          </h2>
        </motion.div>

        {/* Одна общая бордовая карточка расписания */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-8 text-center md:p-12"
          style={{
            background: "#5A292A",
            border: "1px solid #C5B477",
            borderRadius: "28px",
            boxShadow: "0 14px 30px rgba(63, 27, 20, 0.28)",
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

          <div className="relative z-10 grid gap-10 md:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <div
                  className="mb-5 text-3xl text-[#C5B477]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  ◆
                </div>

                <p
                  className="text-sm uppercase tracking-[0.35em] text-[#C5B477]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.time}
                </p>

                <h3
                  className="mt-4 text-3xl text-[#F2E4BB]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.title}
                </h3>

                <p
                  className="mt-5 text-lg leading-relaxed text-[#F2E4BB]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Schedule;
