import React, { useEffect, useContext } from 'react';
import IssueContext from '../../../context/issueContext/issueContext';
import IssueNav from '../../navigation/issueNav/IssueNav';
import NavState from '../../../context/navContext/navState';
import IssueTable from '../issueTable/IssueTable';

const IssueContainer = () => {
  const issueContext = useContext(IssueContext);

  const { getIssues } = issueContext;

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className='issues-container'>
      <NavState>
        <IssueNav />
      </NavState>
      <IssueTable />
    </div>
  );
};

export default IssueContainer;
