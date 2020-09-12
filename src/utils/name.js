import globals from "./globals";

const setUserInfo = () => {
  let username = prompt("Enter your name");
  username = validUN(username);

  let userTag = username
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase();
  globals.setUserInfo(username, userTag);
};

function validUN(username = "") {
  if (username) {
    return username;
  }
  alert("Enter a valid username");
  username = prompt("Enter your name");
  return validUN(username);
}

export { setUserInfo };
