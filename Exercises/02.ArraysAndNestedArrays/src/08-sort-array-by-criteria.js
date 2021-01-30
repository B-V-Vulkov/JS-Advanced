function solve(arr) {
    const result = arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });

    return result.join('\n');
}

console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));