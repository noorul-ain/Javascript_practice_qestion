

// 10. Switch Menu Program
let choice = 3, number = 17;
switch (choice) {
  case 1: console.log(number % 2 === 0 ? "Even" : "Odd"); break;
  case 2: console.log(number >= 0 ? "Positive" : "Negative"); break;
  case 3:
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) { isPrime = false; break; }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
    break;
  default: console.log("Invalid choice");
}