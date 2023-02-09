import { Byline } from "../../components/byline/Byline";
import styles from "./SearchTablePage.module.css";

export const SearchTablePage = () => {
    return (
        <div className={styles.searchtablepage}>
            <h1>Where did you put the table?</h1>
            <Byline
                className={styles.byline}
                storeName="whereistable"
                bylineText="4th floor next to coffee machine"
            />
        </div>
    );
};
