import React from 'react';
import styles from './imageContainer.module.css';
import Image from 'next/image';
import { responseType } from '../../types';

const ImageContainer: React.FC<{ data: responseType }> = ({ data }) => {
  //TODO: filtering if image is already in favorites =>useContext

  return (
    <ul className={styles.photoContainer}>
      {data &&
        data?.photos &&
        data.photos.photo.map((image) => {
          return (
            image.url_l && (
              <li key={image.id} className={styles.card}>
                <div className={styles.image_div}>
                  {' '}
                  <Image
                    className={styles.image}
                    loader={() => image.url_l}
                    src={image.url_l}
                    alt='photo'
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                  <button className={styles.favBtn}>
                    <Image
                      className={styles.favoriteIcon}
                      src='/fav.png'
                      alt='fav'
                      width={30}
                      height={30}
                    />
                  </button>
                </div>

                <p className={styles.image_title}>{image.title}</p>
              </li>
            )
          );
        })}
    </ul>
  );
};

export default ImageContainer;
