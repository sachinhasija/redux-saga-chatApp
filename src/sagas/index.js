import { takeEvery, takeLatest, all } from "redux-saga/effects";
import { ADD_MESSAGE, SET_UINFO } from "../constants/ActionsTypes";
import globals from "../utils/globals";

export const handleFirstUserInput = function* (params = {}, action = {}) {
  let userInfo = globals.getUserInfo();
  action.name = userInfo.username;
  action.tag = userInfo.tag;
  action.default = params.defaultName;
  yield params.socket.send(JSON.stringify(action));
};

export const handleNewMessage = function* (params = {}, action = {}) {
  let userInfo = globals.getUserInfo();
  action.author = userInfo.username;
  action.tag = userInfo.tag;
  yield params.socket.send(JSON.stringify(action));
};

function* watcher(params) {
  yield takeLatest(SET_UINFO, handleFirstUserInput, params);
  yield takeEvery(ADD_MESSAGE, handleNewMessage, params);
}

export function* rootSaga(params) {
  yield all([watcher(params)]);
}
