import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Reserve } from './pages/Reserve';
import { Home } from './pages/Home';
import MediaGallery from './pages/MediaGallery';

export function App() {
  return (
    <div className="app-container">
      <nav>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reserve">Reserve</Link></li>
          <li><Link to="/media">Wall of shame</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/media" element={<MediaGallery />} />
      </Routes>
    </div>
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
