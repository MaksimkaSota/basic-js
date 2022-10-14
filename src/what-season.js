function getSeason(date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch {
    throw new Error('Invalid date!');
  }

  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];
  let winter = [11, 0, 1];

  if (spring.includes(date.getMonth())) {
    return 'spring';
  }
  if (summer.includes(date.getMonth())) {
    return 'summer';
  }
  if (autumn.includes(date.getMonth())) {
    return 'autumn';
  }
  if (winter.includes(date.getMonth())) {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
