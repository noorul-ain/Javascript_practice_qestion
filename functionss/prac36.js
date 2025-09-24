// 16. Find longest word in a sentence
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
    for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
    }
    return longest;
}
console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: jumped