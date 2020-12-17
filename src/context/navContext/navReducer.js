import { DROPDOWN_CLICKED } from './navTypes';

export default (state, action) => {
  switch (action.type) {
    case DROPDOWN_CLICKED:
      console.log('Dropdown Clicked - reducer');
      return {
        ...state,
        clicked: !state.clicked,
      };
    default:
      return state;
  }
};
