import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reducers from "./reducers/index";
import setupSocket from "./sockets";
import { rootSaga } from "./sagas/index";
import setBackgroundImage from "./utils/setBackgoundImage";
import { setUserInfo } from "./utils/name";
import globals from "./utils/globals";

setUserInfo();
setBackgroundImage();

const { username, tag } = globals.getUserInfo();
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
const socket = setupSocket(store.dispatch, username, tag);

sagaMiddleWare.run(rootSaga, { socket, username, tag });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
