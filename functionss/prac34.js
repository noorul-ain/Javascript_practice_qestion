// 14. Count occurrences of element in array
function countOccurrences(arr, val) {
  return arr.reduce((count, current) => (current === val ? count + 1 : count), 0);
}
console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1)); // Output: 3