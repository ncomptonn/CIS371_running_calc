const readline = require('readline')
const read = readline.createInterface(process.stdin, process.stdout)

//initialize total
current_total = 0.0;

//set valid operations
operations = ["+", "-", "/", "*"];

//print total and prompt user for operation 
function prompt_op(){
    console.log("\nCurrent total: ", current_total);
    read.question("Enter operation: ", operation => check_op(operation));
}

//prompt user for value
function prompt_value(operation){
    read.question("Enter value: ", value => check_values(operation, parseFloat(value)));
}

//check operation
function check_op(operation){
    if (operation == 'q')
        quit();
    else if (!operations.includes(operation)){
        console.log("Invalid operation, try again\n");
        prompt_op();
    }
    else
        prompt_value(operation)
}

//check value
function check_values(operation, value){
    if (operation == "/" && value == 0){
        console.log("Can't divide by 0, try again\n");
        prompt_op();
    }
    else
        act_operation(operation, value)
}

//perform operation w/ value on running total 
function act_operation(operation, value){
    if (operation == '+') {
        current_total += value;
    }
    else if (operation == '-') {
        current_total -= value;
    }
    else if (operation == '*') {
        current_total = current_total * value;
    }
    else {
        current_total = current_total / value;
    }
    prompt_op();
}

//on quit
function quit(){
    console.log("\nOkay! See ya later!\n");
    read.close();
}

//welcome users
console.log("\nWelcome to Running-calc.js\n");

//begin calc
prompt_op();
