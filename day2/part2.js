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
            let charCount = 0;
            let position1 = parseInt(numbers[0]) - 1;
            let position2 = parseInt(numbers[1]) - 1;

            // if position 1 or position 2 equals character, is valid
            if (password[position1] == characters ^ password[position2] == characters) {
                validPasswords++;
            }

        });

        console.log(validPasswords);
    });
}