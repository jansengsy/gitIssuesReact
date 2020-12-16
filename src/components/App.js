import React from 'react';
import './App.scss';
import IssueState from '../context/IssueState';
import IssuesContainer from '../components/issues/issueContainer/IssueContainer';

export const App = () => {
  return (
    <IssueState>
      <div className='App'>
        <h1>Welcome to my home made issues page:</h1>
        <IssuesContainer />
      </div>
    </IssueState>
  );
};

export default App;
