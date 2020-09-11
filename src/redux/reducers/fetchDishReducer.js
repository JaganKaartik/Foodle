import * as actionTypes from '../dishes/dishActionTypes';

const initialState = {
  loading: false,
  dishes: [],
  error: ''
};

const fetchDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DISH_SUCCESS:
      return {
        ...state,
        loading: false,
        dishes: action.payload
      };
    case actionTypes.FETCH_DISH_FAILURE:
      return {
        ...state,
        loading: false,
        dishes: [],
        error: action.payload
      };
    case actionTypes.FETCH_DISH_REQUEST:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default fetchDishReducer;
