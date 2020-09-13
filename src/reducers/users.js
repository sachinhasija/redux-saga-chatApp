import { ADD_USER, SET_UINFO, USERS_LIST } from "../constants/ActionsTypes";
import { setUserInfo } from "../utils/name";
import globals from "../utils/globals";

const users = (state = [], action) => {
  switch (action.type) {
    case SET_UINFO: {
      return state.map((u) => {
        if (u.name === action.defaultName) {
          setUserInfo(action.username);
          let userInfo = globals.getUserInfo();
          return {
            ...u,
            name: userInfo.username,
            tag: userInfo.tag,
          };
        }
        return u;
      });
    }
    case ADD_USER:
      return state.concat([
        {
          name: action.name,
          tag: action.tag,
          id: action.id,
        },
      ]);
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
