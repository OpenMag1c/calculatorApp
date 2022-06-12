import keys from "../../constants/localStorageKeys";

export const getHistoryFromStorage = () => {
  const historyJSON = window.localStorage.getItem(keys.history);
  return JSON.parse(historyJSON) || [];
};

export const saveHistoryToStorage = (history) => {
  const historyJSON = JSON.stringify(history);
  window.localStorage.setItem(keys.history, historyJSON);
};
