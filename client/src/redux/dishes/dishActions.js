import * as actionTypes from './dishActionTypes';

export const fetchDishesRequest = () => {
  return {
    type: actionTypes.FETCH_DISH_REQUEST
  };
};

export const fetchDishesSuccess = (dishes) => {
  return {
    type: actionTypes.FETCH_DISH_SUCCESS,
    payload: dishes
  };
};

export const fetchDishesFailure = (error) => {
  return {
    type: actionTypes.FETCH_DISH_FAILURE,
    payload: error
  };
};

export const fetchOneDishRequest = () => {
  return {
    type: actionTypes.FETCH_ONE_DISH_REQUEST
  };
};

export const fetchOneDishSuccess = (dish) => {
  return {
    type: actionTypes.FETCH_ONE_DISH_SUCCESS,
    payload: dish
  };
};

export const fetchOneDishFailure = (error) => {
  return {
    type: actionTypes.FETCH_ONE_DISH_FAILURE,
    payload: error
  };
};

export const addDishSuccess = (message) => {
  return {
    type: actionTypes.ADD_DISH_SUCCESS,
    payload: message
  };
};

export const addDishFailure = (message) => {
  return {
    type: actionTypes.ADD_DISH_FAILURE,
    payload: message
  };
};

export const updateDishSuccess = (message) => {
  return {
    type: actionTypes.UPDATE_DISH_SUCCESS,
    payload: message
  };
};

export const updateDishFailure = (message) => {
  return {
    type: actionTypes.UPDATE_DISH_FAILURE,
    payload: message
  };
};

export const deleteDishSuccess = (message) => {
  return {
    type: actionTypes.DELETE_DISH_SUCCESS,
    payload: message
  };
};

export const deleteDishFailure = (message) => {
  return {
    type: actionTypes.DELETE_DISH_FAILURE,
    payload: message
  };
};
