
// 7. Shopping Discount
let price = 1200, discount = 0;
if (price > 1000) discount = 0.2;
else if (price > 500) discount = 0.1;
let finalPrice = price - price * discount;
console.log("Final Price:", finalPrice);