function getSumOfDigits(n ) {
  if (n.toString().length === 1) {
    return n;
  } else {
    return getSumOfDigits(n.toString().split('').reduce((sum, current) => sum + +current, 0));
  }
}

module.exports = {
  getSumOfDigits
};
