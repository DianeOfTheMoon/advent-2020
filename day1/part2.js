const fs = require('fs');

fs.readFile('./day1/data/part1.data', (err, data) => { // read a file from the filesystem
    let elements = data.toString().split('\r\n');  // the file is one big string, so let's split it into the various individual numbers
    elements = elements.map((val) => parseInt(val)); // those numbers are technically strings, so let's make them real numbers



    for (let index = 0; index < elements.length; index++) { // Loop the array
        let item = elements[index]; // We want three numbers, so start with first number
        let otherItem = 2020 - item; // We know that the other two numbers must add to otherItem 
        let numbers = findTwo(elements, otherItem); // Use our function to find the two other numbers
        if (numbers != null) { // findTwo will return null if not found, so this would mean it found two
            console.log(item, numbers.item, numbers.otherItem, item * numbers.item * numbers.otherItem); //Print out the numbers
            break;
        }
    }
});


// Finds two numbers in the array that equals the passed in number
function findTwo(elements, number) {

    for (let index = 0; index < elements.length; index++) { // Loop through the array, one index element [0], [1], [2] at a time
        let item = elements[index]; // Get the value from that index... elements[0] is 2004 and elements[1] == 1823

        let otherItem = number - item; // subtract the number from 2020 to get what the other number might need to be

        if (elements.includes(otherItem, index)) { // use the includes function that arrays have to see if the other item is in the array
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

            return { item, otherItem };
        }
    }

    return null;
}