import * as actionTypes from '../utils/utilActionTypes';

const initialState = null;

const filterDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTERED_DISH:
      return action.payload;

    default:
      return state;
  }
};

export default filterDishReducer;
