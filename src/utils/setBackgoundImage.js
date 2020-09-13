import getRandomImage from "./getrandomimage";
import defaultImage from "../assets/default-image.jpg";

const setBackgroundImage = async () => {
  let imageURL = defaultImage;
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
  try {
    imageURL = await getRandomImage();
  } catch (err) {
    // deal with later
  }
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
};

export default setBackgroundImage;
