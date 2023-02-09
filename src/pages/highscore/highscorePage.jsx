import styles from "./highscorePage.module.css";

export const HighscorePage = () => {
  return (
    <div className={styles.highscorepage}>
      <h1>Highscore</h1>
      <div className="highscore-list">
        <ol>
          <li>
            <div>Team One</div>
            <div>10-0</div>
          </li>
          <li>
            <div>Team Two</div>
            <div>9-8</div>
          </li>
          <li>
            <div>Team Three</div>
            <div>7-0</div>
          </li>
          <li>
            <div>Team Four</div>
            <div>6-6</div>
          </li>
          <li>
            <div>Team Five</div>
            <div>4-4</div>
          </li>
        </ol>
      </div>
    </div>
  );
};

// export function Highscore() {
//   return (
//     <div>
//       <h1>Highscore</h1>
//       <div>
//         <ol class="highscore-list">
//           <li>Team Boe 10-0</li>
//           <li>Team Schrik 10-6</li>
//           <li>Team one 6-0</li>
//           <li>Team A-team 4-4</li>
//           <li>Team Bla 3-2</li>
//         </ol>
//       </div>
//     </div>
//   );
// }
