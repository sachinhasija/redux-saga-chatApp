let userInfo = {
  username: "",
  tag: "",
};

const setUserInfo = (username = "", usertag = "") => {
  if (username) userInfo.username = username;
  if (usertag) userInfo.tag = usertag;
};

const getUserInfo = () => {
  return userInfo;
};

const globals = {
  setUserInfo,
  getUserInfo,
};

export default globals;
