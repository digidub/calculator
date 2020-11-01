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
        calculate(calcButton[i].textContent);
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
    if (startOver && (btn == "÷" || btn == "x" || btn == "-" || btn == "+")) {
        //sub-test for ERROR and replace with 0 if operator is pressed
        if (calcDisplay.textContent == "ERROR") {
            calculation.textContent = 0;
            startOver = false;
        }
        else {
            calculation.textContent = String(calcDisplay.textContent);
            startOver = false;
        };
    };
    //replace the ÷ symbol with the correct mathematical operator
    if (btn == "÷") {
        calculation.textContent += "/";
    }
    //replace the x symbol with the correct mathematical operator
    else if (btn == "x") {
        calculation.textContent += "*";
    }
    //append calculation catchall
    else calculation.textContent += btn;
    startOver = false;
};

//function to return sum
function equals() {
    //test to see whether a calculation has been entered
    if (calculation.textContent == "") {
        calcDisplay.textContent = 0;
        return;
    };
    //attempt calculation, otherwise display error message if syntax error
    try {
        calcDisplay.textContent = parseFloat(eval(calculation.textContent));
    } catch (e) {
        if (e instanceof SyntaxError) {
            calcDisplay.textContent = "ERROR";
        }
    };
    //clear calculation div:
    calculation.textContent = "";
    startOver = true;
    return;
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
    return;
}

document.addEventListener('keydown', (e) => {
    calculate(e.key);
});