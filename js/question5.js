// Pris per vara
let priceOfShirt = 25;
let priceOfPants = 40;
let priceOfShoes = 60;

// Funktion som betalar hela summan - kundkort. Returnera totalbeloppet
function calculateTotal(shirtQty, pantsQty, shoesQty) {
    let total = (shirtQty * priceOfShirt) + (pantsQty * priceOfPants) + (shoesQty * priceOfShoes);
    return total;
}


// Exampel
let totalPrice = calculateTotal(10, 10, 10);  // Köper 2 shirts, 1 par byxor, 1 par skor
console.log(totalPrice)