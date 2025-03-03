const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
    return Math.ceil(t);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
