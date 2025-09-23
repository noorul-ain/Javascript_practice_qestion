
// 5. Armstrong Number
let num = 153, sum = 0, temp = num;
let digits = num.toString().length;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** digits;
  temp = Math.floor(temp / 10);
}
console.log(num === sum ? "Armstrong" : "Not Armstrong");
