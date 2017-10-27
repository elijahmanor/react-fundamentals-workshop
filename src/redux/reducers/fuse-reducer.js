import {
  REQUEST_FUSES,
  RECEIVE_FUSES,
  UPDATE_FUSE,
  ADD_FUSE,
  ERROR_FUSES
} from "../actions/fuse-actions";
import _ from "lodash";

const fuseReducer = (
  state = {
    isFetching: false,
    hasError: false,
    fuses: [],
    lastUpdated: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_FUSES:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      });
    case RECEIVE_FUSES:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        fuses: _.orderBy(action.fuses, ["date"], ["desc"]),
        lastUpdated: +new Date()
      });
    case UPDATE_FUSE:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        fuses: _.orderBy(
          state.fuses.map(fuse => {
            if (fuse.id === action.fuse.id) {
              return { ...fuse, ...action.fuse };
            }
            return fuse;
          }),
          ["date"],
          ["desc"]
        ),
        lastUpdated: +new Date()
      });
    case ADD_FUSE:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        fuses: _.orderBy([...state.fuses, action.fuse], ["date"], ["desc"]),
        lastUpdated: +new Date()
      });
    case ERROR_FUSES:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default fuseReducer;
