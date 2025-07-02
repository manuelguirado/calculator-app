function operator(a, b, operatorType) {
  switch (operatorType) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

export function add(a, b) {
  return operator(a, b, "+");
}

export function subtract(a, b) {
  return operator(a, b, "-");
}

export function multiply(a, b) {
  return operator(a, b, "*");
}

export function divide(a, b) {
  return operator(a, b, "/");
}
