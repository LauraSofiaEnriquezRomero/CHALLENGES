import { useState } from "react";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };
  return {
    counter: counter,
    Sum: handleAdd,
    Less: handleSubtract,
    Reset: handleReset
  };
};