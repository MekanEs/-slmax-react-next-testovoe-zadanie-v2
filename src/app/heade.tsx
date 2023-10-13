'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './page.module.css';
const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className={styles.header}>
      {path === '/' ? <Link href='/favorites'>Favorites</Link> : <Link href='/'>Main</Link>}
    </header>
  );
};

export default Header;
