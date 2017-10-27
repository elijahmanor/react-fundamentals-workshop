import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default function storeFactory(preloadedState) {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
}
