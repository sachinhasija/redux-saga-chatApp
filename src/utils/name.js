import globals from "./globals";
let userDefID = Math.floor(Math.random() * Math.floor(10 ** 10));

const setUserInfo = (username = "") => {
  let userTag;
  if (username) {
    userTag = username
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();
  } else {
    userTag = "DF";
    username = "Default" + userDefID;
  }
  globals.setUserInfo(username, userTag);
};

export { setUserInfo };
