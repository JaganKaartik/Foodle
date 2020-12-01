import * as actionTypes from '../dishes/dishActionTypes';

const initialState = {
  loading: false,
  dish: [],
  error: '',
  fetched: false
};

const fetchOneDishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ONE_DISH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ONE_DISH_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        dish: action.payload
      };
    case actionTypes.FETCH_ONE_DISH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchOneDishReducer;
