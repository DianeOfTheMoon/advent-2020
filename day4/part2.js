const fs = require('fs');

module.exports = () => {
    fs.readFile('./day4/data/part1.data', (err, data) => { // read a file from the filesystem
        const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
        let allValid = 0;
        let entries = data.toString().split('\r\n\r\n').map((passport) => {
            let passMap = new Map();
            let sanitized = passport.replace(/\r\n/g, ' ').split(' ').map((val) => {
                let keyVal = val.split(':');
                passMap.set(keyVal[0], keyVal[1]);
                return keyVal[0];
            });
            let valid = required.every((key) => sanitized.includes(key));
            if (!valid
                || !validBirthYear(passMap)
                || !validIssueYear(passMap)
                || !validExpirationYear(passMap)
                || !validHeight(passMap)
                || !validHair(passMap)
                || !validEye(passMap)
                || !validPid(passMap)
            ) {
                return;
            }
            allValid++;
            return sanitized;
        });
        console.log(allValid);
    });
}


function validBirthYear(passMap) {
    const regex = RegExp(/^(19[2-8][0-9]|199[0-9]|200[0-2])$/);
    const isValid = regex.test(passMap.get('byr'));
    return isValid;
}

function validIssueYear(passMap) {
    const regex = RegExp(/^(201[0-9]|2020)$/);
    return regex.test(passMap.get('iyr'));
}

function validExpirationYear(passMap) {
    const regex = RegExp(/^(202[0-9]|2030)$/);
    return regex.test(passMap.get('eyr'));
}

function validHeight(passMap) {
    const regex = RegExp(/^((59|6[0-9]|7[0-6])in|(1[5-8][0-9]|19[0-3])cm)$/);
    return regex.test(passMap.get('hgt'));
}

function validHair(passMap) {
    const regex = RegExp(/^#([0-9a-f]{6})$/);
    return regex.test(passMap.get('hcl'));
}

function validEye(passMap) {
    const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    return valid.includes(passMap.get('ecl'));
}

function validPid(passMap) {
    const regex = RegExp(/^[0-9]{9}$/);
    return regex.test(passMap.get('pid'));
}