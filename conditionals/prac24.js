

// 4. Check if a year is a **leap year**.  
// A year is a leap year if it is divisible by 4, but not divisible by 100,  
// unless it is also divisible by 400. For example, 2000 and 2024 are leap years,  
// but 1900 and 2023 are not.   
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}