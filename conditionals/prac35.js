// 15. Check if string is palindrome
let str = "madam";
let reversed = str.split("").reverse().join("");
if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// split("") → string ko array me todta hai → "madam" → ["m","a","d","a","m"]

// reverse() → array ko ulta kar deta hai → ["m","a","d","a","m"] (same rahega is case me)

// join("") → array ko wapas string banata hai → "madam"