const fs = require('fs');

module.exports = () => {
    fs.readFile('./day4/data/part1.data', (err, data) => { // read a file from the filesystem
        const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
        let allValid = 0;
        let entries = data.toString().split('\r\n\r\n').map((passport) => {
            let sanitized = passport.replace(/\r\n/g, ' ').split(' ').map((val) => val.split(':')[0]);
            let valid = required.every((key) => sanitized.includes(key));
            if (!valid) {
                return;
            }
            allValid++;
            return sanitized;
        });
    });
}