function deleteDigit(n ) {
  let numbersArray = [...n.toString()];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < numbersArray[i + 1]) {
      numbersArray.splice(i, 1);
      break;
    } else if (i === numbersArray.length - 1) {
      numbersArray.pop();
    }
  }

  return Number(numbersArray.join(''));
}

module.exports = {
  deleteDigit
};
