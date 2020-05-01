/**
 * returns palindrome
 * @param {string} string string to reverse
 */
const palindrome = (string) => {
  return string.split("").reverse().join("");
};

/**
 * returns average of array
 * @param {number[]} array array of numbers
 */
const average = (array) => {
  /**
   * reducer
   * @param {number} sum accumulator
   * @param {number} item current
   */
  const reducer = (sum, item) => sum + item;

  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length;
};

module.exports = { palindrome, average };
