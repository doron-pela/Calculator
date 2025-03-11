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
    if(number1||number2){
        showing = '';
    }
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
        if(!number1){
            display(target);
        }
    }

    if (target.matches('#ac')){
        clear();
        return;
    }

    if (target.matches('.operator')){
        number1 = parseFloat(showing);
        operation = target.textContent;
    }

    if(number1){
        if(target.matches('.digit')){
            showing += target.textContent;
            number2 = parseFloat(showing);
        }
    }

    if(target.matches('#equals')){
        showing = operate(number1, number2, operation);
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