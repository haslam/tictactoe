import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Board from '../components/Board'
import Cards from '../components/Cards'

import boardNotes from '../components/boardNotes.md'

const cards = Array(9).fill('X')
const actions = {
  handlePick: action('handlePick'),
  resetPicks: action('reset clicked')
}
storiesOf('Gaming|TicTac', module)
  .add('Board', () => <Board />, {
    notes: {
      markdown: boardNotes
    }
  })
  .add('plain card', () => <Cards cards={cards} {...actions} />)
