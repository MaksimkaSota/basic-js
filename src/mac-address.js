function isMAC48Address(n) {
  let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let newN = n.split('-');

  if (newN.length !== 6) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < newN.length; i++) {
    if (array.includes(newN[i][0]) && array.includes(newN[i][1])) {
      count++;
    }
  }

  if (count === 6) {
    return true;
  } else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
