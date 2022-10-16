function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if (typeof str !== 'string') {
    str = String(str);
  }
  if (typeof addition !== 'string') {
    addition = String(addition);
  }

  let additionArray = [];
  while (additionArray.length < additionRepeatTimes) {
    additionArray.push(addition);
  }

  str = str + additionArray.join(additionSeparator);

  let stringArray = [];
  while (stringArray.length < repeatTimes) {
    stringArray.push(str);
  }

  return stringArray.join(separator);
}

module.exports = {
  repeater
};
