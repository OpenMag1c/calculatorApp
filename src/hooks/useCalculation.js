import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useTranslation } from "react-i18next";
import {
  getHistoryFromStorage,
  saveHistoryToStorage,
} from "../helpers/localStorage/history";
import solveExample from "../helpers/calculation/solveExample";
import updateLine from "../helpers/updateLine";

const useCalculation = (setError) => {
  const [example, setExample] = useState("0");
  const [history, setHistory] = useState(() => getHistoryFromStorage());
  const { t } = useTranslation();

  const updateHistory = (newHistory) => {
    setHistory(newHistory);
    saveHistoryToStorage(newHistory);
  };

  const onPressKey = useCallback(
    (value) => () => {
      if (value === "=") {
        const result = solveExample(example);
        if (Number.isFinite(result)) {
          setExample(result.toString());
          updateHistory([
            ...history,
            {
              id: uuidv4(),
              example,
            },
          ]);
        } else {
          setError(`${t("error.wrong")} ${result}`);
          setExample("0");
        }
      } else {
        const line = updateLine(example, value);
        if (line.length >= 16) {
          setError(`${t("error.length")}`);
        } else {
          setExample(line);
        }
      }
    },
    [example, history]
  );

  return { example, setExample, history, updateHistory, onPressKey };
};

export default useCalculation;
