function transform(arr) {
  let sequencesArray = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArray = [];

  for (let i  = 0; i < arr.length; i++) {
    if (arr[i] === sequencesArray[0]) {
      i++;
    } else if (arr[i] === sequencesArray[1]) {
      if (arr[i - 1] && arr[i - 1] === newArray[newArray.length - 1]) {
        newArray.pop();
      }
    } else if (arr[i] === sequencesArray[2]) {
      if (arr[i + 1]) {
        newArray.push(arr[i + 1]);
      }
    } else if (arr[i] === sequencesArray[3]) {
      if (arr[i - 1] && arr[i - 1] === newArray[newArray.length - 1]) {
        newArray.push(arr[i - 1]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

module.exports = {
  transform
};
