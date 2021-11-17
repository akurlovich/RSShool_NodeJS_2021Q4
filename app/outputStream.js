// const fs = require('fs');
// const myWrite = require('./customWrite.js');

// exports.outputStream = (filename) => {
//   if (filename) {
//     const newMyWrite = new myWrite(filename);
//     return newMyWrite;
//     } else {
//       return process.stdout;
      
//     }

// }

const fs = require('fs');

exports.outputStream = (filename) => {
  if (filename) {
    if (fs.existsSync(filename)) {
      return fs.createWriteStream(filename, {flags: 'a'});
    } else {
      console.error("Output file does not exist");
      process.exit(9);
    }
  }

  return process.stdout;
}

