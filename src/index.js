import React from "react";
import ReactDOM from "react-dom/client";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import App from "./0103-React Portal/App";
import reducers from "./0103-React Portal/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
