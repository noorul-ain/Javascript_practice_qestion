


// 11. Find second largest of three numbers
let a1 = 12, a2 = 25, a3 = 18;
if ((a1 > a2 && a1 < a3) || (a1 > a3 && a1 < a2)) {
  console.log("Second Largest:", a1);
} else if ((a2 > a1 && a2 < a3) || (a2 > a3 && a2 < a1)) {
  console.log("Second Largest:", a2);
} else {
  console.log("Second Largest:", a3);
}