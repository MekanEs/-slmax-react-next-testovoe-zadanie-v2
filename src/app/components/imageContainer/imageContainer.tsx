import React, { useEffect, useContext } from 'react';
import styles from './imageContainer.module.css';
import Image from 'next/image';
import { Photo, responseType } from '../../types';
import { useFavs } from '../provider/useFavContext';
import cx from 'classnames';
import { FAVORITES_KEY } from '../provider/favContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../provider/AuthProvider';
const ImageContainer: React.FC<{ data: Photo[] }> = ({ data }) => {
  const { favs, updateFavs } = useFavs();

  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  useEffect(() => {
    localStorage.setItem(user?.email || FAVORITES_KEY, JSON.stringify(favs));
  }),
    [favs, user];
  return (
    <ul className={styles.photoContainer}>
      {data.map((image) => {
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
                  sizes='(max-width: 300px)'
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <button
                  onClick={() => {
                    Boolean(favs?.filter((el) => el.id === image.id)[0])
                      ? updateFavs('delete', image)
                      : updateFavs('add', image);
                  }}
                  className={styles.favBtn}
                >
                  <Image
                    className={cx(
                      styles.favoriteIcon,
                      Boolean(favs?.filter((el) => el.id === image.id)[0]) &&
                        styles['active-favorite'],
                    )}
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
