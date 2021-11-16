const fs = require('fs');
const myRead = require('./customRead.js')

exports.inputStream = (filename) => {
  if (filename) {
    const newMyRead = new myRead(filename);
    console.log(newMyRead.filename);
    return newMyRead;
  } else {
    return process.stdin;
    
  }
};