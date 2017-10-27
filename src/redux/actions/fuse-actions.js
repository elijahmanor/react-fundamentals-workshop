import * as api from "../../services/fuse";

export const REQUEST_FUSES = "REQUEST_FUSES";
export function requestFuses() {
  return { type: REQUEST_FUSES };
}

export const ERROR_FUSES = "ERROR_FUSES";
export function errorFuse(error) {
  return { type: ERROR_FUSES, error };
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
    api
      .getFuses()
      .then(fuses => dispatch(receiveFuses(fuses)))
      .catch(error => dispatch(errorFuse(error)));
  };
}

export function putFuse(fuse) {
  return dispatch => {
    dispatch(requestFuses());
    api
      .updateFuse(fuse)
      .then(fuse => dispatch(updateFuse(fuse)))
      .catch(error => dispatch(errorFuse(error)));
  };
}

export function postFuse(fuse) {
  return dispatch => {
    dispatch(requestFuses());
    api
      .addFuse(fuse)
      .then(fuse => dispatch(addFuse(fuse)))
      .catch(error => dispatch(errorFuse(error)));
  };
}
