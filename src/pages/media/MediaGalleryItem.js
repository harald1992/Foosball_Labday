import styles from './MediaGallery.module.css';

export const MediaGalleryItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={props.url} alt={props.title} />
      </div>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}