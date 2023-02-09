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

export function App() {
  return (
    <>
      <header>
        <img src={logo} />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/highscore" element={<Highscore />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/user" element={<UserPage />} />
        <Route path="/team" element={<TeamPage />} />

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
              <Link to="/profile">
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
