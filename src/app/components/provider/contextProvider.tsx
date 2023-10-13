'use client';

import React, { FC, useMemo, useState } from 'react';
import { AppContext, FAVORITES_KEY, STORED_TAGS, item } from './favContext';

export const ContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const storedItems = localStorage.getItem(FAVORITES_KEY);
  const storedTags = localStorage.getItem(STORED_TAGS);
  const [favs, setFavs] = useState<item[]>((storedItems && JSON.parse(storedItems)) || []);
  const [tags, setTags] = useState<string[]>(
    (storedTags && JSON.parse(storedTags)) || ['dog', 'cat'],
  );

  const defaultPRoviderValue = useMemo(
    () => ({
      favs: favs,
      setFavs: setFavs,
      tags: tags,
      setTags: setTags,
    }),
    [favs, tags],
  );
  return <AppContext.Provider value={defaultPRoviderValue}>{children}</AppContext.Provider>;
};
