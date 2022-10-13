// Grabbing the classes
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const calculator = document.querySelector(".calculator");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return; //prevents value in grid gap of calculator being returned. Closest will return the button value nearest clicked

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  //   Is this a number key?
  if (type === "number") {
    if (displayValue === "0" || previousKeyType === "operator") {
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  //   Is this an operator key?
  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => (el.dataset.state = "")); //allows one operator button to be selected at a time
    key.dataset.state = "selected";

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === "clear") {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => (el.dataset.state = ""));
    key.dataset.state = "";

    calculator.dataset.firstNumber = "0";
    display.textContent = 0;
  }

  if (type === "equal") {
    /*
    Perform a calculation:
    firstNumber + secondNumber
    firstNumber - secondNumber
    firstNumber * secondNumber
    firstNumber / secondNumber
    */
    const firstNumber = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);

    if (operator)
      display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  calculator.dataset.previousKeyType = type;
});

const calculate = (firstNumber, operator, secondNumber) => {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  let result = "";
  if (operator === "plus") result = firstNumber + secondNumber;
  if (operator === "minus") result = firstNumber - secondNumber;
  if (operator === "times") result = firstNumber * secondNumber;
  if (operator === "divide") result = firstNumber / secondNumber;
  return result;
};
