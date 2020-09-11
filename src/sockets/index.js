import { ADD_MESSAGE, ADD_USER, USERS_LIST } from "../constants/ActionsTypes";
import { addUser, populateUsersList, messageReceived } from "../actions";

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:8989");
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: ADD_USER,
        name: username,
      })
    );
  };
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case ADD_MESSAGE: {
        dispatch(messageReceived(data.message, data.author));
        break;
      }
      case ADD_USER: {
        dispatch(addUser(data.name));
        break;
      }
      case USERS_LIST: {
        dispatch(populateUsersList(data.users));
        break;
      }
      default:
        break;
    }
  };
  return socket;
};

export default setupSocket;
