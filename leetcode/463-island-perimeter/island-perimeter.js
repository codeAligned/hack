
const islandPerimeter = grid => {
    const countBorders = (i, j) => {
        let borders = 0;

        if (i === 0 || grid[i - 1][j] === 0) {
            borders++;
        }

        if ((i === grid.length - 1) || grid[i + 1][j] === 0) {
            borders++;
        }

        if (j === 0 || grid[i][j - 1] === 0) {
            borders++;
        }

        if ((j === grid[0].length - 1) || grid[i][j + 1] === 0) {
            borders++;
        }

        return borders;
    }

    let borders = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                borders += countBorders(i, j);
            }
        }
    }

    return borders;
}
