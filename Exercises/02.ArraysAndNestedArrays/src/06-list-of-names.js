function solve(names) {
    const result = names.sort((a, b) => a.localeCompare(b))
        .map((el, ix) => `${ix + 1}.${el}`);

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
