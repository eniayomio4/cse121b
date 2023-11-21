/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return  number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
    
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

multiply = (number1, number2) => {
    return number1 * number2;
} 

multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    return document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    return document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', selectFunction);

function selectFunction() {

    const subTotal = Number(document.querySelector('#subtotal').value);
    const checkbox = document.getElementById('member');
    if (checkbox.checked === true) {
        return document.querySelector('#total').value = (subTotal - (subTotal * 0.15)).toFixed(2);
    }

}




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = array;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = array.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = array.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = array.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = array.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const arrayMultiplied = array.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = arrayMultiplied.reduce((sum, number) => sum + number);