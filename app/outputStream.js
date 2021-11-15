const fs = require('fs');
const myWrite = require('./customWrite.js');

exports.outputStream = (filename) => {
  if (filename) {
    const newMyWrite = new myWrite(filename);
    return newMyWrite;
    } else {
      return process.stdout;
      
    }

}
