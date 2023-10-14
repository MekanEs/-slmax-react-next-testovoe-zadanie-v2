import { Photo } from '@/app/types';

import { createContext } from 'react';

export const FAVORITES_KEY = 'favorite_images';
export const STORED_TAGS = 'stored_tags';

export interface ContextProps {
  favs?: Photo[];
  setFavs?: (favs: Photo[]) => void;
  tags?: string[];
  setTags?: (tags: string[]) => void;
}

export const AppContext = createContext<ContextProps>({});
