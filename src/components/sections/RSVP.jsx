import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function RSVP() {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);

  const handleSubmit = async () => {
    const trimmedName = name.trim();

    if (!trimmedName || !attendance) {
      alert("Пожалуйста, заполните имя и выберите ответ");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "rsvps"), {
        name: trimmedName,
        attendance,
        createdAt: serverTimestamp(),
      });

      localStorage.setItem("rsvpSubmitted", "true");

      setSent(true);
      setAlreadySent(true);
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

    if (submitted === "true") {
      setAlreadySent(true);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#49432C] px-5 pb-0 pt-10">
      <div className="relative z-10 mx-auto max-w-xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Подтверждение участия
          </p>

          <h2
            className="text-6xl font-normal text-[#F2E4BB] md:text-7xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Будем рады видеть вас
          </h2>
        </motion.div>

        {/* После отправки */}
        {alreadySent || sent ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden px-8 py-12 text-center"
            style={{
              background: "#5A292A",
              border: "1px solid #C5B477",
              borderRadius: "28px",
              boxShadow: "0 14px 30px rgba(63, 27, 20, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-3"
              style={{
                border: "1px solid rgba(197, 180, 119, 0.7)",
                borderRadius: "20px",
              }}
            />

            <div className="relative z-10">
              <h3
                className="text-5xl font-normal text-[#C5B477]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Спасибо
              </h3>

              <p
                className="mt-5 text-xl leading-relaxed text-[#F2E4BB]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Ваш ответ уже получен.
                <br />
                Будем рады разделить этот день вместе с вами.
              </p>
            </div>
          </motion.div>
        ) : (
          /* Форма */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden px-8 py-10"
            style={{
              background: "#5A292A",
              border: "1px solid #C5B477",
              borderRadius: "28px",
              boxShadow: "0 14px 30px rgba(63, 27, 20, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-3"
              style={{
                border: "1px solid rgba(197, 180, 119, 0.7)",
                borderRadius: "20px",
              }}
            />

            <div className="relative z-10">
              {/* Имя */}
              <div className="mb-6">
                <label
                  className="mb-2 block text-lg text-[#F2E4BB]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Имя и фамилия
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  className="w-full rounded-none px-5 py-3 outline-none"
                  style={{
                    background: "#E7E1D6",
                    border: "1px solid #C5B477",
                    color: "#3F1B14",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                  }}
                />
              </div>

              {/* Ответ */}
              <div>
                <p
                  className="mb-4 text-lg text-[#F2E4BB]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Сможете присутствовать?
                </p>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance("Да")}
                    className="flex-1 rounded-none py-3 transition-colors"
                    style={{
                      background:
                        attendance === "Да" ? "#C5B477" : "transparent",
                      color: attendance === "Да" ? "#3F1B14" : "#F2E4BB",
                      border: "1px solid #C5B477",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                    }}
                  >
                    Да
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance("Нет")}
                    className="flex-1 rounded-none py-3 transition-colors"
                    style={{
                      background:
                        attendance === "Нет" ? "#C5B477" : "transparent",
                      color: attendance === "Нет" ? "#3F1B14" : "#F2E4BB",
                      border: "1px solid #C5B477",
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
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="mt-8 w-full rounded-none py-4 transition-opacity"
                style={{
                  background: "#C5B477",
                  color: "#3F1B14",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Отправка..." : "Отправить ответ"}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-40 flex justify-center px-5"
      />
    </section>
  );
}

export default RSVP;
