'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import ImageContainer from './components/imageContainer/imageContainer';
import Loader from '@/utils/loader/loader';
import { responseType } from './types';
import { UpdateData, loadImages } from '@/utils/loadImages/loadImages';
import Tags from './components/tags/tags';
import { getcurrentURL } from '@/utils/getUrl/getURL';
import Sort from './components/sort/sort';

export default function Directory() {
  const [data, setData] = useState<responseType>(null);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState<string>('relevance');
  const [page, setPage] = useState<number>(1);
  const [currentTag, setTag] = useState<string>(localStorage.getItem('currentTag') || 'cat');

  let url = useRef(getcurrentURL());
  useEffect(() => {
    // setLoading(true);
    url.current = getcurrentURL(sort, currentTag, page);
    loadImages(setData, setLoading, url.current);
  }, [sort, currentTag, page]);

  return (
    <main className={styles.main_page}>
      <Tags setTag={setTag} currentTag={currentTag} />
      <Sort setSort={setSort} sort={sort} />
      {isLoading ? <Loader /> : data && <ImageContainer data={data.photos.photo} />}
      <button
        className={styles.loadBtn}
        onClick={() => {
          setPage(page + 1);
          UpdateData(setData, setLoading, url.current);
        }}
      >
        load more
      </button>
    </main>
  );
}
