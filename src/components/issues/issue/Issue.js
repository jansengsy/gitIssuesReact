import React from 'react';

const Issue = (props) => {
  return (
    <div className='issue'>
      <h3>Issue: {props.issue.number}</h3>
      <p>{JSON.stringify(props.issue)}</p>
    </div>
  );
};

export default Issue;
