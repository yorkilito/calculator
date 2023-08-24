
function add(number1, number2){
    return number1 + number2;

}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1*number2;
}

function divide(number1, number2){
    return number1/number2;

}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, number1, number2){
    switch(operator){
        case "+":
            return add(number1,number2);
            break;
        case "-":
            return subtract(number1,number2);
            break;
        case "*":
            return multiply(number1,number2);
            break;
        case "/":
            return divide(number1,number2);
            break;
        default:
            return undefined;
    }

}

console.log(operate("/",15,5));