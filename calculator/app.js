// Grabbing the classes
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const calculator = document.querySelector(".calculator");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return; //prevents value in grid gap of calculator being returned. Closest will return the button value nearest clicked

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset; //key-type attribute
  const { previousKeyType } = calculator.dataset;

  //   Is this a number key?
  if (type === "number") {
    //if the value of key.dataset is number
    if (displayValue === "0" || previousKeyType === "operator") {
      //if the display is showing zero or the value of data-previous-key-type is operator
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  //   Is this an operator key?
  if (type === "operator") {
    // Grabs all data-type="operator" attribute tags
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => (el.dataset.state = "")); //allows one operator button to be selected at a time. <tag data-state=""></tag>
    key.dataset.state = "selected"; //then sets the value to selected

    calculator.dataset.firstNumber = displayValue; //keeps the first number you clicked on the display when you hit the operator
    calculator.dataset.operator = key.dataset.key; //sets data-operator to the value within data-key (plus, minus, etc.)
  }

  if (type === "clear") {
    //grabs plus, minus, times, divide keys
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => (el.dataset.state = ""));
    key.dataset.state = "";

    calculator.dataset.firstNumber = "0";
    display.textContent = 0;
  }

  if (type === "equal") {
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
