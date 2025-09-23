
// 19. ATM Menu
choice = 1;
let balance = 1000, amount = 200;
switch (choice) {
  case 1: // Withdraw
    if (amount <= balance) { balance -= amount; console.log("Withdraw Successful. Balance:", balance); }
    else console.log("Insufficient Balance");
    break;
  case 2: // Deposit
    balance += amount; console.log("Deposit Successful. Balance:", balance);
    break;
  case 3: // Check Balance
    console.log("Balance:", balance);
    break;
  default:
    console.log("Invalid Choice");
}