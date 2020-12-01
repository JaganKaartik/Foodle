import * as actionCreators from './dishActions';
import { displayAllDish, displayDish, updateDish, addDish, delDish } from '../../services/helpers';

export const thunkFetchDishes = () => {
  return function (dispatch) {
    dispatch(actionCreators.fetchDishesRequest());
    return displayAllDish()
      .then((resp) => {
        return resp.json();
      })
      .then((d) => {
        dispatch(actionCreators.fetchDishesSuccess(d));
      })
      .catch((err) => dispatch(actionCreators.fetchDishesFailure(err)));
  };
};

export const thunkFetchOneDish = (id) => {
  return function (dispatch) {
    dispatch(actionCreators.fetchOneDishRequest());
    return displayDish(id)
      .then((resp) => {
        return resp.json();
      })
      .then((d) => {
        dispatch(actionCreators.fetchOneDishSuccess(d));
      })
      .catch((err) => dispatch(actionCreators.fetchOneDishFailure(err)));
  };
};

export const thunkDeleteDish = (id) => {
  return function (dispatch) {
    delDish(id)
      .then((resp) => {
        if (resp.ok) {
          const message = 'Successfully Deleted!';
          dispatch(actionCreators.deleteDishSuccess(message));
        }
      })
      .catch((err) => dispatch(actionCreators.deleteDishFailure(err)));
  };
};

export const thunkUpdateDishes = (name, price) => {
  return function (dispatch) {
    updateDish(name, price)
      .then((resp) => {
        if (resp.ok) {
          const message = 'Successfully Updated!';
          dispatch(actionCreators.updateDishSuccess(message));
        }
      })
      .catch((err) => dispatch(actionCreators.updateDishFailure(err)));
  };
};

export const thunkAddDishes = () => {
  return function (dispatch) {
    addDish()
      .then((resp) => {
        if (resp.ok) {
          const message = 'Successfully Added Dish!';
          dispatch(actionCreators.addDishSuccess(message));
        }
      })
      .catch((err) => dispatch(actionCreators.addDishFailure(err)));
  };
};
