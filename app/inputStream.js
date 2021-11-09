const fs = require('fs');

exports.inputStream = (filename) => {
  if (filename) {
    if (fs.existsSync(filename)) {
      return fs.createReadStream(filename);
    } else {
      console.error("Input file does not exist");
      process.exit(9);
    }
  }

  return process.stdin;
};

