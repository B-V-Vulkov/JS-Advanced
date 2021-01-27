function isSame(numbers) {

    const numbersStr = numbers.toString();

    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numbersStr.length; i++) {
        sum += Number(numbersStr[i]);

        if (numbersStr[i] != numbersStr[0]) {
            isSame = false;
        }
    }

    return `${isSame}\n${sum}`;
}

console.log(isSame(2222222));
console.log(isSame(222222223));
