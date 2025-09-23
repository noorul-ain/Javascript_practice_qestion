
// 8. Check triangle type
let s1 = 5, s2 = 5, s3 = 5;
if (s1 === s2 && s2 === s3) {
  console.log("Equilateral Triangle");
} else if (s1 === s2 || s2 === s3 || s1 === s3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}