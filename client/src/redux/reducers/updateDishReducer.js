import * as actionTypes from '../dishes/dishActionTypes';

const initialState = {
  message: '',
  error: ''
};

const updateDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DISH_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case actionTypes.UPDATE_DISH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateDishReducer;
