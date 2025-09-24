
// 6. Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World")); // Output: 3