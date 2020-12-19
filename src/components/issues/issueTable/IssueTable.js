import React, { useContext } from 'react';
import './IssueTable.scss';

import Issue from '../issue/Issue';
import IssueContext from '../../../context/issueContext/issueContext';

const IssueTable = () => {
  const issueContext = useContext(IssueContext);

  const { issues } = issueContext;

  let rows;

  issues.forEach((issue) => {
    rows += 'auto ';
  });

  return (
    <div className='issues-table' style={{ gridTemplateRows: `${rows}` }}>
      {issues.map((issue) => (
        <div
          key={issue.number}
          style={{
            gridColumnStart: '2',
            gridColumnEnd: '2',
            gridRowStart: `${issue.number}`,
            gridRowEnd: `${issue.number}`,
          }}
        >
          <Issue key={issue.number} issue={issue}></Issue>
        </div>
      ))}
    </div>
  );
};

export default IssueTable;
