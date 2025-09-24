

// 10. Sort array in ascending order
function sortAsc(arr) {
  return arr.slice().sort((a, b) => a - b);
}
console.log(sortAsc([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]


// arr.slice()

// Array ka shallow copy banata hai.

// Matlab sortedArr ek naya array hoga, aur arr safe (unchanged) rahega.
// .sort((a, b) => a - b)

// Copy wale array ko ascending order me sort karega.

// a - b comparator lagata hai (agar negative → a pehle, positive → b pehle).