module.exports = function reverse(n) {
  let resultStr = '';
  let remainder = Math.abs(n);

  while (remainder) {
    resultStr += remainder % 10;
    remainder = Math.floor(remainder / 10);
  }

  return Number(resultStr);
};
