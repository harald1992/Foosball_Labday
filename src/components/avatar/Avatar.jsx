import styles from "./Avatar.module.css";
import avatar from "../../assets/avatar.jpeg";
import edit from "../../assets/edit.png";
import { useState } from "react";

export const Avatar = ({ className }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleEditClick = () => {
        console.log("edit clicked");
    };
    return (
        <div className={`${styles.avatar} ${className ? className : ""}`}>
            <div className={styles["avatar-image"]}>
                <img className={styles.image} src={avatar} />
            </div>
            <button className={styles.edit} onClick={handleEditClick}>
                <img className={styles["edit-image"]} src={edit} />
            </button>
        </div>
    );
};
