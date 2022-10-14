function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let latterArray = [];
    for (let member of members) {
      if (typeof member === "string") {
        latterArray.push(member.split(' ').join('').toUpperCase().slice(0, 1));
      }
    }
    return latterArray.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
