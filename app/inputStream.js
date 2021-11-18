// const fs = require('fs');
// const myRead = require('./customRead.js')

// exports.inputStream = (filename) => {
//   if (filename) {
//     const newMyRead = new myRead(filename);
//     console.log(newMyRead.filename);
//     return newMyRead;
//   } else {
//     return process.stdin;
    
//   }
// };

const fs = require('fs');

exports.inputStream = (filename) => {
  if (filename) {
    if (fs.existsSync(filename)) {
      return fs.createReadStream(filename);
    } else {
      return 'No file';
      // console.log(filename);
      // console.error("Input file does not exist");
      // process.exit(9);
    }
  }

  return process.stdin;
}
