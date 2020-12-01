import * as actionTypes from '../dishes/dishActionTypes';

const initialState = {
  message: '',
  error: ''
};

const addDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DISH_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case actionTypes.ADD_DISH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default addDishReducer;
