import React from 'react';
import { shallow } from 'enzyme';
import IssueTable from './IssueTable';

describe('Issue table component', () => {
  it('shallow renders without crashing', () => {
    const wrapper = shallow(<IssueTable />);
    expect(wrapper);
  });
});
