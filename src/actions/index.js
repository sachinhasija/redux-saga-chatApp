import {
  ADD_MESSAGE,
  MESSAGE_RECEIVED,
  ADD_USER,
  USERS_LIST,
  SET_UINFO,
} from "../constants/ActionsTypes";

let nextMessageID = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageID++,
  message,
  author,
});

export const addUser = (name, tag) => ({
  type: ADD_USER,
  id: nextUserId,
  name,
  tag,
});

export const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: nextMessageID++,
  message,
  author,
});

export const populateUsersList = (users) => ({
  type: USERS_LIST,
  users,
});

export const setUserInfoAction = (username, defaultName) => ({
  type: SET_UINFO,
  username,
  defaultName,
});
