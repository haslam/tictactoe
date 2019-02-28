import React from 'react';
import Cards from './Cards'
import styles from '../styles/board.module.css';
import { resetButton } from '../styles/button.module.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(9).fill(null),
      nextPlay: true,
      win: ''
    }
    this.handlePick = this.handlePick.bind(this);
    this.resetPicks = this.resetPicks.bind(this);
  }

  resetPicks() {
    this.setState({
      cards: Array(9).fill(null),
      nextPlay: true,
      win: '',
    })
  }
  /**
   * pick handler for card play
   * @param {*} index Takes in zero index of the array item
   */
  handlePick(index) {
    console.log(index);
    //head back if card already clicked
    if(this.state.cards[index] !== null || this.gameWinner(this.state.cards)) 
      return;

    const reCard = this.state.cards.slice(0);
    reCard[index] = this.state.nextPlay ? 'X' : 'O';
    this.setState({ 
      cards: reCard,
      nextPlay: !this.state.nextPlay,
     })
    
  }
  
  gameWinner(picks) {
      const rowMix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let row of rowMix) {
        const [a, b, c] = row;
        if (picks[a] && picks[a] === picks[b] && picks[a] === picks[c]) {

          //set the winning pick
          this.setState({ win: picks[a] });
          //reset cards after 3 seconds to allow user read winning pick before clear
          setTimeout(() => {
            this.resetPicks()
          }, 3000);

          return picks[a];
        }
      }
      return false;
    }

    render() {
      return (
        <div>
          <h2 className={styles.winnerText}>
            {this.state.win && `Winner is ${this.state.win}`}
          </h2>
          <Cards
            cards={this.state.cards}
            handlePick={this.handlePick}
          />
          <button className={resetButton} onClick={() => this.resetPicks()}>Reset</button>
        </div>
      )
    }

  }

