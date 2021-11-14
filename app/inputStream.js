const fs = require('fs');
const myRead = require('./customRead.js')

exports.inputStream = (filename) => {
  if (filename) {
    const newMyRead = new myRead(filename)
    return newMyRead;
  } else {
    return process.stdin;
    
  }
};