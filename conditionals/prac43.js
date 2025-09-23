
// 3. BMI Calculator
let weight = 70, height = 1.75;
let bmi = weight / (height * height);
if (bmi < 18.5) console.log("Underweight");
else if (bmi < 24.9) console.log("Normal");
else if (bmi < 29.9) console.log("Overweight");
else console.log("Obese");