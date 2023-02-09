import { useEffect, useState } from "react";
import styles from "./Byline.module.css";
import edit from "../../assets/edit.png";

export const Byline = ({ className }) => {
    const [byline, setByline] = useState("cool byline");
    const [showEdit, setShowEdit] = useState(false);
    const [bylineTemp, setBylineTemp] = useState("");

    const handleEditName = (event) => {
        const sentence = event.target.value;
        setByline(sentence);
        localStorage.setItem("byline", sentence);
    };

    const handleShowEdit = () => {
        setShowEdit((edit) => !edit);
        setBylineTemp("" + byline);
    };

    useEffect(() => {
        const bylineFromStorage = localStorage.getItem("byline");
        if (bylineFromStorage) setByline(bylineFromStorage);
    }, []);

    return (
        <div className={`${styles.byline} ${className ? className : ""}`}>
            <span className={styles["byline-text"]}>{byline}</span>
            {showEdit && (
                <input
                    className={styles.input}
                    onChange={handleEditName}
                    defaultValue={bylineTemp}
                />
            )}
            <img
                className={styles["edit-image"]}
                src={edit}
                onClick={handleShowEdit}
            />
        </div>
    );
};
