import * as actionTypes from '../dishes/dishActionTypes';

const initialState = {
  message: '',
  error: ''
};

const deleteDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_DISH_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case actionTypes.DELETE_DISH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default deleteDishReducer;
