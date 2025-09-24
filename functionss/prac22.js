// 2. Check if a string is palindrome
function isPalindrome(str) {
        return str === str.split("").reverse().join("");
    }
console.log(isPalindrome("racecar")); // true

// "racecar".split("") 
// // → ["r", "a", "c", "e", "c", "a", "r"]
// ["r", "a", "c", "e", "c", "a", "r"].reverse()
// // → ["r", "a", "c", "e", "c", "a", "r"]  (same in this case because "racecar" is symmetric)
// ["r", "a", "c", "e", "c", "a", "r"].join("")
// // → "racecar"
