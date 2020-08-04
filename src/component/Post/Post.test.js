import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './Post';

Enzyme.configure({ adapter: new Adapter() })

describe('Post Item', () => {

  it('Post Contains Edit Button', () => {

    const searchResult = { userId: 1, id: 1, title: "First Title", body: "First Body" };

    const postItem = shallow(<Post postData={searchResult} />);
    const lastChild = postItem.find('tr :last-child button');

    expect(lastChild).toHaveLength(1);
    expect(lastChild.text()).toEqual("Edit");
    
  });
  
});