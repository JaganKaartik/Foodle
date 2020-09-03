import * as actionCreators from './dishActions';
import {
    displayOneHelper,
    displayAllHelper,
    delOneHelper,
    deleteAllHelper,
    updateHelper,
    addDishHelper
  } from "../../services/helpers";


  export const thunkFetchDishes = () => {
    return function(dispatch){
      dispatch(actionCreators.fetchDishesRequest());
      return displayAllHelper()
        .then(resp => {
          console.log(resp)
          return resp.json();
        })
        .then(d => {
          console.log(d);
          dispatch(actionCreators.fetchDishesSuccess(d));
        })
        .catch(err => dispatch(actionCreators.fetchDishesFailure(err)));
    };
  };
  
  export const thunkFetchOneDish = (id) => {
    return function(dispatch){
      dispatch(actionCreators.fetchOneDishRequest());
      return displayOneHelper(id)
        .then(resp => {
          return resp.json();
        })
        .then(d => {
          console.log(d);
          dispatch(actionCreators.fetchOneDishSuccess(d));
        })
        .catch(err => dispatch(actionCreators.fetchOneDishFailure(err)));
    };
  };

  export const thunkDeleteDish = (id) => {
    return function(dispatch) {
      delOneHelper(id)
        .then(resp => {
          if(resp.ok)
          {
            const message = "Successfully Deleted!"
            dispatch(actionCreators.deleteDishSuccess(message));
          }
        })
        .catch(err => dispatch(actionCreators.deleteDishFailure(err)));
    };
  };
  
  export const thunkDeleteAllDish = () => {
    return function(dispatch){
      deleteAllHelper()
      .then(resp => {
        if(resp.ok)
        {
          const message = "Successfully Deleted All!"
          dispatch(actionCreators.deleteDishSuccess(message));
        }
      })
      .catch(err => dispatch(actionCreators.deleteDishFailure(err)));
    };
  };

  export const thunkUpdateDishes = (name,price) => {
    return function(dispatch){
       updateHelper(name,price)
       .then(resp => {
        if(resp.ok)
        {
          const message = "Successfully Updated!"
          dispatch(actionCreators.updateDishSuccess(message));
        }
      })
      .catch(err => dispatch(actionCreators.updateDishFailure(err)));
    };
  };

  export const thunkAddDishes = () => {
    return function(dispatch){
        addDishHelper()
        .then(resp => {
          if(resp.ok)
          {
            const message = "Successfully Added Dish!"
            dispatch(actionCreators.addDishSuccess(message));
          }
        })
        .catch(err => dispatch(actionCreators.addDishFailure(err)));
    };
  };