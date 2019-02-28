import React from 'react';
import styles from '../styles/card.module.css';

export default function Cards ({cards, handlePick}) {
  return (
    <div className={styles.cards}>
      {
        cards.map((card, index) => (
          <div className={styles.card} key={index} onClick={() => handlePick(index)}>
            {card}
          </div>
        ))
      }
    </div>
    
  )
}