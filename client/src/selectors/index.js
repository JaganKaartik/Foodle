import { createSelector } from 'reselect';

export const getTypes = (dishes) => {
  let typesArray = [];
  let length = dishes.length;
  for (let i = 0; i < length; ++i) {
    typesArray.push(dishes[i].type);
  }
  let x = typesArray.filter((v, i, self) => self.indexOf(v) === i);
  return x;
};

export const getFilteredDishes = (dishes, dishtype) => {
  let length = dishes.length;
  let result = [];
  for (let i = 0; i < length; ++i) {
    if (dishes[i].type === dishtype || dishtype === null) {
      result.push(dishes[i]);
    }
  }
  return result;
};

const data = (state) => {
  return state.fetchdish.dishes;
};

export const dishTypeSelector = createSelector(data, (dishes) => getTypes(dishes));
