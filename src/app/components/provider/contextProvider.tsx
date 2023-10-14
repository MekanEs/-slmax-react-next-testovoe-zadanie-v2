'use client';

import React, { FC, useMemo, useState, useContext } from 'react';
import { AppContext, FAVORITES_KEY, STORED_TAGS } from './favContext';
import { Photo } from '@/app/types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from './AuthProvider';

export const ContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const storedItems = localStorage.getItem(user?.email || FAVORITES_KEY);
  const storedTags = localStorage.getItem(STORED_TAGS);

  const [favs, setFavs] = useState<Photo[]>((storedItems && JSON.parse(storedItems)) || []);
  const [tags, setTags] = useState<string[]>(
    (storedTags && JSON.parse(storedTags)) || ['dog', 'cat'],
  );

  const defaultProviderValue = useMemo(
    () => ({
      favs: favs,
      setFavs: setFavs,
      tags: tags,
      setTags: setTags,
    }),
    [favs, tags],
  );
  return <AppContext.Provider value={defaultProviderValue}>{children}</AppContext.Provider>;
};
