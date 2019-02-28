import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../components/Board';

describe('Board', () => {
  const wrapper = shallow(<Board />);

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  })
})