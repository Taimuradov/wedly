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
  const rotations = [
    "-rotate-3 -translate-y-3",
    "rotate-2 translate-y-2",
    "-rotate-2 translate-y-4",
    "rotate-3 -translate-y-2",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#49432C] px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
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
          className="mb-12 text-center"
        >
          <p
            className="mb-4 text-sm uppercase tracking-[0.45em] text-[#C5B477]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Моменты нашей истории
          </p>

          <h2
            className="text-6xl font-normal text-[#F2E4BB] md:text-8xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Наши фотографии
          </h2>
        </motion.div>

        {/* Фото */}
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              className={`relative ${rotations[index]}`}
            >
              <div
                className="p-3"
                style={{
                  background: "#5A292A",
                  border: "1px solid #C5B477",
                  boxShadow: "0 14px 25px rgba(63, 27, 20, 0.35)",
                }}
              >
                <div className="border border-[#C5B477]/70 p-1">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-80 w-full object-cover"
                  />
                </div>

                <p
                  className="mt-3 text-center text-2xl text-[#C5B477]"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 h-px w-24 bg-[#C5B477]" />
      </div>
    </section>
  );
}

export default Gallery;
