import React from 'react'
import { storiesOf } from '@storybook/react'
import {actions, cards} from './Cards.stories'


import Board from '../src/components/Board'
import Cards from '../src/components/Cards'

storiesOf('Game|TicTac', module)
  .add('Board', () => <Board />)
  .add('plain card', () => <Cards cards={cards} {...actions} />)