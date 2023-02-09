import styles from "./UserPage.module.css";
import { Link } from "react-router-dom";
import { Byline } from "../../../components/byline/Byline";
import { AvatarPage } from "../../avatar/AvatarPage";

export const UserPage = () => {
    const title = "Users Profile";


    return (
        <div>
            <ul className={styles["profile-nav"]}>
                <li>
                    <Link to="/profile">Back to Profile</Link>
                </li>
            </ul>
            <h1>{title}</h1>
            <br />

            <AvatarPage />
        </div>
    );
};
