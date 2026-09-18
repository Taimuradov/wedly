import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function RSVP({ guestName }) {
  const [attendance, setAttendance] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [alreadySent, setAlreadySent] = useState(false);

  const getGuestId = () => {
    let guestId = localStorage.getItem("guestId");

    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }

    return guestId;
  };

  useEffect(() => {
    const checkExistingResponse = async () => {
      try {
        const guestId = getGuestId();

        const guestRef = doc(db, "rsvps", guestId);
        const guestSnapshot = await getDoc(guestRef);

        if (guestSnapshot.exists()) {
          setAlreadySent(true);
        } else {
          setAlreadySent(false);
        }
      } catch (error) {
        console.error("Ошибка проверки ответа:", error);
      } finally {
        setChecking(false);
      }
    };

    checkExistingResponse();
  }, []);

  const handleSubmit = async () => {
    const trimmedName = guestName.trim();

    if (!trimmedName || !attendance) {
      alert("Пожалуйста, выберите ответ");
      return;
    }

    try {
      setLoading(true);

      const guestId = getGuestId();

      const guestRef = doc(db, "rsvps", guestId);

      await setDoc(guestRef, {
        guestId,
        name: trimmedName,
        attendance,
        createdAt: serverTimestamp(),
      });

      setSent(true);
      setAlreadySent(true);
      setAttendance("");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить ответ");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <section className="relative overflow-hidden bg-[#49432C] px-5 pt-10">
        <div className="flex min-h-[300px] items-center justify-center">
          <p
            className="text-lg text-[#F2E4BB]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Загрузка...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#49432C] px-5 pt-10">
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
            className="relative px-2 py-10 text-center sm:px-8"
          >
            <div className="relative z-10">
              <h3
                className="text-5xl font-normal text-[#F2E4BB]"
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
            className="relative px-2 pb-14 pt-4 sm:px-8"
          >
            <div className="relative z-10">
              {/* Имя */}
              <div className="text-center">
                <span
                  className="whitespace-nowrap text-3xl font-normal leading-tight text-[#F2E4BB] sm:text-4xl"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  {guestName}
                </span>

                {/* Вопрос */}
                <p
                  className="mt-2 text-lg leading-tight text-[#F2E4BB] sm:text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  сможете присутствовать?
                </p>
              </div>

              {/* Ответ */}
              <div className="mt-8">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance("Да")}
                    className="flex-1 rounded-none py-3 transition-colors"
                    style={{
                      background:
                        attendance === "Да" ? "#F2E4BB" : "transparent",
                      color: attendance === "Да" ? "#49432C" : "#F2E4BB",
                      border: "1px solid #F2E4BB",
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
                        attendance === "Нет" ? "#F2E4BB" : "transparent",
                      color: attendance === "Нет" ? "#49432C" : "#F2E4BB",
                      border: "1px solid #F2E4BB",
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
                className="mt-6 w-full rounded-none py-4 transition-opacity"
                style={{
                  background: "#F2E4BB",
                  color: "#49432C",
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
    </section>
  );
}

export default RSVP;
