function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        const currnetValue = arr.pop();
        arr.unshift(currnetValue);
    }

    return arr.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
