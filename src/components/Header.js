import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

export function Header () {
  return (
    <header>
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <h1>TIC TAC TOE</h1>
      </div>
      <nav>

      </nav>
    </div>

    </header>
  )
}