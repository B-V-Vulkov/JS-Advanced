function getCommonDivisor(firstNumber, secondNumber) {
    let smallestNumber;

    if (firstNumber < secondNumber) {
        smallestNumber = firstNumber;
    } else {
        smallestNumber = secondNumber;
    }

    for (let i = smallestNumber; i >= 0; i--) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            return i;
        }
    }
}

console.log(getCommonDivisor(2154, 458));
