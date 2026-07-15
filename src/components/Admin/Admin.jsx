import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

function Admin() {
  const [password, setPassword] = useState("");

  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem("adminAuth") === "true";
  });

  const [guests, setGuests] = useState([]);

  const [loading, setLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (password === "ignat2911") {
      localStorage.setItem("adminAuth", "true");
      setAuthorized(true);
      setPassword("");
    } else {
      alert("Неверный пароль");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    setAuthorized(false);
  };

  const loadGuests = async () => {
    try {
      setLoading(true);

      const q = query(collection(db, "rsvps"), orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setGuests(data);
    } catch (error) {
      console.error("Ошибка загрузки гостей:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authorized) return;

    loadGuests();
  }, [authorized]);

  const deleteGuest = async (id) => {
    const confirmDelete = window.confirm("Удалить этого гостя?");

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "rsvps", id));

      setGuests((prev) => prev.filter((guest) => guest.id !== id));
    } catch (error) {
      console.error("Ошибка удаления:", error);
    }
  };

  if (!authorized) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-5
        "
        style={{
          background: "linear-gradient(180deg,#EEF3EA,#8FAF96)",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        <form
          onSubmit={login}
          className="
            w-full
            max-w-md
            rounded-[30px]
            p-10
            text-center
          "
          style={{
            background: "#fffdf9",
            boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          }}
        >
          <h1
            className="
              text-4xl
              mb-8
            "
            style={{
              color: "#53675B",
            }}
          >
            Админка
          </h1>

          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              rounded-xl
              px-5
              py-3
              outline-none
              mb-5
            "
            style={{
              background: "#F5F1EA",
              border: "1px solid #E8D8C4",
              fontSize: "18px",
            }}
          />

          <button
            type="submit"
            className="
              w-full
              rounded-full
              py-3
            "
            style={{
              background: "#53675B",
              color: "#fff",
              fontSize: "20px",
            }}
          >
            Войти
          </button>
        </form>
      </div>
    );
  }
  const coming = guests.filter((guest) => guest.attendance === "Да");

  const notComing = guests.filter((guest) => guest.attendance === "Нет");

  return (
    <div
      className="
        min-h-screen
        px-5
        py-20
      "
      style={{
        background: "linear-gradient(180deg,#EEF3EA,#8FAF96)",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <div
        className="
          mx-auto
          max-w-4xl
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-5
            mb-12
          "
        >
          <h1
            className="
              text-5xl
              text-center
            "
            style={{
              color: "#53675B",
            }}
          >
            Список гостей венчания
          </h1>

          <div
            className="
              flex
              gap-4
              flex-wrap
              justify-center
            "
          >
            <button
              onClick={loadGuests}
              disabled={loading}
              className="
                rounded-full
                px-8
                py-3
              "
              style={{
                background: "#53675B",
                color: "#fff",
                fontSize: "18px",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Обновление..." : "Обновить список"}
            </button>

            <button
              onClick={logout}
              className="
                rounded-full
                px-8
                py-3
              "
              style={{
                background: "#D89A9A",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              Выйти
            </button>
          </div>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          {/* Придут */}

          <div
            className="
              rounded-3xl
              p-8
            "
            style={{
              background: "#fffdf9",
            }}
          >
            <h2
              className="
                text-3xl
                mb-5
              "
              style={{
                color: "#53675B",
              }}
            >
              ✅ Придут
            </h2>

            <p className="text-xl mb-5">Всего: {coming.length}</p>

            {coming.map((guest) => (
              <div
                key={guest.id}
                className="
                  flex
                  justify-between
                  items-center
                  mb-3
                  gap-3
                "
              >
                <p
                  className="text-lg"
                  style={{
                    color: "#6B625A",
                  }}
                >
                  {guest.name}
                </p>

                <button
                  onClick={() => deleteGuest(guest.id)}
                  className="
                    rounded-full
                    px-4
                    py-1
                  "
                  style={{
                    background: "#D89A9A",
                    color: "#fff",
                  }}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          {/* Не придут */}

          <div
            className="
              rounded-3xl
              p-8
            "
            style={{
              background: "#fffdf9",
            }}
          >
            <h2
              className="
                text-3xl
                mb-5
              "
              style={{
                color: "#53675B",
              }}
            >
              ❌ Не придут
            </h2>

            <p className="text-xl mb-5">Всего: {notComing.length}</p>

            {notComing.map((guest) => (
              <div
                key={guest.id}
                className="
                  flex
                  justify-between
                  items-center
                  mb-3
                  gap-3
                "
              >
                <p
                  className="text-lg"
                  style={{
                    color: "#6B625A",
                  }}
                >
                  {guest.name}
                </p>

                <button
                  onClick={() => deleteGuest(guest.id)}
                  className="
                    rounded-full
                    px-4
                    py-1
                  "
                  style={{
                    background: "#D89A9A",
                    color: "#fff",
                  }}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
