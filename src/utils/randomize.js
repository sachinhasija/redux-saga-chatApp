export default function randomizeIT(max = 0) {
  let randomized = Math.floor(Math.random() * Math.max(max));
  randomized = randomized > max ? max : randomized;
  return randomized;
}
