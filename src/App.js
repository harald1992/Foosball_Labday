import logo from "./logo_CapFoosballCup.svg";
import faStar from "./star.svg";
import faCalendarDay from "./calendar-day.svg";
import faCameraRetro from "./camera-retro.svg";
import faUsers from "./users.svg";
import faUserFriends from "./assets/user-friends.svg";
import faSearch from "./assets/search.svg";
import faChevronRight from "./chevron-right.svg";
import faChevronLeft from "./chevron-left.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Highscore } from "./pages/Highscore";
import { Reserve } from "./pages/Reserve";
import { Home } from "./pages/Home";
import { AvatarPage } from "./pages/avatar/AvatarPage";
import { CompetitionPage } from "./pages/competition/CompetitionPage";
import { SearchTablePage } from "./pages/search-table/SearchTablePage";
import { MediaGallery } from "./pages/media/MediaGallery";

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
                    <Route path="/highscore" element={<Highscore />} />
                    <Route path="/avatar" element={<AvatarPage />} />
                    <Route path="/competition" element={<CompetitionPage />} />
                    <Route path="/search" element={<SearchTablePage />} />
                </Routes>
            </div>

            <footer class="footer">
                <nav>
                    <ul className="navigation">
                        <li>
                            <Link to="/">
                                <img
                                    class="menu-icon-width"
                                    src={faCalendarDay}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/media">
                                <img
                                    class="menu-icon-width"
                                    src={faCameraRetro}
                                />
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
                        <li>
                            <Link to="/competition">
                                <img
                                    class="menu-icon-width"
                                    src={faUserFriends}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/search">
                                <img class="menu-icon-width" src={faSearch} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default App;
