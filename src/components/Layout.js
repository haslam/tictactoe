import React from 'react';
import styles from '../styles/layout.module.css';
import Board from './Board';


export default function Layout (props) {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutBox}>
        <div>
          <h1 className={styles.appTitle}>TIC TAC TOE</h1>
          <Board />
        </div>
      </div>
      <nav>

      </nav>
    </div>
  )
}