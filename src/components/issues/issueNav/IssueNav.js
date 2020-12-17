import React, { useContext, useEffect } from 'react';
import './IssueNav.scss';

import NavContext from '../../../context/navContext/navContext';

const IssueNav = () => {
  const navContext = useContext(NavContext);

  const { clicked, navClicked } = navContext;

  // useEffect(() => {

  // }, [clicked]);

  return (
    <div className='nav'>
      <input type='checkbox'></input>
      <p>X issues open</p>
      <p>X issues closed</p>
      <div className='dropdown'>
        <button className='dropdown-button' onClick={navClicked}>
          {`Clicked: ${clicked}`}
        </button>
        {clicked && (
          <div id='nav-dropdown' className='dropdown-content'>
            <a href='#'>Label 1</a>
            <a href='#'>Label 2</a>
            <a href='#'>Label 3</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueNav;
