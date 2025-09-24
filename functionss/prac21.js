
// 1. Factorial of a number
function factorial(n) {
  if (n < 0) return "Error: Negative number";
  if (n === 0) return 1;
  return n * factorial(n - 1);
}