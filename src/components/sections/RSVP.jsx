import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import whiteImage from "../../images/white.png";

import { db } from "../../firebase/firebase";

function RSVP() {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);

  const handleSubmit = async () => {
    if (!name || !attendance) {
      alert("Пожалуйста, заполните имя и выберите ответ");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "rsvps"), {
        name: name.trim(),

        attendance,

        createdAt: serverTimestamp(),
      });

      localStorage.setItem("rsvpSubmitted", "true");

      setSent(true);

      setName("");

      setAttendance("");
    } catch (error) {
      console.error("Ошибка отправки:", error);

      alert("Не удалось отправить ответ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const submitted = localStorage.getItem("rsvpSubmitted");

    if (submitted) {
      setAlreadySent(true);
    }
  }, []);

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
          "linear-gradient(180deg,#AFC5B3 0%,#9CB79F 35%,#7F9E86 70%,#64836D 100%)",
      }}
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-xl
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
            mb-12
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
              color: "#53675B",

              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Подтверждение участия
          </p>

          <h2
            className="
    text-6xl
    md:text-7xl
  "
            style={{
              color: "#54493F",

              fontFamily: "'Great Vibes', cursive",

              fontWeight: "400",
            }}
          >
            Будем рады видеть вас
          </h2>
        </motion.div>

        {/* После отправки */}
        {alreadySent || sent ? (
          <motion.div
            initial={{
              opacity: 0,

              y: 30,
            }}
            animate={{
              opacity: 1,

              y: 0,
            }}
            className="
              rounded-[30px]
              px-8
              py-12
              text-center
            "
            style={{
              background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",

              boxShadow: "0 25px 60px rgba(0,0,0,0.18)",

              border: "1px solid rgba(232,216,196,0.8)",
            }}
          >
            <h3
              className="text-5xl"
              style={{
                color: "#53675B",

                fontFamily: "'Great Vibes', cursive",

                fontWeight: "400",
              }}
            >
              🤍 Спасибо
            </h3>

            <p
              className="
                mt-5
                text-xl
                leading-relaxed
              "
              style={{
                color: "#6B625A",

                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Ваш ответ уже получен.
              <br />
              Будем рады разделить этот день вместе с вами.
            </p>
          </motion.div>
        ) : (
          /* Форма */

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
            rounded-[30px]
            px-8
            py-10
          "
            style={{
              background: "linear-gradient(145deg,#fffdf9,#f7f1e8)",

              boxShadow: "0 25px 60px rgba(0,0,0,0.18)",

              border: "1px solid rgba(232,216,196,0.8)",
            }}
          >
            {/* Имя */}

            <div className="mb-6">
              <label
                className="
                block
                mb-2
                text-lg
              "
                style={{
                  color: "#53675B",

                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Имя и фамилия
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
                className="
                w-full
                rounded-xl
                px-5
                py-3
                outline-none
              "
                style={{
                  background: "#F5F1EA",

                  border: "1px solid #E8D8C4",

                  fontFamily: "'Cormorant Garamond', serif",

                  fontSize: "18px",
                }}
              />
            </div>

            {/* Ответ */}

            <div>
              <p
                className="
                mb-4
                text-lg
              "
                style={{
                  color: "#53675B",

                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Сможете присутствовать?
              </p>

              <div
                className="
                flex
                gap-4
              "
              >
                <button
                  onClick={() => setAttendance("Да")}
                  className="
                  flex-1
                  rounded-full
                  py-3
                "
                  style={{
                    background: attendance === "Да" ? "#53675B" : "#E8E0D5",

                    color: attendance === "Да" ? "#fff" : "#53675B",

                    fontFamily: "'Cormorant Garamond', serif",

                    fontSize: "18px",
                  }}
                >
                  Да
                </button>

                <button
                  onClick={() => setAttendance("Нет")}
                  className="
                  flex-1
                  rounded-full
                  py-3
                "
                  style={{
                    background: attendance === "Нет" ? "#D89A9A" : "#E8E0D5",

                    color: attendance === "Нет" ? "#fff" : "#53675B",

                    fontFamily: "'Cormorant Garamond', serif",

                    fontSize: "18px",
                  }}
                >
                  Нет
                </button>
              </div>
            </div>

            {/* Кнопка отправки */}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
              mt-8
              w-full
              rounded-full
              py-4
            "
              style={{
                background: "#53675B",

                color: "#fff",

                fontFamily: "'Cormorant Garamond', serif",

                fontSize: "20px",

                opacity: loading ? 0.7 : 1,

                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Отправка..." : "Отправить ответ"}
            </button>
          </motion.div>
        )}
      </div>

      {/* Декоративная картинка */}
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
        className="
          relative
          z-10
          mt-16
          flex
          justify-center
          px-5
        "
      >
        <img
          src={whiteImage}
          alt="White decoration"
          className="
            w-[260px]
            md:w-[380px]
            lg:w-[480px]
            object-contain
            pointer-events-none
            select-none
          "
        />
      </motion.div>
    </section>
  );
}

export default RSVP;
