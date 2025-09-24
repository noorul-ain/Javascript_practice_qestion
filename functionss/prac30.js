

// 10. Sort array in ascending order
function sortAsc(arr) {
  return arr.slice().sort((a, b) => a - b);
}
console.log(sortAsc([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]