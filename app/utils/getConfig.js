const validation = require("../utils/validation");

const getConfig = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  if ((process.argv[flagIndex + 1]) === undefined) {
    return false;
    console.error("Config are required");
    // console.log(process.exit(9))
    process.exit(9);
  }
  const flagLastIndex = process.argv.lastIndexOf(flag);
  if (flagIndex === flagLastIndex) {
    if (flagIndex !== -1) {
      const valid = validation(process.argv[flagIndex + 1]);
      if (!valid) {
        return false;
        console.error("Config are required");
        process.exit(9);
      };
      return process.argv[flagIndex + 1];
    } else {
      // console.log('object')
      // console.log(process.exit(9))
      return false
      console.error("No config options");
      process.exit(9);
    }
  } else {
    return false;
    console.error("Сonfig duplicate");
    process.exit(9);
  }
};

module.exports = getConfig;