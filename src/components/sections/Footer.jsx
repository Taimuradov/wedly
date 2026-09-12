import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#5A292A] px-5 pb-12 pt-16">
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
        className="mx-auto max-w-3xl text-center"
      >
        <p
          className="mb-6 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          До встречи
        </p>

        <h2
          className="text-6xl font-normal text-[#F2E4BB] md:text-8xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Игнат & Енлик
        </h2>

        <p
          className="mt-6 text-xl leading-relaxed text-[#F2E4BB]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Спасибо, что разделите с нами этот особенный день.
        </p>

        <div className="mx-auto my-10 h-px w-28 bg-[#C5B477]" />

        <p
          className="text-lg text-[#F2E4BB]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          5 сентября 2026
        </p>

        <p
          className="mt-3 text-base text-[#C5B477]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          С любовью и благодарностью
        </p>

        {/* Автор сайта */}
        <div
          className="mt-12 pt-8"
          style={{
            borderTop: "1px solid rgba(197, 180, 119, 0.45)",
          }}
        >
          <p
            className="text-sm leading-relaxed text-[#F2E4BB]/80"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Хотите такое же красивое приглашение
            <br />
            для вашего особенного события?
          </p>

          <p
            className="mt-3 text-lg text-[#F2E4BB]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Создание свадебных сайтов и приглашений
          </p>

          <p
            className="mt-2 text-xl text-[#C5B477]"
            style={{
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
