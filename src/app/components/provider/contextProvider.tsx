/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { FC, useMemo, useState, useContext, useEffect } from 'react';
import { AppContext, FAVORITES_KEY, STORED_TAGS } from './favContext';
import { Photo } from '@/app/types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from './AuthProvider';

export const ContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);

  const [favs, setFavs] = useState<Photo[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    const storedItems =
      (user?.email && localStorage.getItem(user?.email)) || localStorage.getItem(FAVORITES_KEY);

    const storedTags = localStorage.getItem(STORED_TAGS);
    setFavs(storedItems && JSON.parse(storedItems));

    setTags(storedTags && JSON.parse(storedTags));
  }, [user, localStorage]);

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
