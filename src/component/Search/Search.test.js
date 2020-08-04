import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Search from './Search';

Enzyme.configure({ adapter: new Adapter() })

describe('Search', () => {

  it('Search label should be "Search Post:"', () => {
    const wrapper = shallow(<Search />);
    const label = wrapper.find('label');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('Search Post:');
  });

  it('Search Contains Inputbox', () => {
    const warapper = shallow(<Search />);

    expect(warapper.find('input')).toHaveLength(1);
  });
  
});