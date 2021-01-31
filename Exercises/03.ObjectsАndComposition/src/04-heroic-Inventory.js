function solve(input) {
    const hereRegister = [];

    while (input.length) {
        const line = input.shift();
        const [name, levelStr, itemsStr] = line.split(' / ');

        hereRegister.push({
            name,
            level: Number(levelStr),
            items: itemsStr === undefined ? [] : itemsStr.split(', ')
        });
    }

    return JSON.stringify(hereRegister);
}

const input = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 '
]

console.log(solve(input));