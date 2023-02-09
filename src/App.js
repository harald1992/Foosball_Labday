import logo from './logo_CapFoosballCup.svg';
import faStar from './star.svg';
import faCalendarDay from './calendar-day.svg';
import faCameraRetro from './camera-retro.svg';
import faUsers from './users.svg';
import faChevronRight from './chevron-right.svg';
import faChevronLeft from './chevron-left.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Highscore } from './pages/Highscore';
import { Reserve } from './pages/Reserve';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
    <header>
      <img src={logo} />
    </header>
    <div>
        <img class="chevron-icon-width" src={faChevronLeft} />
      <img class="chevron-icon-width" src={faChevronRight} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/highscore" element={<Highscore />} />
      </Routes>

      <div>
        <ol>
          <li>Team Boe 10-0</li>
          <li>Team Schrik 10-6</li>
          <li>Team one 6-0</li>
          <li>Team A-team 4-4</li>
          <li>Team Bla 3-2</li>
        </ol> 
      </div>
      
      <footer class="footer">
        <nav>
          <ul className="navigation">
            <li><Link to="/"><img class="menu-icon-width" src={faCalendarDay} /></Link></li>
            <li><Link to="/reserve"><img class="menu-icon-width" src={faCameraRetro} /></Link></li>
            <li><Link to="/"><img class="menu-icon-width" src={faUsers} /></Link></li>
            <li><Link to="/highscore"><img class="menu-icon-width" src={faStar} /></Link></li>
          </ul>
        </nav> 
      </footer>
    </>
  )
}


// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/books">Books</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/books" />

//       </Routes>
//   );
// }

export default App;
