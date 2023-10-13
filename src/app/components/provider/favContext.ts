import { createContext } from 'react';

export const FAVORITES_KEY = 'favorite_images';
export const STORED_TAGS = 'stored_tags';
export type item = { url_l: string; id: string; title: string };
export interface ContextProps {
  favs?: item[];
  setFavs?: (favs: item[]) => void;
  tags?: string[];
  setTags?: (tags: string[]) => void;
}

export const AppContext = createContext<ContextProps>({});
