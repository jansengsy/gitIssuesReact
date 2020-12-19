import React from 'react';
import { mount } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown componenet', () => {
  it('Shallow renders without crashing', () => {
    const wrapper = mount(<Dropdown />);
    expect(wrapper);
  });
});
