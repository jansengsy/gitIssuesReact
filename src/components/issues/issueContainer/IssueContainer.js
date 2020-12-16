import React, { useEffect, useContext } from 'react';
import IssueContext from '../../../context/issueContext';
import Issue from '../issue/Issue';

const IssueContainer = () => {
  const issueContext = useContext(IssueContext);

  const { issues, getIssues } = issueContext;

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      {issues.map((issue) => (
        <Issue key={issue.number} issue={issue}></Issue>
      ))}
    </div>
  );
};

export default IssueContainer;
