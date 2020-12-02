let inquirer = require('inquirer');
var questions = [
    {
        type: 'input',
        name: 'day',
        message: 'What day to run?'
    },
    {}
];
inquirer.prompt(["What day to run?"]).then(answers => {

});