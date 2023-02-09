import styles from "./UserPage.module.css";
import { Link } from "react-router-dom";
import { Byline } from "../../../components/byline/Byline";
import { AvatarPage } from "../../avatar/AvatarPage";

export const UserPage = () => {
    const title = "Users Profile";


    return (
        <div>

            <h1>{title}</h1>
            <br />

            <AvatarPage />
        </div>
    );
};
