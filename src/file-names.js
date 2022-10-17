function renameFiles(names) {
  let filesArray = [];

  for (let name of names) {
    if (!filesArray.includes(name)) {
      filesArray.push(name);
    } else {
      let counter = 1;
      while (filesArray.includes(`${name}(${counter})`)) {
        counter++;
      }
      filesArray.push(`${name}(${counter})`);
    }
  }

  return filesArray;
}

module.exports = {
  renameFiles
};
