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
  //Reset the state to init default
  resetPicks() {
    this.setState({
      cards: Array(9).fill(null),
      nextPlay: true,
      win: '',
    })
  }
  /**
   * pick handler for card play
   * @param {int} index Takes in zero index of the array item
   */
  handlePick(index) {
    console.log(index);
    //head back if card already clicked
    if(this.state.cards[index] !== null || this.gameWinner(this.state.cards)) 
      return;

    const reCard = this.state.cards.slice(0); //create a new copy of the cards array so as not to mutate.
    reCard[index] = this.state.nextPlay ? 'X' : 'O'; //set index value to X or O depending on nextPlay boolean value
    this.setState({ 
      cards: reCard,
      nextPlay: !this.state.nextPlay, //flip and set nextPlay
     })
    
  }
  
  /**
   * Calculate winning pick based on matching set rows
   * Takes in the complete array
   * @param {Array} picks returns a single key value of the winning row.
   */
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
        const [a, b, c] = row;  //destructure array value as a b c

        //check if first value exist and first value is same as second and third [a b c]
        //if so, it's a match
        if (picks[a] && picks[a] === picks[b] && picks[a] === picks[c]) {

          //set the winning pick [ X or O ]
          this.setState(() => ({ win: picks[a] }));

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

