
// 6. Perfect Number
num = 28; sum = 0;
for (let i = 1; i < num; i++) {
  if (num % i === 0) sum += i;
}
console.log(num === sum ? "Perfect Number" : "Not Perfect");
