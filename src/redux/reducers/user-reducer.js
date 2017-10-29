import { REQUEST_USER, RECEIVE_USER, ERROR_USER } from "../actions/user-actions";

const userReducer = (
  state = {
    isFetching: false,
    hasError: false,
    user: undefined,
    lastUpdated: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        user: undefined,
        lastUpdated: null
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        user: action.user,
        lastUpdated: Date.now()
      });
    case ERROR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        user: undefined,
        lastUpdated: null
      });
    default:
      return state;
  }
};

export default userReducer;
