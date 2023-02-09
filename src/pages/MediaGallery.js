import { useState } from 'react';
import styles from './MediaGallery.module.css';

function MediaGallery() {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');

  function handleChange(e) {
    const id = files.length + 1;
    setFiles([
      ...files,
      { url: URL.createObjectURL(e.target.files[0]), title: 'Shame', id }
    ]);
    setUrl('');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {
          files.map((media, i) => <MediaGalleryItem key={media.id} url={media.url} title={media.title} />)
        }
      </div>
      <MediaGalleryUpload onChange={handleChange} url={url} />
    </div>
  );
}

function MediaGalleryItem(props) {
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

function MediaGalleryUpload(props) {
  function onUploadClick() {
    document.getElementById('file-input').click();
  }
  return (
    <div className={styles.upload}>
      <button onClick={onUploadClick}>Add Image</button>
      <input id="file-input" type="file" onChange={props.onChange} value={props.url} hidden/>
    </div>
  )
}


export default MediaGallery;