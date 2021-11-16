const sum = require('./sum');
const validation = require('./utils/validation.js');
const { getConfig, getInput, getOutput } = require('./utils/utils.js');
const { inputStream } = require('./inputStream.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Test validation', () => {
  test('valid confug', () => {
    expect(validation('C0')).toBe(true);
  });
  
  test('NO valid confug', () => {
    expect(validation('K')).toBe(false);
  });

});

describe('Test CLI config', () => {
  //!------ наверное нужен MOCK------
  // test('valid input config', () => {
  //   expect(getConfig('-c')).toBe(console.error("No config options"));
  // });

});

describe('Test input sream', () => {
  test('input file exist', () => {
    expect(inputStream('./input.txt').filename).toBe('./input.txt');
  });

});

