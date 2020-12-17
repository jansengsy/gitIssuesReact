import React, { useReducer } from 'react';
import NavContext from './navContext';
import navReducer from './navReducer';
import { DROPDOWN_CLICKED } from './navTypes';

const NavState = (props) => {
  const initalState = {
    clicked: false,
  };

  const [state, dispatch] = useReducer(navReducer, initalState);

  const navClicked = () => {
    console.log('Clicked: State');
    dispatch({ type: DROPDOWN_CLICKED, payload: true });
  };

  return (
    <NavContext.Provider
      value={{
        clicked: state.clicked,
        navClicked,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
