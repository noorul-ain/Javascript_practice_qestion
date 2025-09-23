
// 20. Quadratic Equation Roots
let a1 = 1, b1 = -3, c1 = 2;
let discriminant = b1 * b1 - 4 * a1 * c1;
if (discriminant > 0) {
  let root1 = (-b1 + Math.sqrt(discriminant)) / (2 * a1);
  let root2 = (-b1 - Math.sqrt(discriminant)) / (2 * a1);
  console.log("Two Roots:", root1, root2);
} else if (discriminant === 0) {
  let root = -b1 / (2 * a1);
  console.log("One Root:", root);
} else {
  console.log("Complex Roots");
}