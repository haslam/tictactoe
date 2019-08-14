import React from 'react'
import { shallow } from 'enzyme'
import Board from '../../components/Board'

let wrapper, cards
beforeEach(() => {
  cards = Array(9).fill(null)
  wrapper = shallow(<Board />)
})

describe('Board', () => {
  it('should update state if card is clicked', () => {
    wrapper.find('Cards').prop('handlePick')(0)
    expect(wrapper.state('cards')[0]).toEqual('X')
    expect(wrapper.state('nextPlay')).toBe(false)
  })

  it('should show winning text as X', () => {
    wrapper.setState({ win: 'X' })
    expect(wrapper.find('h2').text()).toEqual('Winner is X')
  })

  it('should show winning text as O', () => {
    wrapper.setState({ win: 'O' })
    expect(wrapper.find('h2').text()).toEqual('Winner is O')
  })

  it('should reset cards if reset button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.state('cards')).toEqual(cards)
    expect(wrapper.state('nextPlay')).toBe(true)
    expect(wrapper.state('win')).toBe('')
  })

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
