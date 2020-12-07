const fs = require('fs');

module.exports = () => {
    fs.readFile('./day6/data/part1.data', (err, data) => { // read a file from the filesystem
        const groups = data.toString().split('\r\n\r\n');
        let yesTotal = 0;
        groups.map((group) => {
            let yes = null;
            const passengers = group.split('\r\n');
            passengers.map((passenger) => {
                let myYes = new Set();
                for (const answer of passenger) {
                    myYes.add(answer);
                }
                if (yes == null) {
                    yes = myYes;
                } else {
                    yes = intersection(yes, myYes);
                }
            });
            yesTotal += yes.size;
        });
        console.log(yesTotal);
    });
}
function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}
function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}