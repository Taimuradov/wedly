import { motion } from "framer-motion";

function Location() {
  const mapLink =
    "https://www.google.com/maps/place/%D0%94%D0%BE%D0%BC+%D0%BC%D0%BE%D0%BB%D0%B8%D1%82%D0%B2%D1%8B+%D0%B4%D0%BB%D1%8F+%D0%B2%D1%81%D0%B5%D1%85+%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BE%D0%B2+(House+of+prayer+for+all+peoples)/@38.5697246,68.8075571,19z/data=!4m6!3m5!1s0x38b5d1a96db474ff:0x3fc3682e864ea593!8m2!3d38.5697246!4d68.8075571!16s%2Fg%2F11k0t0pd19?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
      "
      style={{
        background:
          "linear-gradient(180deg,#FCFAF7 0%,#F5F1EA 35%,#E8EFE7 75%,#DCE8DD 100%)",
      }}
    >
      {/* Карточка */}
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
          w-full
          max-w-2xl
          rounded-[30px]
          px-8
          py-12
          text-center
        "
        style={{
          background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.10)",
          border: "1px solid rgba(232,216,196,0.8)",
        }}
      >
        {/* Заголовок */}
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
          Место проведения
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            mb-8
          "
          style={{
            color: "#54493F",
            fontFamily: "'Great Vibes', cursive",
            fontWeight: "400",
          }}
        >
          Где состоится праздник
        </h2>

        {/* Декор */}
        <div
          className="
            mb-6
            text-4xl
          "
          style={{
            color: "#D89A9A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          ♡
        </div>

        {/* Название места */}
        <h3
          className="
            text-3xl
            mb-5
          "
          style={{
            color: "#53675B",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Церковь ЕХБ «Дом молитвы для всех народов»
        </h3>

        {/* Адрес */}
        <p
          className="
            max-w-md
            mx-auto
            text-lg
            leading-relaxed
          "
          style={{
            color: "#6B625A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Республика Таджикистан
          <br />
          г. Душанбе
          <br />1 проезд Хайрулло Мирзоева 5
        </p>

        {/* Дата и время */}
        <div
          className="
            mt-7
            text-xl
          "
          style={{
            color: "#D89A9A",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          5 сентября 2026
          <br />
          12:00
        </div>

        {/* Карта */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-8
            rounded-full
            px-8
            py-3
            transition
          "
          style={{
            background: "#53675B",
            color: "#ffffff",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
          }}
        >
          Открыть карту
        </a>

        {/* Декоративная линия */}
        <div
          className="
            mx-auto
            mt-10
            w-24
            h-[2px]
          "
          style={{
            background: "#DFA3A3",
          }}
        />
      </motion.div>
    </section>
  );
}

export default Location;
