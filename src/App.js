import logo from "./logo_CapFoosballCup.svg";
import faStar from "./star.svg";
import faCalendarDay from "./calendar-day.svg";
import faCameraRetro from "./camera-retro.svg";
import faUsers from "./users.svg";
import faChevronRight from "./chevron-right.svg";
import faChevronLeft from "./chevron-left.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Highscore } from "./pages/Highscore";
import { Reserve } from "./pages/Reserve";
import { Home } from "./pages/Home";
import { AvatarPage } from "./pages/avatar/AvatarPage";
import { MediaGallery } from "./pages/media/MediaGallery";

export function App() {
  return (
    <>
      <header>
        <img src={logo} />
      </header>

      <Routes>
        <Route path="/reserve" element={<Home />} />
        <Route path="/media" element={<MediaGallery />} />
        <Route path="/highscore" element={<Highscore />} />
        <Route path="/avatar" element={<AvatarPage />} />
      </Routes>

      <footer class="footer">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/reserve">
                <img class="menu-icon-width" src={faCalendarDay} />
              </Link>
            </li>
            <li>
              <Link to="/media">
                <img class="menu-icon-width" src={faCameraRetro} />
              </Link>
            </li>
            <li>
              <Link to="/avatar">
                <img class="menu-icon-width" src={faUsers} />
              </Link>
            </li>
            <li>
              <Link to="/highscore">
                <img class="menu-icon-width" src={faStar} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
