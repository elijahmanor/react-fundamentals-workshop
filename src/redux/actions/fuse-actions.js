import * as api from "../../services/fuse";

export const REQUEST_FUSES = "REQUEST_FUSES";
export function requestFuses() {
  return { type: REQUEST_FUSES };
}

export const ERROR_FUSE = "ERROR_FUSE";
export function errorFuse(error) {
  return { type: ERROR_FUSE, error };
}

export const RECEIVE_FUSES = "RECEIVE_FUSES";
export function receiveFuses(fuses) {
  return { type: RECEIVE_FUSES, fuses };
}

export const UPDATE_FUSE = "UPDATE_FUSE";
export function updateFuse(fuse) {
  return { type: UPDATE_FUSE, fuse };
}

export const ADD_FUSE = "ADD_FUSE";
export function addFuse(fuse) {
  return { type: ADD_FUSE, fuse };
}

export function fetchFuses() {
  return dispatch => {
    dispatch(requestFuses());
    return api
      .getFuses()
      .then(fuses => dispatch(receiveFuses(fuses)))
      .catch(error => dispatch(errorFuse(error)));
  };
}

export function putFuse(fuse) {
  return dispatch => {
    dispatch(requestFuses());
    return api
      .updateFuse(fuse)
      .then(fuse => dispatch(updateFuse(fuse)))
      .catch(error => dispatch(errorFuse(error)));
  };
}

export function postFuse(fuse) {
  return dispatch => {
    dispatch(requestFuses());
    return api
      .addFuse(fuse)
      .then(fuse => dispatch(addFuse(fuse)))
      .catch(error => dispatch(errorFuse(error)));
  };
}
