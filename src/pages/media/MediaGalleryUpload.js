import styles from './MediaGallery.module.css';

export const MediaGalleryUpload = (props) => {
  
  const onUploadClick = () => {
    document.getElementById('file-input').click();
  }
  return (
    <div className={styles.upload}>
      <button onClick={onUploadClick}>Add Image</button>
      <input id="file-input" type="file" onChange={props.onUpload} value={props.url} hidden/>
    </div>
  )
}