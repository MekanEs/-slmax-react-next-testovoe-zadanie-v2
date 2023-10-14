'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import styles from './page.module.css';
import ImageContainer from './components/imageContainer/imageContainer';
import Loader from '@/utils/loader/loader';
import { responseType } from './types';
import { loadImages } from '@/utils/loadImages/loadImages';
import Tags from './components/tags/tags';
import { getcurrentURL } from '@/utils/getUrl/getURL';
import Sort from './components/sort/sort';
import { v4 as uuid } from 'uuid';
import cx from 'classnames';
export default function Directory() {
  const [data, setData] = useState<responseType>(null);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState<string>('relevance');
  const [page, setPage] = useState<number>(1);
  const [currentTag, setTag] = useState<string>(localStorage.getItem('currentTag') || 'cat');

  let url = useRef(getcurrentURL());
  useEffect(() => {
    url.current = getcurrentURL(sort, currentTag, page);
    loadImages(setData, setLoading, url.current);
  }, [page, sort, currentTag]);

  useEffect(() => {
    setPage(1);
  }, [sort, currentTag]);

  const pageArr = Array(10)
    .fill(page - 1 > 0 ? page - 1 : page || 1)
    .map((el, index) => el + index);
  return (
    <main className={styles.main_page}>
      <Tags setTag={setTag} currentTag={currentTag} />
      <Sort setSort={setSort} sort={sort} />
      {isLoading ? <Loader /> : data && <ImageContainer data={data?.photos.photo} />}
      <div className={styles.pagination}>
        {[...pageArr].map((el) => {
          return (
            <button
              onClick={() => setPage(el)}
              className={cx(styles.pagebtn, page === el && styles.pageActive)}
              key={uuid()}
            >{`${el}`}</button>
          );
        })}
        <p>...</p>
        <button
          onClick={() => data?.photos.total && setPage(data?.photos.total)}
          className={styles.pagebtn}
        >
          {data?.photos.total}
        </button>
      </div>
    </main>
  );
}
