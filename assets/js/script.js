let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const numbers = document.querySelectorAll(".number");
// console.log(numbers);
numbers.forEach((number) => {
  //   console.log(number);
  number.addEventListener("click", (event) => {
    // console.log("number is pressed");
    // console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  inputPercentage();
  updateScreen(currentNumber);
});

const inputPercentage = () => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  //   console.log("equal button is pressed");
  if (prevNumber === "") {
    return;
  } else {
    calculate();
    updateScreen(currentNumber);
    clearAll();
  }
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return result;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  //   console.log("AC button is pressed");
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  // console.log(event.target.value);
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
inputDecimal = (dot) => {
  currentNumber += dot;
  // if (currentNumber.includes(".")) {
  //   return;
  // }
  // currentNumber += dot;
};
