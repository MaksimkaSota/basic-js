function encodeLine(str) {
  let lastIndex = str.length - 1
  let currentLetter = str[0];
  let currentLength = 1;
  let newStr = '';

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== currentLetter) {
      newStr += `${currentLength}${currentLetter}`;
      currentLetter = str[i];
      currentLength = 1;
    } else {
      currentLength++;
    }
    if (i === lastIndex) {
      newStr += `${currentLength}${currentLetter}`;
    }
  }

  return newStr.split('1').join('');
}

module.exports = {
  encodeLine
};
