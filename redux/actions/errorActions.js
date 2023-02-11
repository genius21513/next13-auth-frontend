import { ERROR, REMOVE_ERROR } from '../types/errorTypes';

export const createError = message => {
  return dispatch => {
    dispatch({ type: ERROR, payload: message });
  };
};

export const removeError = () => {
  return dispatch => {
    dispatch({ type: REMOVE_ERROR });
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createError,
  removeError,
};
