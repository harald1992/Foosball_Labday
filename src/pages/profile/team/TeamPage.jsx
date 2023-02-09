import styles from "./TeamPage.module.css";
import { Link } from 'react-router-dom';

export const TeamPage = () => {

    const title = 'Team Page';

    return (
        <div className={styles.userpage}>
            <ul className={styles["profile-nav"]} >
                <li><Link to="/profile">Back to Profile</Link></li>
            </ul>

            <h1>{title}</h1>

        </div >
    );
};


