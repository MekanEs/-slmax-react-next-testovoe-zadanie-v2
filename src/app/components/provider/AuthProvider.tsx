'use client';
import { initializeApp } from 'firebase/app';
import React, { useMemo } from 'react';
import { Auth, User, getAuth } from 'firebase/auth';

import { createContext } from 'react';

export const app = initializeApp({
  apiKey: 'AIzaSyC-MEQANKgC-b14ZIXPY0Nz7mc_8mm4Tow',
  authDomain: 'my-project-303df.firebaseapp.com',
  projectId: 'my-project-303df',
  storageBucket: 'my-project-303df.appspot.com',
  messagingSenderId: '404411243994',
  appId: '1:404411243994:web:28faa61a90f197a67ef4e3',
});
export const authProject = getAuth(app);

export const AuthContext = createContext<{ auth: Auth; user: User | null }>({
  auth: authProject,
  user: authProject.currentUser,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defValue = { auth: authProject, user: authProject.currentUser };

  return <AuthContext.Provider value={{ ...defValue }}>{children}</AuthContext.Provider>;
};
