function solve(arr) {
    const resulr = [];

    for (let element of arr) {
        if (Math.max(...resulr) <= element) {
            resulr.push(element);
        }
    }

    return resulr
}

console.log(solve([1, 3, 8, 4, 10, 12, 12, 3, 2, 24]));
