import { OPERATIONS } from "constants/buttons";

const updateLine = (prevState, value) => {
  let example = prevState;
  const lastElement = example[example.length - 1];
  if (OPERATIONS.includes(value)) {
    if (!lastElement && value !== "-" && value !== "+") return example;
    if (OPERATIONS.includes(lastElement)) {
      return example.slice(0, -1) + value;
    }
  } else {
    if (example === "0") {
      example = "";
    }
    switch (value) {
      case "CE":
        return "0";
      case "C":
        return example.slice(0, -1);
      case ".":
        return lastElement === "." ? example : example + value;
      default:
        return example + value;
    }
  }

  return example + value;
};

export default updateLine;
