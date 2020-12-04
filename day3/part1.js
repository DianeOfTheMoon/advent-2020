const fs = require('fs');

module.exports = () => {
    fs.readFile('./day3/data/part1.data', (err, data) => { // read a file from the filesystem
        let rows = data.toString().split('\r\n');
        let answer = checkSlope(rows, 3, 1);
        console.log(answer);

    });
}

function checkSlope(trees, x, y) {
    let curX = 0;
    let curY = 0;
    let treeCount = 0;
    const yIncr = y;
    const xIncr = x;

    while (curY < trees.length) {
        if (trees[curY][curX] == '#') {
            treeCount++;
        }
        curX += xIncr;
        if (curX >= trees[curY].length) {
            curX -= trees[curY].length;
        }
        curY += yIncr;
    }

    return treeCount;
}