// store data in the avrible
let givenString = prompt("Insert your string:");
let reversedString = "";
let stringWithoutWhitespace = givenString.replace(/\s+/g, "");
let numberOfVowels = countVowels(stringWithoutWhitespace);
let i = stringWithoutWhitespace.length - 1; // last to first

// loop until all char. are showed
// and removewhitespace
while (i >= 0) {
  reversedString += stringWithoutWhitespace[i];
  i--;
}

// Function to count vowels in a string

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}
// output
console.log(reversedString);
console.log(`The number of vowels: ${numberOfVowels}`);
