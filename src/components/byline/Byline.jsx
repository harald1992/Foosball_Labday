import styles from "./Byline.module.css";

export const Byline = ({ children, className }) => {
    return (
        <div className={`${styles.byline} ${className ? className : ""}`}>
            {children}
        </div>
    );
};
