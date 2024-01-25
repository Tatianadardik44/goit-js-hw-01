function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    let value = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    
    return value;
}
makeTransaction();
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));