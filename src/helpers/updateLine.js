import { OPERATIONS } from "constants/buttons";

const updateLine = (prevState, value) => {
  if (value === "CE") return "";

  if (value === "C") return prevState.slice(0, -1);

  const lastElement = prevState[prevState.length - 1];
  if (OPERATIONS.includes(value)) {
    if (!lastElement && value !== "-" && value !== "+") return prevState;
    if (OPERATIONS.includes(lastElement)) {
      return prevState.slice(0, -1) + value;
    }
  }
  if (lastElement === "." && value === ".") {
    return prevState;
  }
  return prevState + value;
};

export default updateLine;
