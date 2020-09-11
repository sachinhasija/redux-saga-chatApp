const makeid = () => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
};

module.exports = { makeid };
