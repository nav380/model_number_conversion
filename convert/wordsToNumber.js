// converters/wordsToNumber.js
const small = {
    zero: 0, one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
    fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
    twenty: 20, thirty: 30, forty: 40, fifty: 50,
    sixty: 60, seventy: 70, eighty: 80, ninety: 90
  };
  
  const scales = {
    hundred: 100,
    thousand: 1_000,
    million: 1_000_000,
    billion: 1_000_000_000,
    trillion: 1_000_000_000_000
  };
  
  function wordsToNumber(text) {
    text = text.toLowerCase().replace(/-/g, ' ').replace(/ and /g, ' ');
    const words = text.split(/\s+/);
  
    let total = 0;
    let current = 0;
  
    for (let word of words) {
      if (small[word] !== undefined) {
        current += small[word];
      } else if (word === 'hundred') {
        current *= 100;
      } else if (scales[word]) {
        current *= scales[word];
        total += current;
        current = 0;
      }
    }
  
    return total + current;
  }
  
  module.exports = wordsToNumber;
  