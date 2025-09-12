let kms = 19.5;
let price = 0;

if (kms <= 4) {
    price = 30;
} else if (kms <= 9) {
    price = 30 + (kms - 4) * 10;
} else if (kms <= 19) {
    price = 30 + 5 * 10 + (kms - 9) * 15;
} else {
    price = 30 + 5 * 10 + 10 * 15 + (kms - 19) * 20;
}

console.log("Total price:", price,"rupees");