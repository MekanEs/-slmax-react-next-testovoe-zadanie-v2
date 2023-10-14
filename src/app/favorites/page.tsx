'use client';

import Image from 'next/image';

import { useFavs } from '../components/provider/useFavContext';
import ImageContainer from '../components/imageContainer/imageContainer';

export default function Directory() {
  const { favs, updateFavs } = useFavs();

  return (
    <main>
      {favs && favs.length > 0 ? (
        <ImageContainer data={favs} />
      ) : (
        <p>there is nothing in favorites</p>
      )}
    </main>
  );
}
