import { useEffect, useMemo, useState } from "react";
import paperImage from "../../images/paper-top.png";
import colanderImage from "../../images/colander.png";

function Countdown() {

  const targetDate = useMemo(
    () => new Date("2026-09-05T12:00:00+05:00"),
    []
  );


  const calculateTime = () => {
    const now = new Date();

    const difference = targetDate.getTime() - now.getTime();


    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }


    const totalSeconds = Math.floor(difference / 1000);


    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };


  const [time, setTime] = useState(calculateTime());



  useEffect(() => {

    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);


    return () => clearInterval(timer);

  }, []);




  return (

<section
  className="
    relative
    min-h-[700px]
    flex
    items-center
    justify-center
    overflow-hidden
    pt-10
    pb-0
    px-5
  "
>А

      {/* Основной блок */}
      <div
        className="
    relative
    w-full
    max-w-[1400px]
    min-h-[900px]
    md:min-h-[1050px]
    flex
    items-center
    justify-center
  "
      >

        {/* Бумага */}
        <div
          className="
        absolute
        top-[-60px]
        bottom-[-80px]
        left-[-130px]
        right-[-100px]
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
          <p
            className="
            text-sm
            tracking-[0.45em]
            uppercase
            mb-6
          "
            style={{
              color: "#3F5148",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            До нашей встречи
          </p>



          <h2
            className="
            text-5xl
            md:text-7xl
            mb-12
          "
            style={{
              color: "#3F5148",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "400",
            }}
          >
            Осталось совсем немного
          </h2>



          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            max-w-3xl
            mx-auto
          "
          >

            {[
              {
                value: time.days,
                label: "ДНЕЙ",
              },
              {
                value: time.hours,
                label: "ЧАСОВ",
              },
              {
                value: time.minutes,
                label: "МИНУТ",
              },
              {
                value: time.seconds,
                label: "СЕКУНД",
              },

            ].map((item, index) => (


              <div
                key={index}
                className="
                w-32
                h-32
                md:w-36
                md:h-36
                mx-auto
                rounded-full
                flex
                flex-col
                items-center
                justify-center
              "
                style={{
                  background:
                    "linear-gradient(145deg,#fffdf9,#f7f1e8)",

                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",

                  border:
                    "1px solid rgba(232,216,196,0.8)",
                }}
              >


                <div
                  className="
                  text-5xl
                  md:text-6xl
                "
                  style={{
                    color: "#3F5148",
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </div>



                <p
                  className="
                  mt-1
                  text-xs
                  tracking-widest
                "
                  style={{
                    color: "#3F5148",
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {item.label}
                </p>


              </div>


            ))}


          </div>
                    {/* Декор внутри листа */}
          <div
            className="
              mt-16
              flex
              justify-center
            "
          >
            <img
              src={colanderImage}
              alt=""
              className="
                w-48
                md:w-64
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>

  );
}


export default Countdown;