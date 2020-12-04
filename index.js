let inquirer = require('inquirer');
let parts = [];
for (let i = 0; i < 25; i++) {
    try {
        let part1 = require('./day' + (i + 1) + '/part1');
        parts.push([]);
        parts[i][0] = part1;
    } catch (e) {

    }
    try {
        let part2 = require('./day' + (i + 1) + '/part2');
        parts[i][1] = part2;
    } catch (e) {

    }
}
var questions = [
    {
        type: 'list',
        name: 'day',
        message: 'What day to run?',
        default: parts.length - 1,
        choices: Array(parts.length).fill().map((val, index) => index + 1)
    },
    {
        type: 'list',
        name: 'part',
        message: 'What part to run?',
        choices: [1, 2]
    },
];
inquirer.prompt(questions).then(answers => {
    const runFunc = parts[answers.day - 1][answers.part - 1];
    runFunc();
});