const cPrompt = require("prompt-sync")();

const productPrice: number = parseInt(cPrompt("Enter the product price: "));
const discountedPrice: number = calculateDiscount(productPrice);
console.log(`The discounted price is: $${discountedPrice.toFixed(2)}`);


function calculateDiscount(price: number): number {
    let discount: number = price > 100 ? 0.1 : 0.05;
    const discountedPrice: number = price - price * discount;
    return discountedPrice;
}