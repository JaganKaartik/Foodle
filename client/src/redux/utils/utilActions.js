import * as actionTypes from './utilActionTypes';

export const setFilter = (payload) => {
  return {
    type: actionTypes.FILTERED_DISH,
    payload
  };
};
