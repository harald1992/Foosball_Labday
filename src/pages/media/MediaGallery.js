import { useEffect, useState } from 'react';
import styles from './MediaGallery.module.css';
import { MediaGalleryItem } from './MediaGalleryItem';
import { MediaGalleryUpload } from './MediaGalleryUpload';

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
