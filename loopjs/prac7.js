// 7. Factorial of a number (e.g., 5!)
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`Factorial of ${num} is ${fact}`);

// Start: i = 1

// Condition: i <= 5

//  step : fact = fact × i

// apply iteration :

// i = 1 → fact = 1 × 1 = 1

// i = 2 → fact = 1 × 2 = 2

// i = 3 → fact = 2 × 3 = 6

// i = 4 → fact = 6 × 4 = 24

// i = 5 → fact = 24 × 5 = 120