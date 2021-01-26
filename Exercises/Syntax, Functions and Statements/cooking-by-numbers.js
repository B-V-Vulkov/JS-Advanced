function solve(number, ...operations) {
    const operationsParser = {
        chop(number) { return number / 2; },
        dice(number) { return Math.sqrt(number); },
        spice(number) { return number + 1; },
        bake(number) { return number * 3; },
        fillet(number) { return number - (number / 100) * 20; }
    }

    const result = [];
    let currentNumber = Number(number);

    for (let i = 0; i < operations.length; i++) {

        currentNumber = operationsParser[operations[i]](currentNumber);
        result.push(currentNumber);
    }

    return result.join('\n');
}

console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'))