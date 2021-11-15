const sum = require('./sum');
const validation = require('./utils/validation.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('valid confug', () => {
  expect(validation('C0')).toBe(true);
});

// test('NO valid confug', () => {
//   expect(validation('K')).toBe(false);
// });