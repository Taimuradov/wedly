import ignatPhoto from "../../assets/gallery/photo5.jpg";
import enlikPhoto from "../../assets/gallery/photo6.jpg";
import paperImage from "../../images/paper-top.png";

function Couple() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-20
pb-0
        px-5
      "
    >
      {/* Основной блок */}
      <div
        className="
          relative
          w-full
          max-w-[1200px]
          min-h-[1200px]
          flex
          items-center
          justify-center
        "
      >

        {/* Бумага */}
        <div
          className="
            absolute
            inset-[-80px]
            z-0
          "
          style={{
            backgroundImage: `url(${paperImage})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />


        {/* Контент */}
        <div
          className="
            relative
            z-10
            w-full
            text-center
            px-5
            md:px-10
            py-20
          "
        >

          <h2
            className="
              text-5xl
              md:text-7xl
              mb-16
            "
            style={{
              color:"#53675B",
              fontFamily:"'Cormorant Garamond', serif",
            }}
          >
            Два сердца
          </h2>



          {/* Фото */}
          <div
            className="
              relative
              flex
              justify-center
              items-center
              mb-14
              h-[300px]
              md:h-[340px]
              -space-x-1
              md:-space-x-1
            "
          >


            {/* Игнат */}
            <div
              className="
                relative
                -translate-y-4
                rotate-[-8deg]
                z-20
                p-3
                shadow-2xl
                w-[150px]
                sm:w-[190px]
                md:w-[230px]
              "
              style={{
                background:"#415542",
              }}
            >

              <img
                src={ignatPhoto}
                alt="Игнат"
                className="
                  w-full
                  h-[180px]
                  sm:h-[220px]
                  md:h-[250px]
                  object-cover
                "
              />

              <p
                className="
  mt-3
  text-2xl
  md:text-3xl
"
                style={{
                  fontFamily:"'Great Vibes', cursive",
                  color:"#FFFFFF",
                }}
              >
                Игнат
              </p>


              <div
                className="
                  absolute
                  top-[-10px]
                  left-1/2
                  -translate-x-1/2
                  w-16
                  h-5
                  rotate-[-8deg]
                "
style={{
  background:"rgba(245,235,215,.75)",
  backdropFilter:"blur(2px)",
  border:"1px solid rgba(255,255,255,.3)",
}}
              />

            </div>



            {/* Енлик */}
            <div
              className="
                relative
                translate-y-5
                rotate-[7deg]
                z-10
                p-3
                shadow-2xl
                w-[150px]
                sm:w-[190px]
                md:w-[230px]
              "
              style={{
                background:"#415542",
              }}
            >

              <img
                src={enlikPhoto}
                alt="Енлик"
                className="
                  w-full
                  h-[180px]
                  sm:h-[220px]
                  md:h-[250px]
                  object-cover
                "
              />


              <p
className="
  mt-3
  text-2xl
  md:text-3xl
"
                style={{
                  fontFamily:"'Great Vibes', cursive",
                  color:"#FFFFFF",
                }}
              >
                Енлик
              </p>


              <div
                className="
                  absolute
                  top-[-10px]
                  left-1/2
                  -translate-x-1/2
                  w-16
                  h-5
                  rotate-[8deg]
                "
style={{
  background:"rgba(245,235,215,.75)",
  backdropFilter:"blur(2px)",
  border:"1px solid rgba(255,255,255,.3)",
}}
              />

            </div>


          </div>



          {/* Стих */}
          <div
            className="
              mt-12
              max-w-xl
              mx-auto
              px-6
            "
          >

            <p
              className="
                text-xl
                md:text-2xl
                leading-relaxed
                italic
              "
              style={{
                color:"#53675B",
                fontFamily:"'Cormorant Garamond', serif",
              }}
            >
              «Итак, они уже не двое, но одна плоть; итак, что Бог сочетал,
              того человек да не разлучает»
            </p>


            <span
              className="
                block
                mt-5
              "
              style={{
                color:"#53675B",
                fontFamily:"'Cormorant Garamond', serif",
              }}
            >
              Матфея 19:6
            </span>

          </div>



          {/* Линия */}
          <div
            className="
              mx-auto
              mt-10
              w-28
              h-[2px]
            "
            style={{
              background:"#53675B",
            }}
          />

        </div>

      </div>

    </section>
  );
}

export default Couple;