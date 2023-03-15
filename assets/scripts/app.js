const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createWriteLog(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}` //to get both values and turn into strings :sparks:
    outputResult(currentResult,calcDescription); //From vendor file
}

// Adds values to logEntries object
function writeToLog(
    operation, 
    prevResult, 
    OperationNumber, 
    newResult
) {
    const logEntry = {
        operation: operation,
        initial: prevResult, 
        entered: OperationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if(
        calculationType !== 'ADD' && 
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }
    
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = "+"
    } else if (calculationType === 'SUBSTRACT') {
        currentResult -= enteredNumber;
        mathOperator = "-"
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = "*"
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = "/"
    }
    
    createWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType,initialResult, enteredNumber,currentResult);
}

function add() {
    // const enteredNumber = getUserNumberInput();
    // const initialResult = currentResult;
    // currentResult += enteredNumber;
    // createWriteLog('+', initialResult, enteredNumber);
    // writeToLog('ADD',initialResult, enteredNumber,currentResult);
    calculateResult('ADD');
}

function subtract() {
    // const enteredNumber = getUserNumberInput();
    // const initialResult = currentResult;
    // currentResult -= enteredNumber;
    // createWriteLog('-', initialResult, enteredNumber);
    // writeToLog('SUBSTRACT',initialResult, enteredNumber,currentResult);
    calculateResult('SUBSTRACT');
}

function multiply() {
    // const enteredNumber = getUserNumberInput();
    // const initialResult = currentResult;
    // currentResult *= enteredNumber;
    // createWriteLog('*', initialResult, enteredNumber);
    // writeToLog('MULTIPLY',initialResult, enteredNumber,currentResult);
    calculateResult('MULTIPLY');
}

function divide() {
    // const enteredNumber = getUserNumberInput();
    // const initialResult = currentResult;
    // currentResult /= enteredNumber;
    // createWriteLog('/', initialResult, enteredNumber);
    // writeToLog('DIVIDE',initialResult, enteredNumber,currentResult);
    calculateResult('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);