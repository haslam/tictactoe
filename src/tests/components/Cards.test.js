import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../../components/Cards';

describe('Card', () => {
  const cards = Array(9).fill(null);
  const handlePick = jest.fn();
  it('should render as expected', () => {
    const wrapper = shallow(<Cards cards={cards} handlePick={handlePick} />);
    expect(wrapper).toMatchSnapshot();
  })
})