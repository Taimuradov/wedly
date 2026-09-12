import { motion } from "framer-motion";
import colanderImage from "../../images/colander1.png";

function Location() {
  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=38.5697246,68.8075571";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#D5D0C7] px-5 py-24">
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
        className="relative z-10 w-full max-w-2xl overflow-hidden px-8 py-12 text-center"
        style={{
          background: "#5A292A",
          boxShadow: "0 14px 30px rgba(63, 27, 20, 0.22)",
          border: "1px solid #C5B477",
          borderRadius: "50px 50px 0 0",
        }}
      >
        {/* Тонкая внутренняя золотая рамка */}
        <div className="pointer-events-none absolute inset-3 border border-[#C5B477]/70" />

        <div className="relative z-10">
          {/* Заголовок */}
          <p
            className="mb-8 text-5xl font-normal text-[#C5B477] md:text-6xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Место проведения
          </p>

          {/* Название места */}
          <h3
            className="mb-5 text-3xl text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Церковь ЕХБ «Дом молитвы для всех народов»
          </h3>

          {/* Адрес */}
          <p
            className="mx-auto max-w-md text-lg leading-relaxed text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Республика Таджикистан
            <br />
            г. Душанбе
            <br />1 проезд Хайрулло Мирзоева 5
          </p>

          <p
            className="mb-0 mt-8 text-3xl font-normal text-[#C5B477]"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Сентябрь
          </p>

          {/* Календарь */}
          <div className="mt-2 flex justify-center">
            <img
              src={colanderImage}
              alt="Календарь"
              className="w-64 max-w-full object-contain sm:w-52 md:w-64"
            />
          </div>

          {/* Время */}
          <div
            className="mt-5 text-xl text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            12:00
          </div>

          {/* Карта */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3 transition-transform duration-300 hover:scale-105"
            style={{
              background: "#49432C",
              border: "1px solid #C5B477",
              color: "#F2E4BB",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
            }}
          >
            Открыть карту
          </a>

          {/* Декоративная линия */}
          <div className="mx-auto mt-10 h-px w-24 bg-[#C5B477]" />
        </div>
      </motion.div>
    </section>
  );
}

export default Location;
