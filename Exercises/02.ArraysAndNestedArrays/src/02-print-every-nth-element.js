function solve(arr, index) {
    return arr.filter((el, ix) => ix % index == 0);
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
