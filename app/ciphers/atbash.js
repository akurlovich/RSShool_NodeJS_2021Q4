const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabet.toUpperCase();

exports.atbash = (text) => {
  const map = Array.prototype.map;
  return map.call(text, char => {
    const length = alphabet.length;
    if (alphabet.includes(char)) {
      let position = alphabet.indexOf(char) + 1;
      return alphabet[length - position];
    }
    if (alphabetUpper.includes(char)) {
      let position = alphabetUpper.indexOf(char) + 1;
      return alphabetUpper[length - position];
    }
    return char;
  }).join('');
};
