import {
  REQUEST_FUSES,
  RECEIVE_FUSES,
  UPDATE_FUSE,
  ADD_FUSE,
  ERROR_FUSE
} from "../actions/fuse-actions";
import { orderBy } from "lodash";

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
        fuses: orderBy(action.fuses, ["date"], ["desc"]),
        lastUpdated: Date.now()
      });
    case UPDATE_FUSE:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        fuses: orderBy(
          state.fuses.map(fuse => {
            if (fuse.id === action.fuse.id) {
              return { ...fuse, ...action.fuse };
            }
            return fuse;
          }),
          ["date"],
          ["desc"]
        ),
        lastUpdated: Date.now()
      });
    case ADD_FUSE:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        fuses: orderBy([...state.fuses, action.fuse], ["date"], ["desc"]),
        lastUpdated: Date.now()
      });
    case ERROR_FUSE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default fuseReducer;
