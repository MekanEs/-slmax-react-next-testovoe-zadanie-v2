import React from 'react';
import styles from './page.module.css';
import { responseType } from './page';
import Image from 'next/image';
const ImageContainer: React.FC<{ data: responseType }> = ({ data }) => {
  return (
    <ul className={styles.photoContainer}>
      {data &&
        data.photos &&
        data.photos.photo.map((image) => {
          return (
            <li key={image.id} className={styles.image}>
              <Image
                loader={() => image.url_l}
                src={image.url_l}
                alt='photo'
                fill={true}
                style={{ objectFit: 'cover' }}
              />
              <button className={styles.favBtn}>
                <Image src='/fav.png' alt='fav' width={30} height={30} />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ImageContainer;
