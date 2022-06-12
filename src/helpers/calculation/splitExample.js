import { OPERATIONS } from "../../constants/buttons";

const splitExample = (example) => {
  // split into an array of operations and an array of numbers
  const operations = [];
  const numbers = [];
  let number = "";
  for (let i = 0; i < example.length; i++) {
    if (example[i] === "-" && !isFinite(example[i - 1])) {
      // check for negative number
      number += example[i];
      continue;
    }

    if (OPERATIONS.includes(example[i])) {
      // division into an array of operations and numbers
      operations.push(example[i]);
      numbers.push(Number(number));
      number = "";
      continue;
    }

    if (example[i] !== "(" && example[i] !== ")") {
      number += example[i];
    }
  }
  if (number) {
    numbers.push(Number(number));
  }

  return numbers.length <= operations.length ? null : {
    operations,
    numbers,
  };
};

export default splitExample;
