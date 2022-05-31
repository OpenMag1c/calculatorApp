import { Calculator } from "./calculator";
import splitExample from "./splitExample";
import truncated from "./truncated";

function fixMultiplication(example) {
  // fix situation like 16(-1) => 16*(-1)
  for (let i = 1; i < example.length; i++) {
    if (example[i] === "(" && !Number.isNaN(example[i - 1])) {
      example = `${example.slice(0, i)}*${example.slice(i)}`;
      i++;
    }
  }
  return example;
}

function calculate(calculator) {
  const { operations } = calculator;
  for (let i = 0; i < operations.length; ) {
    if (operations[i] === "*" || operations[i] === "/") {
      calculator.execute(operations[i], i);
      continue;
    }
    i++;
  }

  for (let i = 0; i < operations.length; ) {
    if (operations[i] === "+" || operations[i] === "-") {
      calculator.execute(operations[i], i);
      continue;
    }
    i++;
  }

  return calculator.getResult();
}

const solvePart = (example) => {
  const { numbers, operations } = splitExample(example);
  const calculator = new Calculator(numbers, operations);
  return calculate(calculator);
};

const solveExample = (ex) => {
  let example = fixMultiplication(ex);
  example = `(${example})`;
  const openBrackets = [];
  while (example[0] === "(" && example[example.length - 1] === ")") {
    for (let i = 0; i < example.length; i++) {
      if (example[i] === "(") {
        openBrackets.push(i);
      }
      if (example[i] === ")") {
        const openBracket = openBrackets.pop();
        const part = solvePart(example.slice(openBracket + 1, i));
        example = example.slice(0, openBracket) + part + example.slice(i + 1);
        break;
      }
    }
  }

  return truncated(solvePart(example), 3);
};

export default solveExample;
