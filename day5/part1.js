
const fs = require('fs');

module.exports = () => {
    fs.readFile('./day5/data/part1.data', (err, data) => { // read a file from the filesystem
        const assignments = data.toString().split('\r\n');
        const maxRow = 128;
        const maxCol = 8;
        let maxId = 0;

        assignments.map((assignment) => {
            let row = 0;
            let col = 0;
            let curRow = maxRow;
            let curCol = maxCol;
            let rowAss = assignment.slice(0, 7);
            let colAss = assignment.slice(7);
            for (let dir of rowAss) {
                curRow /= 2;
                if (dir == 'B') {
                    row += curRow;
                }
            }

            for (let dir of colAss) {
                curCol /= 2;
                if (dir == 'R') {
                    col += curCol;
                }
            }

            let id = row * 8 + col;
            if (id > maxId) {
                maxId = id;
            }
        });

        console.log(maxId);
    });
}