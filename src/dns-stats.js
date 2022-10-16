function getDNSStats(domains) {
  let answerObj = {};

  for (let domain of domains) {
    let newDomains = (domain.split('.').reverse());
    let key = '';
    for (let newDomain of newDomains) {
      key += `.${newDomain}`;
      if (!answerObj[key]) {
        answerObj[key] = 1;
      } else {
        answerObj[key] = answerObj[key] + 1;
      }
    }
  }

  return answerObj;
}

module.exports = {
  getDNSStats
};
