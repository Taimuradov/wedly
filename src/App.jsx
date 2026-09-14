import Envelope from "./components/sections/Envelope";
import Invitation from "./components/sections/Invitation";
import Couple from "./components/sections/Couple";
import Countdown from "./components/sections/Countdown";
import Schedule from "./components/sections/Schedule";
import RSVP from "./components/sections/RSVP";
import Wishes from "./components/sections/Wishes";
import Footer from "./components/sections/Footer";
import DressCode from "./components/sections/DressCode";

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

      <main>
        <Couple />

        <Invitation />

        <Countdown />

        <DressCode />

        <Schedule />

        <Wishes />

        <RSVP />

        <Footer />
      </main>
    </>
  );
}

export default App;
