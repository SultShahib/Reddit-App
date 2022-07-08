/**
 * Generates a number between min and max.
 * @param {number} min
 * @param {number} max
 */
export default function randomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}
