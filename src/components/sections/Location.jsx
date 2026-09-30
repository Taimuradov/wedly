import { motion } from "framer-motion";
import colanderImage from "../../images/colander.png";

function Location() {
  const mapLink =
    "https://www.google.com/maps/place/38%C2%B040'41.1%22N+68%C2%B047'13.2%22E/@38.678073,68.7863493,19z/data=!3m1!4b1!4m4!3m3!8m2!3d38.678073!4d68.786993?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="relative overflow-hidden bg-[#5A292A] px-5 py-20 md:py-24">
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
        className="mx-auto max-w-4xl text-center"
      >
        {/* Верхний декоративный элемент */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#C5B477]/60 sm:w-20" />

          <div
            className="flex h-9 w-9 items-center justify-center"
            style={{
              border: "1px solid rgba(197, 180, 119, 0.7)",
              transform: "rotate(45deg)",
            }}
          >
            <span
              className="-rotate-45 text-xl text-[#C5B477]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              ♡
            </span>
          </div>

          <div className="h-px w-12 bg-[#C5B477]/60 sm:w-20" />
        </div>

        {/* Заголовок */}
        <p
          className="text-sm uppercase tracking-[0.45em] text-[#C5B477]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Место проведения
        </p>

        {/* Название места */}
        <h2
          className="mx-auto mt-8 max-w-3xl text-4xl font-normal leading-tight text-[#F2E4BB] sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Ресторан «Джахонгир»
        </h2>

        {/* Декоративный разделитель */}
        <div className="mx-auto my-9 flex items-center justify-center gap-3">
          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />

          <div className="h-1.5 w-1.5 rotate-45 bg-[#C5B477]" />

          <div className="h-px w-14 bg-[#C5B477]/60 sm:w-24" />
        </div>

        {/* Адрес */}
        <p
          className="mx-auto max-w-md text-lg leading-relaxed text-[#F2E4BB] sm:text-xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Республика Таджикистан
          <br />
          г. Душанбе
          <br />
          ориентире Аквапарк Кули Душанбе
        </p>

        {/* Месяц */}
        <p
          className="mt-9 text-3xl text-[#C5B477] sm:text-4xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Октябрь
        </p>

        {/* Календарь */}
        <div className="mt-3 flex justify-center">
          <img
            src={colanderImage}
            alt=""
            className="w-48 max-w-full object-contain sm:w-56 md:w-64"
          />
        </div>

        {/* Время */}
        <p
          className="mt-5 text-xl text-[#F2E4BB] sm:text-2xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          11:00
        </p>

        {/* Кнопка карты */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full px-8 py-3 text-lg transition-opacity hover:opacity-80"
          style={{
            background: "#C5B477",
            color: "#5A292A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Открыть карту
        </a>

        {/* Нижний декоративный разделитель */}
        <div className="mx-auto mt-10 h-px w-20 bg-[#C5B477]" />
      </motion.div>
    </section>
  );
}

export default Location;
