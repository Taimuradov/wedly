import { motion } from "framer-motion";

import photo1 from "../../assets/gallery/photo1.jpg";
import photo2 from "../../assets/gallery/photo2.jpg";
import photo3 from "../../assets/gallery/photo3.jpg";
import photo4 from "../../assets/gallery/photo4.jpg";

const photos = [
  {
    id: 1,
    image: photo1,
    title: "Наш день",
  },
  {
    id: 2,
    image: photo2,
    title: "Счастливые моменты",
  },
  {
    id: 3,
    image: photo3,
    title: "Вместе",
  },
  {
    id: 4,
    image: photo4,
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
                src={photo.image}
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
