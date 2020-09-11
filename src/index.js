import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reducers from "./reducers/index";
import setupSocket from "./sockets";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
const socket = setupSocket(store.dispatch, username);

sagaMiddleWare.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
