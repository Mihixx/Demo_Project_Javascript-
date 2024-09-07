const defaultResult = 0;
let currentResult = defaultResult;

// Get user input
const userInput = document.getElementById('input-number');

// Get buttons
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

// Get output elements
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

// Function to output the result and description
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

// Core calculation logic
function calculate(operation) {
  const enteredNumber = parseInt(userInput.value);

  let calcDescription = '';
  if (operation === 'ADD') {
    calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
  } else if (operation === 'SUBTRACT') {
    calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
  } else if (operation === 'MULTIPLY') {
    calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
  } else if (operation === 'DIVIDE') {
    calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
  }
  
  outputResult(currentResult, calcDescription);
}

// Event listeners for buttons
addBtn.addEventListener('click', () => calculate('ADD'));
subtractBtn.addEventListener('click', () => calculate('SUBTRACT'));
multiplyBtn.addEventListener('click', () => calculate('MULTIPLY'));
divideBtn.addEventListener('click', () => calculate('DIVIDE'));
