import {
  GET_ISSUE,
  GET_ISSUES,
  DELETE_ISSUE,
  SET_CURRENT_ISSUE,
  CLEAR_CURRENT_ISSUE,
  FILTER_ISSUES,
  CLEAR_FILTERS,
  SET_ERROR,
  CLEAR_ERROR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
      };
    default:
      return state;
  }
};
