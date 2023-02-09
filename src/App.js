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
    <div className="app-container">
      <header>
        <img src={logo} alt="logo"/>
      </header>

      <div className="content">
        <Routes>
          <Route path="/reserve" element={<Home />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/highscore" element={<Highscore />} />
          <Route path="/avatar" element={<AvatarPage />} />
        </Routes>
      </div>

      <footer className="footer">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/reserve">
                <img className="menu-icon-width" src={faCalendarDay} alt="calendar icon"/>
              </Link>
            </li>
            <li>
              <Link to="/media">
                <img className="menu-icon-width" src={faCameraRetro} alt="camera icon"/>
              </Link>
            </li>
            <li>
              <Link to="/avatar">
                <img className="menu-icon-width" src={faUsers} alt="users icon"/>
              </Link>
            </li>
            <li>
              <Link to="/highscore">
                <img className="menu-icon-width" src={faStar} alt="star icon"/>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
