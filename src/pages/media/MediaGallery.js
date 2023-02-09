import { useEffect, useState } from 'react';
import styles from './MediaGallery.module.css';

export const MediaGallery = () => {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');
  
  useEffect(() => {
    const images = JSON.parse(localStorage.getItem('images'));
    if(images) setFiles(images);
  }, [])

  const onUpload = (e) => {
    const id = files.length + 1;
    const file = { url: URL.createObjectURL(e.target.files[0]), title: 'Shame', id }

    setFiles((files) => {
      const updatedFiles = [...files, file];
      localStorage.setItem('images', JSON.stringify(updatedFiles));
      return updatedFiles;
    });
    
    setUrl('');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {
          files.map((media, i) => <MediaGalleryItem key={media.id} url={media.url} title={media.title} />)
        }
      </div>
      <MediaGalleryUpload onUpload={onUpload} url={url} />
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
      <input id="file-input" type="file" onChange={props.onUpload} value={props.url} hidden/>
    </div>
  )
}
