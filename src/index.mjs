

function operatior(a,b,operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operator");
    }
}
function add(a, b) {
    return operatior(a, b, '+');
}
function subtract(a, b) {
    return operatior(a, b, '-');
}
function multiply(a, b) {
    return operatior(a, b, '*');
}
function divide(a, b) {
    return operatior(a, b, '/');
}
export default {
    add,
    subtract,
    multiply,
    divide
};