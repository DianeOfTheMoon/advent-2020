const fs = require('fs');

fs.readFile('./day1/data/part1.data', (err, data) => { // read a file from the filesystem
    let elements = data.toString().split('\r\n');  // the file is one big string, so let's split it into the various individual numbers
    elements = elements.map((val) => parseInt(val)); // those numbers are technically strings, so let's make them real numbers

    for (let index = 0; index < elements.length; index++) { // Loop through the array, one index element [0], [1], [2] at a time
        let item = elements[index]; // Get the value from that index... elements[0] is 2004 and elements[1] == 1823
        let otherItem = 2020 - item; // subtract the number from 2020 to get what the other number might need to be
        if (elements.includes(otherItem, index)) { // use the includes function that arrays have to see if the other item is in the array
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
            console.log(item, otherItem, otherItem * item); // log out the result if so
            break;
        }
    }

});