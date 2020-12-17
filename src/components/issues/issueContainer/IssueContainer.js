import React, { useEffect, useContext } from 'react';
import IssueContext from '../../../context/issueContext/issueContext';
import IssueNav from '../issueNav/IssueNav';
import NavState from '../../../context/navContext/navState';

const IssueContainer = () => {
  const issueContext = useContext(IssueContext);

  const { issues, getIssues } = issueContext;

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      <NavState>
        <IssueNav />
      </NavState>
    </div>
  );
};

export default IssueContainer;
