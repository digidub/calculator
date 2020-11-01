//DOM identifiers
const calculation = document.querySelector(".calculation");
const calcButton = document.querySelectorAll(".calc-btn");
const calcDisplay = document.querySelector(".calculator-display");
const equalsButton = document.querySelector(".calculator-equals");
const clearButton = document.querySelector(".calculator-clear");
const backButton = document.querySelector(".calculator-backspace");


//variable that influences how the calculation div is displayed.
let startOver = false;

//event listener for calculator buttons
for (let i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener('click', () => {
        calculate(calcButton[i]);
    });
};

//equals button event listener
equalsButton.addEventListener('click', () => {
    equals();
});

//clear button event listener
clearButton.addEventListener('click', () => {
    clearAll();
});

//C (backspace) button event listener
backButton.addEventListener('click', () => {
    backSpace();
});

//function to write out calculations
function calculate(btn) {
    //test to see whether there is an answer in calcDisplay, and then append calculator operator to this answer 
    if (startOver && (btn.textContent == "÷" || btn.textContent == "*" || btn.textContent == "-" || btn.textContent == "+")) {
        calculation.textContent = String(calcDisplay.textContent);
        startOver = false;
    }
    //replace the ÷ symbol with the correct mathematical operator
    if (btn.textContent == "÷") {
        calculation.textContent += "/";
    }
    //replace the x symbol with the correct mathematical operator
    else if (btn.textContent == "x") {
        calculation.textContent += "*";
    }
    //append calculation catchall
    else calculation.textContent += btn.textContent;    
};

//function to return sum
function equals() {
    //display answer on main display:
    calcDisplay.textContent = parseFloat(eval(calculation.textContent)) || "ERROR";
    //clear calculation div:
    calculation.textContent = "";
    startOver = true; 
    //calculation.textContent = String(calcDisplay.textContent);    
};

//function that clears all
function clearAll() {
    calculation.textContent = "";
    calcDisplay.textContent = 0;
    return;
};

//function that acts like a backspace key
function backSpace() {
    calculation.textContent = calculation.textContent.slice(0, -1);
}