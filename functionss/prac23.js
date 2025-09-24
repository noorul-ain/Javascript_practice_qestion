
// 3. Sum of all numbers in an array
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Start: acc = 0

// First element: acc = 0 + 1 = 1
// Second element: acc = 1 + 2 = 3
// Third element: acc = 3 + 3 = 6
// Fourth element: acc = 6 + 4 = 10
// Fifth element: acc = 10 + 5 = 15
