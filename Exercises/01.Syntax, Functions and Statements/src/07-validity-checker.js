function solve(x1, y1, x2, y2) {
    const matrix = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ];

    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        const horizontalDistance = Math.abs(matrix[i][0] - matrix[i][2]);
        const verticalDistance = Math.abs(matrix[i][1] - matrix[i][3]);
        const currentDistance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));

        result[i] = `{${matrix[i][0]}, ${matrix[i][1]}} to {${matrix[i][2]}, ${matrix[i][3]}} ${Number.isInteger(currentDistance) ? 'is valid' : 'is invalid'}`;
    }

    return result.join('\n');
}

console.log(solve(3, 0, 0, 4));
console.log(solve(2, 1, 1, 1));