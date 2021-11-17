const validation = require('../utils/validation.js');
const { inputStream } = require('../inputStream.js');
const { transformStream } = require('../transformStream.js');
const cipher = require('../ciphers/cipher.js');
const getConfig = require("../utils/getConfig.js");
const getInput = require("../utils/getInput.js");
const getOutput = require("../utils/getOutput.js");


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
  test('valid input config', () => {
    expect(getConfig('-c')).toBe(false);
  });

  test('Valid input file flag', () => {
    expect(getInput('-i')).toBe('-klj');
  });

  test('Valid input doble file flag', () => {
    expect(getInput('-lll')).toBe(false);
  });

  test('Valid input file NO flag', () => {
    expect(getInput('')).toBe(null);
  });

  test('Valid ouput file flag', () => {
    expect(getOutput('-klj')).toBe('-lll');
  });

  test('Valid ouput file flag', () => {
    expect(getOutput('')).toBe(null);
  });

  test('Valid ouput doble file flag', () => {
    expect(getOutput('-lll')).toBe(false);
  });

});

describe('Test input stream', () => {
  test('input file exist', () => {
    expect(inputStream('./input.txt').filename).toBe(undefined);
  });

  test('input file exist', () => {
    expect(inputStream('').filename).toBe(undefined);
  });

  test('input file exist', () => {
    expect(inputStream('./111.111')).toBe('No file');
  });

});

describe('Test transform stream', () => {
  //!--- разобраться как работать с классами и как передать в него данные из буфера/файла/командной строки----
  // test('transform result', () => {
  //   expect(transformStream('C1')).toBe('b');
  // });

});

describe('Test cipher function', () => {
  test('Caeser return code lowercase', () => {
    expect(cipher('aaa', 'C1')).toBe('bbb');
  });

  test('Caeser return code lowercase 0', () => {
    expect(cipher('bbb', 'C0')).toBe('aaa');
  });

  test('Caeser return code uppercase', () => {
    expect(cipher('AAA', 'C1')).toBe('BBB');
  });

  test('Caeser return NOT code', () => {
    expect(cipher('1!фЫ', 'C1')).toBe('1!фЫ');
  });

  test('Atbash return code lowercase', () => {
    expect(cipher('a', 'A')).toBe('z');
  });

  test('Atbash return code uppercase', () => {
    expect(cipher('A', 'A')).toBe('Z');
  });

  test('Atbash return NOT code', () => {
    expect(cipher('1!фЫ', 'A')).toBe('1!фЫ');
  });

  test('Rot8 return code lowercase', () => {
    expect(cipher('a', 'R1')).toBe('i');
  });

  test('Rot8 return code lowercase 0', () => {
    expect(cipher('i', 'R0')).toBe('a');
  });

  test('Rot8 return code uppercase', () => {
    expect(cipher('A', 'R1')).toBe('I');
  });

  test('Rot8 return NOT code', () => {
    expect(cipher('1!фЫ', 'R1')).toBe('1!фЫ');
  });

});

