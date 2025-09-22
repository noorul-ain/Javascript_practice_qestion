// 4. Count how many times a specific element appears in an array
let arr = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    count++;
  }
}

console.log(`${target} appears ${count} times`);