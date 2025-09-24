// 15. Average of numbers in array
function average(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // Output: 3