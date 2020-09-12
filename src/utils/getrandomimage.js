let imageUrl =
  "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80";
const api = "https://source.unsplash.com/random";

const getRandomImage = () => {
  const promise = new Promise((resolve, reject) => {
    fetch(api)
      .then((data) => {
        if (data.url) {
          imageUrl = data.url;
          resolve(imageUrl);
        }
      })
      .catch((err) => {
        //Error to be handled later
        reject(imageUrl);
      });
  });
  return promise;
};

export default getRandomImage;
