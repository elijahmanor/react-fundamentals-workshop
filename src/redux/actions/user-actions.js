import * as api from "../../services/user";

export const REQUEST_USER = "REQUEST_USER";
export function requestUser() {
  return {
    type: REQUEST_USER
  };
}

export const ERROR_USER = "ERROR_USER";
export function errorUser(error) {
  return {
    type: ERROR_USER,
    error
  };
}

export const RECEIVE_USER = "RECEIVE_USER";
export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user
  };
}

export function fetchUser() {
  return dispatch => {
    dispatch(requestUser());
    return api
      .getUser()
      .then(user => dispatch(receiveUser(user)))
      .catch(error => dispatch(errorUser(error)));
  };
}

export function resetUser() {
  return dispatch => {
    dispatch(requestUser());
    return api
      .promptUser()
      .then(user => dispatch(receiveUser(user)))
      .catch(error => dispatch(errorUser(error)));
  };
}
