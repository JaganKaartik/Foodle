import { combineReducers } from 'redux';
import fetchDishReducer from './fetchDishReducer';
import deleteDishReducer from './deleteDishReducer';
import addDishReducer from './addDishReducer';
import updateDishReducer from './updateDishReducer';
import fetchOneDishReducer from './fetchOneDishReducer';
import filterDishReducer from './filterDishReducer';

const rootReducer = combineReducers({
  fetchdish: fetchDishReducer,
  fetchOne: fetchOneDishReducer,
  deldish: deleteDishReducer,
  updatedish: updateDishReducer,
  adddish: addDishReducer,
  filter: filterDishReducer
});

export default rootReducer;
