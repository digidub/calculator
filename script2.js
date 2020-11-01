//DOM identifiers

const numpad = document.querySelectorAll(".calculator-numpad");
const opButton = document.querySelectorAll(".calculator-operator");
const calcDisplay = document.getElementsByClassName("calculator-display")[0];
const clearButton = document.querySelector(".calculator-clear");
const equalsButton = document.getElementsByClassName("calculator-equals")[0];
const periodButton = document.querySelector(".calculator-period");
const calculation = document.querySelector(".calculation");
const calcButton = document.querySelector(".calc-btn");

function updateDisplay(btn) {
    if (calcDisplay.textContent == null) {
        calcDisplay.textContent = btn.textContent;
        
    }
    else calcDisplay.textContent += parseFloat(btn.textContent);
}


for (let i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener('click', () => {
        updateDisplay(numpad[i]);
    });
};



//operator functions for calculator

function add(x, y) {
    return (parseFloat(x) + parseFloat(y));
}

function subtract(x, y) {
    return (parseFloat(x) - parseFloat(y));

}

function multiply(x, y) {
    return (parseFloat(x) * parseFloat(y));
}

function divide(x, y) {
    return (parseFloat(x) / parseFloat(y));
}
//calculates x as a percent of y
function percent(x, y) {
    return (parseFloat(x / 100 * y));
}

//main operator that calls the above operators

function operator(x, y, o) {
    if (o == "+") {
        return add(x, y);
    }
    else if (o == "-") {
        return subtract(x, y);
    }
    else if (o == "*") {
        return multiply(x, y);
    }
    else if (o == "%") {
        return percent(x, y);
    }
    else {
        return divide(x, y);
    };
}

//DOM identifiers

const numpad = document.querySelectorAll(".calculator-numpad");
const opButton = document.querySelectorAll(".calculator-operator");
const calcDisplay = document.getElementsByClassName("calculator-display")[0];
const clearButton = document.querySelector(".calculator-clear");
const equalsButton = document.getElementsByClassName("calculator-equals")[0];
const periodButton = document.querySelector(".calculator-period");


//initialise variables
let resetDisplay = false;
calcDisplay.textContent = 0;
let x = 0;
let y = 0;

/* CALCULATOR FUNCTIONS */

//function that updates display
function updateDisplay(btn) {
    //resets the display post-operator being pressed
    if (resetDisplay) {
        calcDisplay.textContent = btn.textContent;
        resetDisplay = false;
        //allows only one "0" to be entered at the start of a number   
    }
    else if (calcDisplay.textContent === 0) {
        calcDisplay.textContent = parseFloat(btn.textContent);
        //appends numbers on multipress
    }
    else calcDisplay.textContent += parseFloat(btn.textContent);
}

//function to clear calculator display (CE button)
function clearDisplay() {
    calcDisplay.textContent = 0;
    x = parseFloat(0);
    y = parseFloat(0);
    return;
}

//operator function
function operate(op) {
    o = op.textContent;
    x = parseInt(calcDisplay.textContent);
    resetDisplay = true;
    return;
}

//period function
function addPeriod() {
    if (resetDisplay) {
        calcDisplay.textContent = parseFloat(0.);
        resetDisplay = false;
        return;
    }
    else if (!calcDisplay.textContent.includes(".")) {
        calcDisplay.textContent += ".";
        return;
    }

};

//equals function to tie the sum together
function equals() {
    if (x == 0 && y == 0) {
        clearDisplay();
        return;
    };
    y = calcDisplay.textContent
    calcDisplay.textContent = operator(x, y, o);
    x = parseFloat(0);
    return;
}

/* EVENT LISTENERS */

//add event listeners to each numpad button
for (let i = 0; i < numpad.length; i++) {
    numpad[i].addEventListener('click', () => {
        updateDisplay(numpad[i]);
    });
};

//add event listeners to each operator button 
for (let i = 0; i < opButton.length; i++) {
    opButton[i].addEventListener('click', () => {
        operate(opButton[i]);
    })
}

//add event listener to clear display button
clearButton.addEventListener('click', () => {
    clearDisplay();
})

//add event listener for equals button
equalsButton.addEventListener('click', () => {
    equals();    
})




//event listener and function for period
periodButton.addEventListener('click', addPeriod);