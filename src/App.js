import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Reserve } from './pages/Reserve';
import { Home } from './pages/Home';
import { ProfilePage } from './pages/profile/ProfilePage';
import { AvatarPage } from "./pages/avatar/AvatarPage";

import { UserPage } from './pages/profile/user/UserPage';
import { TeamPage } from './pages/profile/team/TeamPage';


export function App() {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reserve">Reserve</Link></li>

          <li>
            <Link to="/avatar">Avatar</Link>
          </li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/team">Team</Link></li>


        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/avatar" element={<AvatarPage />} />

        <Route path="/user" element={<UserPage />} />
        <Route path="/team" element={<TeamPage />} />

      </Routes>
    </>
  )
}


export default App;
