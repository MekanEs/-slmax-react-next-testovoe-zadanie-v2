import { useContext, useEffect } from 'react';
import { AppContext, STORED_TAGS } from './favContext';
import { Photo } from '@/app/types';

interface useTagsRes {
  updateTags: (action: string, tag: string) => void;
  tags: string[] | undefined;
}
export function useTags(): useTagsRes {
  const { tags, setTags } = useContext(AppContext);

  const updateTags = (action: string, tag: string) => {
    if (tags) {
      if (action === 'add') {
        setTags && setTags([...tags, tag]);
      }
      if (action === 'delete') {
        setTags && setTags(tags?.filter((el) => el !== tag));
      }
    }
  };

  return { tags, updateTags };
}

interface useFavsRes {
  updateFavs: (action: string, item: Photo) => void;
  favs: Photo[] | undefined;
}
export function useFavs(): useFavsRes {
  const { favs, setFavs } = useContext(AppContext);

  const updateFavs = (action: string, item: Photo) => {
    if (favs) {
      if (action === 'add') {
        setFavs && setFavs([...favs, item]);
      }
      if (action === 'delete') {
        setFavs && setFavs(favs.filter((image) => image.id !== item.id));
      }
    }
  };

  return { favs, updateFavs };
}
