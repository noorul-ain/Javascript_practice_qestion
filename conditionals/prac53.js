
// 13. Palindrome Number
num = 121; temp = num;
let rev = 0;
while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log(num === rev ? "Palindrome" : "Not Palindrome");