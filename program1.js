const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 'L') {
            return;
        }

        grid[row][col] = 'W';

        for (const [dr, dc] of directions) {
            dfs(row + dr, col + dc);
        }
    }

    let islandCount = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 'L') {
                dfs(row, col);
                islandCount++;
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;
