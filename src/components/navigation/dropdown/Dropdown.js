import React, { useContext } from 'react';
import './dropdown.scss';

import NavContext from '../../../context/navContext/navContext';

const Dropdown = () => {
  const navContext = useContext(NavContext);
  const { clicked, navClicked } = navContext;

  return (
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
  );
};

export default Dropdown;
