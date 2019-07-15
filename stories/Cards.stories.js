import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


export const cards = Array(9).fill('X');
export const actions = {
  handlePick: action('handlePick'),
}
