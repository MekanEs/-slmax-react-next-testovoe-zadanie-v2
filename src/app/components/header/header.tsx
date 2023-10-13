'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './header.module.css';
const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className={styles.header}>
      <Link href='/'>Main</Link> <Link href='/favorites'>Favorites</Link>
    </header>
  );
};

export default Header;
