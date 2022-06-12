import { OPERATIONS } from "constants/buttons";

const changeSign = (example) => {
  let index = 0;
  for (let i = example.length - 1; i >= 0; i -= 1) {
    if (OPERATIONS.includes(example[i])) {
      index = i + 1;
      break;
    }
  }

  const number = example.slice(index);
  const examplePart = example.slice(0, index);
  const prevChar = example[index - 1];
  if (prevChar === "-") {
    return `${examplePart.slice(0, -1)}+${number}`;
  }
  
  if (prevChar === "+") {
    return `${examplePart.slice(0, -1)}-${number}`;
  }

  if (prevChar && OPERATIONS.includes(prevChar)) {
    return `${examplePart}(-${number})`;
  }

  return `-${number}`;
};

export default changeSign;