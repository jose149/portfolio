import { useState } from "react";

export function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((current) => current + 1);
  };

  const decrement = () => {
    setCount((current) => current - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}
