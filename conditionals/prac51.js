

// 11. Fibonacci Check
num = 21;
let a = 0, b = 1, found = false;
while (b <= num) {
  if (b === num) { found = true; break; }
  [a, b] = [b, a + b];
}
console.log(found ? "In Fibonacci" : "Not in Fibonacci");
