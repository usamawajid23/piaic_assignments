"use strict";
const cPrompt = require("prompt-sync")();
const productPrice = parseInt(cPrompt("Enter the product price: "));
const discountedPrice = calculateDiscount(productPrice);
console.log(`The discounted price is: $${discountedPrice.toFixed(2)}`);
function calculateDiscount(price) {
    let discount = price > 100 ? 0.1 : 0.05;
    const discountedPrice = price - price * discount;
    return discountedPrice;
}
