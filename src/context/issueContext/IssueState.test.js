import React, { useContext } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import IssueState from './IssueState';

configure({ adapter: new Adapter() });

describe('<NEED TO RENAME> Testing the state', () => {
  it('renders state correctly', () => {
    const wrapper = shallow(<IssueState />);
    expect(wrapper);
  });
});
