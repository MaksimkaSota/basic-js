function calculateHanoi(disksNumber, turnsSpeed) {
  let calcTurns = Math.pow(2, disksNumber) - 1;
  let calcSeconds = Math.floor(calcTurns / (turnsSpeed / 3600));

  let object = {};
  object.turns = calcTurns;
  object.seconds = calcSeconds;

  return object;
}

module.exports = {
  calculateHanoi
};
