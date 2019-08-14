import React from 'react'
import { shallow } from 'enzyme'
import Cards from '../../components/Cards'

const testCards = Array(9).fill('X')
let wrapper, handlePick

beforeEach(() => {
  handlePick = jest.fn()
  wrapper = shallow(<Cards cards={testCards}
    handlePick={handlePick} />)
})

describe('Card', () => {
  it('should have 9 boxes', () => {
    expect(wrapper.children()).toHaveLength(9)
  })

  it('should ensure event is fired when clicked', () => {
    wrapper.children().forEach(node => {
      node.simulate('click')
      expect(handlePick).toHaveBeenCalled()
    })
  })

  it('should ensure component is rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
