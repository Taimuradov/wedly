import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
        overflow-hidden
        px-5
        pt-10
        pb-0
    "
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
              color: "#FFFFFF",

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
              color: "#FFFFFF",

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
              background: "#FFFFFF",
              boxShadow: "none",
              border: "1px solid #EAEAEA",
            }}
          >
            <h3
              className="text-5xl"
              style={{
                color: "#3F5148",

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
                color: "#3F5148",

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
              background: "#FFFFFF",
              boxShadow: "none",
              border: "1px solid #EAEAEA",
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
                  color: "#3F5148",

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
                  background: "#FFFFFF",
                  border: "1px solid #D7DDD9",
                  color: "#3F5148",
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
                  color: "#3F5148",

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
                    background: attendance === "Да" ? "#1d2f27" : "#FFFFFF",
                    color: attendance === "Да" ? "#FFFFFF" : "#3F5148",
                    border: "1px solid #D7DDD9",
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
                    background: attendance === "Нет" ? "#1d2f27" : "#FFFFFF",
                    color: attendance === "Нет" ? "#FFFFFF" : "#3F5148",
                    border: "1px solid #D7DDD9",
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
                background: "#1d2f27",

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
          mt-40
          flex
          justify-center
          px-5
        "
      ></motion.div>
    </section>
  );
}

export default RSVP;
