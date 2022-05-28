import { useCallback, useState } from "react";
import Example from "helpers/example";
import {
  getHistoryFromStorage,
  setHistoryToStorage,
} from "helpers/localStorage/history";

const useCalculation = () => {
  const [example, setExample] = useState("");
  const [history, setHistory] = useState(() => getHistoryFromStorage());

  const updateHistory = (history) => {
    setHistory(history);
    setHistoryToStorage(history);
  };

  const onPressKey = useCallback(
    (event) => {
      event.persist();
      const value = event.target.dataset.key;
      if (value === "=") {
        const command = new Example(example);
        const result = command.calculate();
        if (isFinite(result)) {
          setExample(result.toString());
          updateHistory([...history, command]);
        } else {
          alert(`Smth is wrong, You've got ${result}`);
          setExample("");
        }
      } else {
        setExample(updateLine(example, value));
      }
    },
    [example, history]
  );

  return { example, setExample, history, updateHistory, onPressKey };
};

export default useCalculation;
