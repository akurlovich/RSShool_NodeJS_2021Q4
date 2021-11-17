const getInput = (flag) => {
  console.log(process.argv)
  const flagIndex = process.argv.indexOf(flag);
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
  } else {
    return false;
    // console.error("Input file config duplicate");
    // process.exit(9);
  }
};

module.exports = getInput;