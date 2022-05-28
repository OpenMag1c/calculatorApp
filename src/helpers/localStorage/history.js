import keys from "./keys";

export const getHistoryFromStorage = () => {
  const historyJSON = window.localStorage.getItem(keys.history);
  return JSON.parse(historyJSON) || [];
};

export const setHistoryToStorage = (history) => {
  const historyJSON = JSON.stringify(history);
  window.localStorage.setItem(keys.history, historyJSON);
};
