// 3. Find the smallest number in an array using a loop
let arr = [12, 45, 7, 89, 23];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log("Smallest =", smallest);