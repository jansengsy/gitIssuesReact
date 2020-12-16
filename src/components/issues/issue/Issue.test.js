import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Issue from './Issue';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const issue = {
    number: 7,
  };

  const wrapper = shallow(<Issue issue={issue} />);
  expect(wrapper);
});
