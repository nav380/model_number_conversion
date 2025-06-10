// converters/numberToWords.js
const units = ['','one','two','three','four','five','six','seven','eight','nine'];
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const scales = ['','thousand','million','billion','trillion'];

function convertHundreds(num) {
  let result = '';
  const hundred = Math.floor(num / 100);
  const remainder = num % 100;

  if (hundred > 0) result += units[hundred] + ' hundred';

  if (remainder > 0) {
    if (result) result += ' ';
    if (remainder < 10) result += units[remainder];
    else if (remainder < 20) result += teens[remainder - 10];
    else {
      result += tens[Math.floor(remainder / 10)];
      if (remainder % 10 !== 0) result += '-' + units[remainder % 10];
    }
  }

  return result.trim();
}

function numberToWords(num) {
  if (typeof num !== 'number' || num < 0 || num > 999999999999999)
    throw new Error('Only numbers from 0 to 999 trillion supported.');

  if (num === 0) return 'zero';

  const parts = [];
  let scaleIndex = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk) {
      const chunkWords = convertHundreds(chunk);
      const scale = scales[scaleIndex];
      parts.unshift(chunkWords + (scale ? ' ' + scale : ''));
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }

  return parts.join(' ').trim();
}

module.exports = numberToWords;
