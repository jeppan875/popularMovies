import React from 'react';
import styles from './styles.module.css';

export const HEADER_HEIGHT = '80px';

function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>Popular Movies</h1>
      </div>
    </header>
  );
}

export default Header;
