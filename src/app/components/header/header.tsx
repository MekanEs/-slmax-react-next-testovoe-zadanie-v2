'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useRef, useEffect } from 'react';
import styles from './header.module.css';
import { AuthContext, authProject } from '../provider/AuthProvider';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header: React.FC = () => {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  return (
    <header className={styles.header}>
      <Link href='/'>Main</Link> <Link href='/favorites'>Favorites</Link>
      {user ? (
        <>
          <p>{user.email}</p>

          <button
            onClick={() => {
              auth && auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </header>
  );
};

export default Header;
