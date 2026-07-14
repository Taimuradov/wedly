import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Наш день",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Счастливые моменты",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    title: "Вместе",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6",
    title: "Праздник",
  },
];

function Gallery() {
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
          "linear-gradient(180deg,#DCE8DD 0%,#D5E3D7 30%,#C4D6C7 65%,#AFC5B3 100%)",
      }}
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
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
            Галерея
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
            "
            style={{
              color: "#54493F",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Наши моменты
          </h2>
        </motion.div>

        {/* Фото */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                overflow-hidden
                rounded-[25px]
              "
              style={{
                boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={`${photo.image}?auto=format&fit=crop&w=600&q=80`}
                alt={photo.title}
                className="
                  h-80
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>

        <div
          className="
            mx-auto
            mt-12
            w-24
            h-[2px]
          "
          style={{
            background: "#DFA3A3",
          }}
        />
      </div>
    </section>
  );
}

export default Gallery;
