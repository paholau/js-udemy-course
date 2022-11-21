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


function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createWriteLog('+', initialResult, enteredNumber);
    writeToLog('ADD',initialResult, enteredNumber,currentResult);
    typeOf
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createWriteLog('-', initialResult, enteredNumber);
    writeToLog('SUBSTRACT',initialResult, enteredNumber,currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createWriteLog('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY',initialResult, enteredNumber,currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createWriteLog('/', initialResult, enteredNumber);
    writeToLog('DIVIDE',initialResult, enteredNumber,currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);