// index.test.js
const { numberToWords, wordsToNumber } = require('./index');

test('numberToWords - 42', () => {
  expect(numberToWords(42)).toBe('forty-two');
});

test('numberToWords - 10005', () => {
  expect(numberToWords(10005)).toBe('ten thousand five');
});

test('numberToWords - 987654321', () => {
  expect(numberToWords(987654321)).toBe(
    'nine hundred eighty-seven million six hundred fifty-four thousand three hundred twenty-one'
  );
});

test('numberToWords - 999999999999999', () => {
  expect(numberToWords(999999999999999)).toBe(
    'nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine'
  );
});

test('wordsToNumber - forty-two', () => {
  expect(wordsToNumber('forty-two')).toBe(42);
});

test('wordsToNumber - one hundred and six', () => {
  expect(wordsToNumber('one hundred and six')).toBe(106);
});

test('wordsToNumber - ten thousand five', () => {
  expect(wordsToNumber('ten thousand five')).toBe(10005);
});

test('wordsToNumber - nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine', () => {
  expect(wordsToNumber(
    'nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine'
  )).toBe(999999999999999);
});
test('wordsToNumber - zero', () => {
  expect(wordsToNumber('zero')).toBe(0);
});
test('wordsToNumber - one', () => {
  expect(wordsToNumber('one')).toBe(1);
});
test('wordsToNumber - two hundred', () => {
  expect(wordsToNumber('two hundred')).toBe(200);
});
test('wordsToNumber - three thousand', () => {
  expect(wordsToNumber('three thousand')).toBe(3000);
});     