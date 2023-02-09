import styles from "./TeamPage.module.css";
import { useState } from "react";

export const TeamPage = () => {
    const title = "Team Page";
    const [teamName, setTeamName] = useState("");
    const [teamMemberOne, setMemberOne] = useState("");
    const [teamMemberTwo, setMemberTwo] = useState("");
    const [teamMemberThree, setMemberThree] = useState("");
    const [teamMemberFour, setMemberFour] = useState("");

    const [teamMembers, setTeamMembers] = useState([
        "name1",
        "name2",
        "name3",
        "name4",
    ]);

    const [showEdit, setShowEdit] = useState(true);

    const handleSetTeamName = (e) => {
        setTeamName(e.target.value);
    };

    const handleSetMemberName1 = (e) => {
        setMemberOne(e.target.value);
        let members = teamMembers;
        members[0] = e.target.value;
        setTeamMembers(members);
    };

    const handleSetMemberName2 = (e) => {
        setMemberTwo(e.target.value);
    };

    const handleSetMemberName3 = (e) => {
        setMemberThree(e.target.value);
    };

    const handleSetMemberName4 = (e) => {
        setMemberFour(e.target.value);
    };

    const handleShowEdit = (e) => {
        setShowEdit((edit) => !edit);
    };

    const handleCreateTeam = (e) => {
        // localStorage.setItem(storeName, sentence);
        setShowEdit((edit) => !edit);
    };

    return (
        <div className={styles.userpage}>
            {showEdit && (
                <div className={styles.teamform}>
                    <h1>{title}</h1>
                    Team Name:{" "}
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleSetTeamName}
                    />
                    name:{" "}
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleSetMemberName1}
                    />
                    name:{" "}
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleSetMemberName2}
                    />
                    name:{" "}
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleSetMemberName3}
                    />
                    name:{" "}
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleSetMemberName4}
                    />
                    <button
                        className={styles.button}
                        onClick={handleCreateTeam}
                    >
                        Create Team
                    </button>
                </div>
            )}

            {!showEdit && (
                <div className={styles.teamform}>
                    <p>Team Name: {teamName}</p>
                    <p> Name: {teamMemberOne}</p>
                    <p> Name: {teamMemberTwo}</p>
                    <p> Name: {teamMemberThree}</p>
                    <p> Name: {teamMemberFour}</p>

                    <button className={styles.button} onClick={handleShowEdit}>
                        Edit Team
                    </button>
                </div>
            )}
        </div>
    );
};
