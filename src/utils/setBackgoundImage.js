import getRandomImage from "./getrandomimage";

const setBackgroundImage = async () => {
  let imageURL = await getRandomImage();
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
};

export default setBackgroundImage;
