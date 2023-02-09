import styles from "./ProfilePage.module.css";
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
    const teams = [];
    const team1 = {
        name: 'Your Team Name', members: [{ name: 'Henk' }, { name: 'Valerie' }]
    };


    teams.push(team1);

    const title = 'Profile Page';


    return (
        <div className={styles.userpage}>
            <ul className={styles["profile-nav"]} >
                <li><Link to="/user">User</Link></li>
                <li><Link to="/team">Team</Link></li>

            </ul>
            <hr />
            <h1>{title}</h1>
            <hr />
            <div>

                <h5>{team1.name}</h5>

                {
                    team1.members.map(member => <div key={member.name}>{member.name}</div>)
                    // teams.map(team =>
                    //     <div>
                    //         <hr></hr>
                    //         <div className={styles["flex-row"]} key={team}>
                    //             {team.name}
                    //             {team.members.map(member => <div key={member.name}>{member.name}</div>)}
                    //         </div>
                    //         <hr></hr>
                    //     </div>
                    // )

                }
            </div>
        </div >
    );
};


