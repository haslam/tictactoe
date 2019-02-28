import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

describe('Layout', () => {
  const wrapper = shallow(<Layout />);
  it('should have TIC TAC TOE title', () => {
    expect(wrapper.find('h1').text()).toContain('TIC TAC TOE');
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  })
})