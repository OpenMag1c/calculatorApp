import { useState } from "react";

const useErrorMessage = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const setError = (text) => {
    setIsError(true);
    setMessage(text);
  };

  return { message, setError, isError, setIsError };
};

export default useErrorMessage;
