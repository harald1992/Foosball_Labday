import styles from "./ProfilePage.module.css";
import { Link } from 'react-router-dom';
import faUsers from "../../assets/users.svg";
import faUserFriends from "../../assets/user-friends.svg";

export const ProfilePage = () => {
    const teams = [];
    const team1 = {
        name: `You do not have a team yet. Go to 'team' to create one`, members: []
    };


    teams.push(team1);

    const title = 'Profile Page';


    return (
        <div className={styles.userpage}>

            <ul className={styles["profile-nav"]} >
                <li>
                    <Link to="/user">User <img className="menu-icon-width" src={faUsers} /></Link>
                </li>
                <li>
                    <Link to="/team">Team <img className="menu-icon-width" src={faUserFriends} />
                    </Link></li>

            </ul>

            <h1>{title}</h1>

            <hr />
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


