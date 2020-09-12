import { takeEvery } from "redux-saga/effects";
import { ADD_MESSAGE } from "../constants/ActionsTypes";

const handleNewMessage = function* (params) {
  yield takeEvery(ADD_MESSAGE, (action) => {
    action.author = params.username;
    action.tag = params.tag;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
