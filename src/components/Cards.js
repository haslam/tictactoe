import React from 'react';
import PropTypes from 'prop-types';
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
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handlePick: PropTypes.func.isRequired,
}
Cards.defaultProps = {
  cards: Array(9).fill(null),
}

