const fs = require('fs');

module.exports = () => {
    fs.readFile('./day2/data/part1.data', (err, data) => { // read a file from the filesystem
        const dataLines = data.toString().split('\r\n');

        let validPasswords = 0;
        dataLines.forEach((passwordEntry) => {
            let entries = passwordEntry.split(' ');
            let numbers = entries[0].split('-');
            let characters = entries[1].substring(0, entries[1].length - 1);
            let password = entries[2];

            let passSplit = password.split(characters);
            let charCount = passSplit.length - 1;

            // check if charCount is greater than or equal to numbers[0]
            // check if charCount is less than or equal to numbers[1]
            if (charCount >= parseInt(numbers[0]) && charCount <= parseInt(numbers[1])) {
                // if so, is valid
                validPasswords++;
            }
        });

        console.log(validPasswords);
    });
}



// 2-3
// 23
// ['23']
// 0 dashes, array 1 element
// ['2', '3']
// 1 dash, array 2 elements