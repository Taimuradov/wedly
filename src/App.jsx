import Envelope from "./components/sections/Envelope";
import Invitation from "./components/sections/Invitation";
import Couple from "./components/sections/Couple";
import Countdown from "./components/sections/Countdown";
import Story from "./components/sections/Story";
import Schedule from "./components/sections/Schedule";
import Location from "./components/sections/Location";
import Gallery from "./components/sections/Gallery";
import RSVP from "./components/sections/RSVP";
import Footer from "./components/sections/Footer";

import Admin from "./components/Admin/Admin";

function App() {
  // Админская страница
  if (window.location.pathname === "/admin") {
    return <Admin />;
  }

  // Основной сайт приглашения
  return (
    <>
      <Envelope />

      <main id="invitation">
        <Invitation />

        <Couple />

        <Countdown />

        <Story />

        <Schedule />

        <Location />

        <Gallery />

        <RSVP />

        <Footer />
      </main>
    </>
  );
}

export default App;
