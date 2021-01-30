function solve(matrix) {
    const transposedMatrix = transpose(matrix);
    const rowSum = getRowSum(matrix);
    const colSum = getRowSum(transposedMatrix);

    return rowSum.concat(colSum).every((el, _, arr) => el === arr[0]);

    function getRowSum(matrix) {
        const rowSum = [];
        for (let i = 0; i < matrix.length; i++) {
            const curRow = matrix[i].reduce((acc, el) => acc + el, 0);
            rowSum.push(curRow);
        }

        return rowSum;
    }

    function transpose(matrix) {
        let transposedMatrix = [];

        for (let row = 0; row < matrix.length; row++) {
            const curRow = [];
            for (let col = 0; col < matrix.length; col++) {

                curRow.push(matrix[col][row]);
            }

            transposedMatrix.push(curRow);
        }

        return transposedMatrix;
    }
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
