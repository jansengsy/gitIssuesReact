import React, { useReducer } from 'react';
import IssueContext from './issueContext';
import issueReducer from './issueReducer';
import axios from 'axios';
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
} from '../types';

const IssueState = (props) => {
  const initialState = {
    issues: [],
  };

  // Setup reducer
  const [state, dispatch] = useReducer(issueReducer, initialState);

  const clientID = '56d610747b3010c02120';
  const clientSecret = '6b4039787697688d783c29ce36fd0741b6b1069b';

  // Get issues
  const getIssues = async () => {
    const issuesUrl = `https://api.github.com/repos/jansengsy/ContactKeeper/issues?state=all&client_id=${clientID}&client_secret=${clientSecret}`;

    const res = await axios.get(issuesUrl);

    console.log(JSON.stringify(res));
    dispatch({
      type: GET_ISSUES,
      payload: res.data,
    });
  };

  // Get issue

  // Delete issue

  // Set current issue

  // Clear current issue

  // Filter issues

  // Clear filters

  return (
    <IssueContext.Provider
      value={{
        issues: state.issues,
        getIssues,
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
};

export default IssueState;
