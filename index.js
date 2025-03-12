let number1;
let number2;
let operation;
const operations = ['+', '-', '*', '/'];
let showing = '';

const container = document.querySelector('.container');

const input = document.createElement('input');
input.type = 'text';
input.id = 'display';
container.appendChild(input);

const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

const decimal = document.createElement('button');
decimal.textContent = '.';
decimal.id = 'decimal';
buttonContainer.appendChild(decimal);

for (let i=0; i<10; i++){
    const digit = document.createElement('button');
    digit.textContent = i;
    digit.className = 'digit';
    buttonContainer.appendChild(digit);
}

for (j of operations){
    const operator = document.createElement('button');
    operator.textContent = j;
    operator.className = 'operator';
    buttonContainer.appendChild(operator);
}

const ac = document.createElement('button');
ac.textContent = 'ac';
ac.id = 'ac';
buttonContainer.appendChild(ac);

const equals = document.createElement('button');
equals.textContent = '=';
equals.id = 'equals';
buttonContainer.appendChild(equals);

container.appendChild(buttonContainer);

function display(target){
    if(target.matches('button')){
        showing += target.textContent;
        document.querySelector('#display').value = showing;
    }
}

function clear(){
    showing = '';
    document.querySelector('#display').value = showing;
    number1 = undefined;
    number2 = undefined;
    operation = undefined;
}

container.addEventListener('click', function(e){
    const target = e.target;

    if(target.matches('.digit')){
        display(target);
    }

    if (target.matches('.operator')){
        if(operation){
            return;
        }
        number1 = parseFloat(showing);
        operation = target.textContent;
        if(number1 || number1===0){
            showing = '';
        }
    }

    if(target.matches('#decimal')){
        if(!showing.includes('.')){
            showing += '.';
        document.querySelector('#display').value = showing;
        }
    }
    
    if (target.matches('#ac')){
        clear();
        return;
    }

    if(target.matches('#equals')){
        number2 = parseFloat(showing);
        showing = operate(number1, number2, operation);
        if(showing=== Infinity){
            document.querySelector('#display').value = `Cannot divide by 0`;
            return;
        }else if(!showing && !showing===0){
            showing = 'Error';
            document.querySelector('#display').value = showing;
            showing = '';
        }else{
            showing = showing.toFixed(2);
            document.querySelector('#display').value = showing;
            number2 = undefined;
            operation = '';
            number1 = showing;
        }
        
        // result = showing;
        return;
    }
})


function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(number1, number2, operation){
    if (operation ==='+'){
        return add(number1,number2);
    }else if(operation ==='-'){
        return subtract(number1,number2);
    }else if(operation ==='*'){
        return multiply(number1,number2);
    }else if(operation ==='/'){
        return divide(number1,number2);
    }
}