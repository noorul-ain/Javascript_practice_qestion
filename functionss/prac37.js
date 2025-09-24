// 17. Find shortest word in a sentence
function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (const word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}
console.log(shortestWord("The quick brown fox jumped over the lazy dog")); // Output: The