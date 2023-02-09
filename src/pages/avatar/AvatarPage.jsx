import { Avatar } from "../../components/avatar/Avatar";
import { Byline } from "../../components/byline/Byline";
import styles from "./AvatarPage.module.css";

export const AvatarPage = () => {
    return (
        <div className={styles.avatarpage}>
            <Avatar className={styles.avatar} />
            <Byline className={styles.byline}> super cool </Byline>
        </div>
    );
};
