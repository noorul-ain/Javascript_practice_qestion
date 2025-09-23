
// 12. String Character Type
let str = "Hello123!";
if (/^[A-Za-z]+$/.test(str)) console.log("Alphabets");
else if (/^[0-9]+$/.test(str)) console.log("Digits");
else console.log("Special Characters");
