'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import ImageContainer from './imageContainer';
import Loader from '@/components/loader/loader';
import Header from '@/app/heade';

export type responseType = {
  photos: {
    photo: {
      title: string;
      url_l: string;
      id: string;
    }[];
  };
};

export default function Directory() {
  const [data, setData] = useState<
    | responseType
    | {
        photos: {
          photo: [];
        };
      }
  >({
    photos: {
      photo: [],
    },
  });
  const [isLoading, setLoading] = useState(true);
  const loadImages = () => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setData((prev: responseType) => ({
          ...prev,
          photos: { ...prev.photos, photo: [...prev.photos.photo, ...data.photos.photo] },
        }));
        setLoading(false);
      });
  };
  const url2 = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=586c0f94c1488f98af2ee818df093d50&tags=dog&sort=relevance&extras=url_l&min_upload_date=1444752183&in_gallery=true&per_page=18&page=5&format=json&nojsoncallback=1`;

  useEffect(() => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url2]);

  console.log(data);
  return isLoading ? (
    <Loader />
  ) : (
    <main>
      <div>
        sort by
        <button>default</button>
        <button>interestingness</button>
        <button>date-posted</button>
      </div>
      <ImageContainer data={data} />
      <button
        onClick={() => {
          loadImages();
        }}
      >
        load more
      </button>
    </main>
  );
}
