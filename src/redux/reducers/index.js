import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import fuseReducer from "./fuse-reducer";

export default combineReducers({
  userState: userReducer,
  fuseState: fuseReducer
});
