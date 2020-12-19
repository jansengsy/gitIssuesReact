import React, { useContext, useEffect } from 'react';
import './IssueNav.scss';

import Dropdown from '../dropdown/Dropdown';

import NavContext from '../../../context/navContext/navContext';

const IssueNav = () => {
  // useEffect(() => {

  // }, [clicked]);

  return (
    <div className='issues-nav'>
      <input className='nav-item-1' type='checkbox'></input>
      <p className='nav-item-2'>X issues open</p>
      <p className='nav-item-3'>X issues closed</p>
      <Dropdown />
    </div>
  );
};

export default IssueNav;
