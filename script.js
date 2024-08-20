let currentNumber = '';
let previousNumber = '';
let operation = undefined;
function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}
function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
    compute();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}
function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
    case '+':
    computation= prev + curr;
    break;
    case '-':
    computation = prev - curr;
    break;
    case '*':
    computation = prev * curr;
    break;
    case '/':
    computation = prev / curr;
    break;
    default:
    return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}