import { useContext } from 'react';
import { AppContext, item } from './favContext';

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
  updateFavs: (action: string, item: item) => void;
  favs: item[] | undefined;
}
export function useFavs(): useFavsRes {
  const { favs, setFavs } = useContext(AppContext);

  const updateFavs = (action: string, item: item) => {
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
