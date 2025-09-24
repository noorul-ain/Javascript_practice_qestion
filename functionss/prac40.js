// 20. Capitalize first letter of each word
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("the quick brown fox")); // Output: The Quick Brown Fox