import { handleNewMessage } from "../index";
import { runSaga } from "redux-saga";

test("send new message data to socket ", async () => {
  const dispatchedActions = [];
  const fakeStore = {
    getState: () => ({ messages: [{ message: "Hi", author: "Sam", id: 1 }] }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  const action = { type: "ADD_MESSAGE", id: 1, message: "Hi", author: "Sam" };
  const socket = { send: () => console.log("whats up") };
  const params = { socket, username: "Sam", tag: "SM" };

  await runSaga(fakeStore, handleNewMessage, params, action).done;
});
