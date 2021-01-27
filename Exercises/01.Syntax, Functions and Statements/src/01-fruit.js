function getFruitMessage (fruitName, weightInGrams, price){
    let weightInKilograms = weightInGrams / 1000;
    return `I need $${(weightInKilograms * price).toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitName}.`;
}

console.log(getFruitMessage('orange', 2500, 1.80));
