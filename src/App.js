import logo from "./assets/logo_CapFoosballCup.svg";
import faStar from "./assets/star.svg";
import faCalendarDay from "./assets/calendar-day.svg";
import faCameraRetro from "./assets/camera-retro.svg";
import faUsers from "./assets/users.svg";
import faUserFriends from "./assets/user-friends.svg";
import faSearch from "./assets/search.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Reserve } from "./pages/Reserve";
import  Home  from "./pages/Home";
import { AvatarPage } from "./pages/avatar/AvatarPage";
import { HighscorePage } from "./pages/highscore/highscorePage";
import { CompetitionPage } from "./pages/competition/CompetitionPage";
import { SearchTablePage } from "./pages/search-table/SearchTablePage";
import { MediaGallery } from "./pages/media/MediaGallery";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { UserPage } from "./pages/profile/user/UserPage";
import { TeamPage } from "./pages/profile/team/TeamPage";

export function App() {
  return (
    <div className="app-container">
      <header>
        <img src={logo} />
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/highscore" element={<HighscorePage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path="/search" element={<SearchTablePage />} />

          <Route path="/reserve" element={<Reserve />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/user" element={<UserPage />} />
          <Route path="/team" element={<TeamPage />} />

        </Routes>
      </div>

      <footer className="footer">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/" className="link">
                <img className="menu-icon-width" src={faCalendarDay} />
              </Link>
            </li>
            <li>
              <Link to="/media" className="link">
                <img className="menu-icon-width" src={faCameraRetro} />
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link">
                <img className="menu-icon-width" src={faUsers} />
              </Link>
            </li>
            <li>
              <Link to="/highscore" className="link">
                <img className="menu-icon-width" src={faStar} />
              </Link>
            </li>
            <li>
              <Link to="/competition" className="link">
                <img className="menu-icon-width" src={faUserFriends} />
              </Link>
            </li>
            <li>
              <Link to="/search" className="link">
                <img className="menu-icon-width" src={faSearch} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
