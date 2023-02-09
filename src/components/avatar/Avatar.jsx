import styles from "./Avatar.module.css";
import edit from "../../assets/edit.png";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

export const Avatar = ({ className }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const maxNumber = 69;

    const onChange = (imageList) => {
        // data for submit
        debugger;
        setSelectedImage(imageList[0].data_url);
        localStorage.setItem("avatar", imageList[0].data_url);
    };

    useEffect(() => {
        const avatar = localStorage.getItem("avatar");
        if (avatar) {
            setSelectedImage(avatar);
        }
    }, []);

    return (
        <ImageUploading
            multiple
            value={selectedImage}
            onChange={onChange}
            onImageUpdate={onChange}
            maxNumber={1}
            dataURLKey="data_url"
        >
            {({ onImageUpload, onImageUpdate }) => (
                <div
                    className={`${styles.avatar} ${className ? className : ""}`}
                >
                    <div className={styles["avatar-image"]}>
                        {selectedImage ? (
                            <div className="image-item">
                                <img
                                    src={selectedImage}
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        ) : (
                            <div className={styles.placeholder}></div>
                        )}
                    </div>
                    {selectedImage ? (
                        <img
                            className={styles["edit-image"]}
                            src={edit}
                            onClick={onImageUpdate[0]}
                        />
                    ) : (
                        <img
                            className={styles["edit-image"]}
                            src={edit}
                            onClick={onImageUpload}
                        />
                    )}
                </div>
            )}
        </ImageUploading>
    );
};
