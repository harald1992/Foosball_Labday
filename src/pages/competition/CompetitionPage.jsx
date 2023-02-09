import { Byline } from "../../components/byline/Byline";
import styles from "./CompetitionPage.module.css";

export const CompetitionPage = () => {
    return (
        <div className={styles.competitionpage}>
            <h1>Competition</h1>
            <div className={`${styles.toplevel} ${styles.level}`}>
                <Byline
                    className={styles.byline}
                    storeName="round4team1"
                    bylineText="winner semifinals"
                />
                <span className={styles.divider}>-</span>
                <Byline
                    className={styles.byline}
                    storeName="round4team2"
                    bylineText="winner semifinals"
                />
            </div>
            <div className={`${styles.secondlevel} ${styles.level}`}>
                <div className={styles.toplevel}>
                    <Byline
                        className={styles.byline}
                        storeName="round3team1"
                        bylineText="winner quaterfinals"
                    />
                    <span className={styles.divider}>-</span>
                    <Byline
                        className={styles.byline}
                        storeName="round3team2"
                        bylineText="winner quaterfinals"
                    />
                </div>
                <div className={styles.toplevel}>
                    <Byline
                        className={styles.byline}
                        storeName="round3team3"
                        bylineText="winner quaterfinals"
                    />
                    <span className={styles.divider}>-</span>
                    <Byline
                        className={styles.byline}
                        storeName="round3team4"
                        bylineText="winner quaterfinals"
                    />
                </div>
            </div>
        </div>
    );
};
