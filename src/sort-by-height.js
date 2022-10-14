function sortByHeight(arr) {
  let numbersArray = [];
  for (let number of arr) {
    if (number !== -1) {
      numbersArray.push(number);
    }
  }
  numbersArray.sort((a, b) => a - b);

  let numbersAnswerArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      numbersAnswerArray.push(-1)
    } else {
      numbersAnswerArray.push(numbersArray.shift());
    }
  }
  return numbersAnswerArray;
}

module.exports = {
  sortByHeight
};
