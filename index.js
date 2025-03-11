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

const decimal = document.createElement('button');
decimal.textContent = '.';
decimal.id = 'decimal';
container.appendChild(decimal);

for (let i=0; i<10; i++){
    const digit = document.createElement('button');
    digit.textContent = i;
    digit.className = 'digit';
    container.appendChild(digit);
}

for (j of operations){
    const operator = document.createElement('button');
    operator.textContent = j;
    operator.className = 'operator';
    container.appendChild(operator);
}

const ac = document.createElement('button');
ac.textContent = 'ac';
ac.id = 'ac';
container.appendChild(ac);

const equals = document.createElement('button');
equals.textContent = '=';
equals.id = 'equals';
container.appendChild(equals);


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
        if(number1){
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
        }else if(!showing){
            showing = 'Error';
            document.querySelector('#display').value = showing;
            showing = '';
            return;
        }else{
            showing = showing.toFixed(2);
            document.querySelector('#display').value = showing;
            number1 = showing;
        }
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