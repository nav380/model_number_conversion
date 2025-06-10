# 📦 number-into-words

A lightweight and efficient Node.js module that converts numbers into English words and vice versa — supports values from 0 to trillions.

---

## ✨ Features

- 🔁 Convert numbers to English words (e.g., `123 → "one hundred twenty-three"`)
- 🔢 Convert English words back to numbers (e.g., `"one thousand five"` → `1005`)
- 🚀 Supports large numbers (up to trillions)
- ✅ Fully tested using Jest
- 📦 Easy to use as an NPM module

---

### 🧾 Example


const { numberToWords, wordsToNumber } = require('number-into-words');

// Convert a number into words
const num = 1234567890;
const words = numberToWords(num);
console.log("Words:", words);
// Output: "one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety"

// Convert words back into number
const parsedNumber = wordsToNumber(words);
console.log("Parsed Number:", parsedNumber);
// Output: 1234567890 

---

## 📦 Installation

Install the module using npm:

```bash
npm i number-into-words-nav



