import logo from "./assets/logo_CapFoosballCup.svg";
import faStar from "./assets/star.svg";
import faCalendarDay from "./assets/calendar-day.svg";
import faCameraRetro from "./assets/camera-retro.svg";
import faUsers from "./assets/users.svg";
import faChevronRight from "./chevron-right.svg";
import faChevronLeft from "./chevron-left.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Reserve } from "./pages/Reserve";
import { Home } from "./pages/Home";
import { AvatarPage } from "./pages/avatar/AvatarPage";
import { HighscorePage } from "./pages/highscore/highscorePage";

export function App() {
  return (
    <>
      <header>
        <img src={logo} />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/highscore" element={<HighscorePage />} />
        <Route path="/avatar" element={<AvatarPage />} />
      </Routes>

      <footer class="footer">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">
                <img class="menu-icon-width" src={faCalendarDay} />
              </Link>
            </li>
            <li>
              <Link to="/reserve">
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
