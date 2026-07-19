import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        px-5
        pt-0
        pb-12
      "
    >
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
          mx-auto
          max-w-3xl
          text-center
        "
      >
        <p
          className="
            text-sm
            uppercase
            tracking-[0.45em]
            mb-6
          "
          style={{
            color: "#E8D8C4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          До встречи
        </p>

        <h2
          className="
            text-6xl
            md:text-8xl
          "
          style={{
            color: "#FFFDF9",
            fontFamily: "'Great Vibes', cursive",
            fontWeight: "400",
          }}
        >
          Игнат & Енлик
        </h2>

        <p
          className="
            mt-6
            text-xl
            leading-relaxed
          "
          style={{
            color: "#F5F1EA",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Спасибо, что разделите этот особенный день вместе с нами.
        </p>

        <div
          className="
            mx-auto
            my-10
            w-28
            h-[2px]
          "
          style={{
            background: "#DFA3A3",
          }}
        />

        <p
          className="
            text-lg
          "
          style={{
            color: "#FFFDF9",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          5 сентября 2026
        </p>

        <p
          className="
            mt-3
            text-base
          "
          style={{
            color: "#E8D8C4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          С любовью и благодарностью 🤍
        </p>

        {/* Автор сайта */}
        <div
          className="
            mt-12
            pt-8
          "
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <p
            className="
              text-sm
              leading-relaxed
            "
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Хотите такое же красивое приглашение
            <br />
            для вашего особенного события?
          </p>

          <p
            className="
              mt-3
              text-lg
            "
            style={{
              color: "#FFFDF9",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Создание свадебных сайтов и приглашений
          </p>

          <p
            className="
              mt-2
              text-xl
            "
            style={{
              color: "#DFA3A3",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            +992 50 100 16 24
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
