const validation = (string) => {
  const baseArr = ['C0', 'C1', 'R0', 'R1', 'A', 'c1'];
  const arr = string.split('-');
  for (let i = 0; i < arr.length; i++) {
    if (!baseArr.includes(arr[i])) {
      return false;
    }
  }
  return true;
};

module.exports = validation;