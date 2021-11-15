const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabet.toUpperCase();

exports.rot8 = (text, shift) => {
  const newShift = shift * 8;
  const map = Array.prototype.map;
  return map.call(text, char => {
    const length = alphabet.length,
          lengthUpper = alphabetUpper.length;
    if (alphabet.includes(char)) {
      let position = (alphabet.indexOf(char) + newShift) % length;
      position = position < 0 ? length + position : position
      return alphabet[position];
    }
    if (alphabetUpper.includes(char)) {
      let position = (alphabetUpper.indexOf(char) + newShift) % lengthUpper;
      position = position < 0 ? lengthUpper + position : position
      return alphabetUpper[position];
    }
    return char;
  }).join('');
}