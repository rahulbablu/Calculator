let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    const clear = document.getElementById("clear");
    const del = document.getElementById("delete");
    const equals = document.getElementById("equals");
    const decimal =document.getElementById("decimal");

    let numbers = document.querySelectorAll(".numbers");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.getElementById("previous");
    let currentScreen =document.getElementById("current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    equals.addEventListener("click", function(){
        if(currentValue != "" && previousValue != ""){
            calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = previousValue;
        }
    });

    decimal.addEventListener("click", function(){
        addDecimal();
        currentScreen.textContent = currentValue;
    })
});

function handleNumber(num){
    currentValue += num;
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue= '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }
    else if(operator === "-"){
        previousValue -= currentValue;
    }
    else if(operator === "*"){
        previousValue *= currentValue;
    }else if(operator === "/"){
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
}