const { atbash } = require("./atbash");
const { ceasar } = require("./caesar");
const { rot8 } = require("./rot_8");

const cipher = (text, config) => {
  const arr = config.split('-');
  let readyCipher = text;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'C') {
      if (arr[i][1] === '1') {
        readyCipher = ceasar(readyCipher, 1);
      };
      if (arr[i][1] === '0') {
        readyCipher = ceasar(readyCipher, -1);
      }
    }
    if (arr[i][0] === 'R') {
      if (arr[i][1] === '1') {
        readyCipher = rot8(readyCipher, 1);
      };
      if (arr[i][1] === '0') {
        readyCipher = rot8(readyCipher, -1);
      }
    }
    if (arr[i][0] === 'A') {
      readyCipher = atbash(readyCipher);
    }
  }
  return readyCipher;
};

module.exports = cipher;