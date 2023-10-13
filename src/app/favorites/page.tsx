'use client'; // This is a client component 👈🏽

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Directory() {
  const [data, setData] = useState<
    | {
        photos: {
          photo: {
            title: string;
            url_l: string;
            id: string;
          }[];
        };
      }
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

  const url2 = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=586c0f94c1488f98af2ee818df093d50&tags=dog&sort=relevance&extras=url_l&min_upload_date=1444752183&in_gallery=true&per_page=10&page=1&format=json&nojsoncallback=1`;
  useEffect(() => {
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url2]);
  console.log(data);
  return (
    <main>
      <div>Hello World2</div>
      <div>
        sort by
        <button>default</button>
        <button>interestingness</button>
        <button>date-posted</button>
      </div>
      <ul>
        {data &&
          data.photos &&
          data.photos.photo.map((image) => {
            return (
              <li key={image.id}>
                <Image
                  loader={() => image.url_l}
                  src={image.url_l}
                  alt='photo'
                  width={700}
                  height={500}
                  style={{ objectFit: 'cover' }}
                />
              </li>
            );
          })}
      </ul>
    </main>
  );
}
