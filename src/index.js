import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./redux/store";
import App from "./containers/App/App";

render(
  <Provider store={storeFactory()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
