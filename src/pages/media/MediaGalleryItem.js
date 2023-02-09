import styles from './MediaGallery.module.css';

export const MediaGalleryItem = (props) => {
  return (
    <div className={styles.item}>
        <img src={props.url} alt={props.title} />
    </div>
  );
}