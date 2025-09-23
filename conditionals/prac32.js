// 12. Check if a number is a **prime number**.  
let num = 7;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not prime");
}