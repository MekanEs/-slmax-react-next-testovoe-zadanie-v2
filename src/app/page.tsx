'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import ImageContainer from './components/imageContainer/imageContainer';
import Loader from '@/utils/loader/loader';
import { responseType } from './types';
import { UpdateData, loadImages } from '@/utils/loadImages/loadImages';
import Tags from './components/tags/tags';
import { getcurrentURL } from '@/utils/getUrl/getURL';

export default function Directory() {
  const [data, setData] = useState<responseType>(null);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState<string>('relevance');
  const [page, setPage] = useState<number>(1);
  const [tag, setTag] = useState<string>(localStorage.getItem('currentTag') || 'cat');

  let url = useRef(getcurrentURL());
  useEffect(() => {
    url.current = getcurrentURL(sort, tag, page);
  }, [sort, tag, page]);
  useEffect(() => {
    loadImages(setData, setLoading, url.current);
  }, [url]);

  return (
    <main className={styles.main_page}>
      <Tags />
      {isLoading ? <Loader /> : data && <ImageContainer data={data} />}
      <button
        onClick={() => {
          UpdateData(setData, setLoading, url.current);
        }}
      >
        load more
      </button>
    </main>
  );
}
