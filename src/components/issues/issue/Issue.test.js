import React from 'react';
import { shallow } from 'enzyme';

import Issue from './Issue';

it('renders without crashing', () => {
  const issue = {
    number: 7,
  };

  const wrapper = shallow(<Issue issue={issue} />);
  expect(wrapper);
});
