import React from 'react';
import { shallow } from 'enzyme';
import IssueNav from './IssueNav';

describe('Issue Navigator', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<IssueNav />);
    expect(wrapper);
  });
});
