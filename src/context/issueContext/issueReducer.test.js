import { GET_ISSUES } from '../../types';
import issuesReducer from './issueReducer';

const initialState = {
  issues: [],
};

describe('issues reducer', () => {
  it('Handles invalid types', () => {
    const newState = issuesReducer(initialState, {
      type: 'invalid',
      payload: {},
    });
    expect(newState).toEqual(initialState);
  });

  it('has the inital state set', () => {
    const newState = issuesReducer(initialState, {
      type: GET_ISSUES,
      payload: [{ number: 1 }],
    });
    expect(newState.issues).toEqual([{ number: 1 }]);
  });
});
