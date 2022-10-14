function countCats(matrix) {
  let countCats = 0;
  let cat = "^^";

  for (let items of matrix) {
    for (let item of items) {
      if (item === cat) {
        countCats++;
      }
    }
  }

  return countCats;
}

module.exports = {
  countCats
};
