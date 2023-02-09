import { Avatar } from "../../components/avatar/Avatar";
import { Byline } from "../../components/byline/Byline";
import styles from "./CompetitionPage.module.css";

export const CompetitionPage = () => {
    return (
        <div className={styles.avatarpage}>
            competititon
            <Byline
                className={styles.byline}
                storeName="byline"
                bylineText="cool byline"
            />
        </div>
    );
};
