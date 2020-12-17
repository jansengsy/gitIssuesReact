import React from 'react';
import { mount, shallow } from 'enzyme';

import IssueContainer from './IssueContainer';
import IssuesContext from '../../../context/issueContext/issueContext';

const issues = [{ number: 1 }, { number: 2 }];

it('shallow renders without crashing', () => {
  const wrapper = shallow(
    <IssuesContext.Provider value={issues}>
      <IssueContainer />
    </IssuesContext.Provider>
  );

  expect(wrapper);
});

it('deep renders without crashing', () => {
  const mockGetIssues = jest.fn();
  const wrapper = mount(
    <IssuesContext.Provider value={{ issues, getIssues: mockGetIssues }}>
      <IssueContainer />
    </IssuesContext.Provider>
  );

  expect(wrapper);
  expect(mockGetIssues.mock.calls.length).toBe(1);
});
