import React, { useState } from "react";
import styles from "./highscorePage.module.css";

export const HighscorePage = () => {
    const [highscores, setHighscores] = useState([
        { team: "Team One", score: "10-0" },
        { team: "Team Two", score: "9-8" },
        { team: "Team Three", score: "7-0" },
        { team: "Team Four", score: "6-6" },
        { team: "Team Five", score: "4-4" },
    ]);

    const [teamName, setTeamName] = useState("");
    const [teamScore, setScore] = useState("");

    const handleSubmitHighScore = () => {
        setHighscores((highscores) => {
            return [
                ...highscores,
                {
                    team: teamName,
                    score: teamScore,
                },
            ];
        });
    };

    return (
        <div className={styles.highscorepage}>
            <h1>Highscore</h1>
            <div className="highscore-list">
                <ol>
                    {highscores.map((highscore, index) => (
                        <li key={index}>
                            <div>{highscore.team}</div>
                            <div>{highscore.score}</div>
                        </li>
                    ))}
                </ol>
            </div>

            <h2>Add highscore</h2>
            <label>TeamName</label>
            <input
                defaultValue={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <label>Score</label>
            <input
                defaultValue={teamScore}
                onChange={(e) => setScore(e.target.value)}
            />
            <button onClick={handleSubmitHighScore}>Submit score</button>
        </div>
    );
};
