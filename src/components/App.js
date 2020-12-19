import React from 'react';
import './App.scss';
import IssueState from '../context/issueContext/IssueState';
import IssuesContainer from '../components/issues/issueContainer/IssueContainer';

const App = () => {
  return (
    <IssueState>
      <div className='App'>
        <h1 className='title'>Welcome to my home made issues page:</h1>
        <IssuesContainer />
      </div>
    </IssueState>
  );
};

export default App;
