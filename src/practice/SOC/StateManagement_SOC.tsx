import { useState } from "react";

// Separating State Management (Without SOC)
export function BedCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// With SOC
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
};

const Counter = ({
  count,
  increment,
}: {
  count: number;
  increment: () => void;
}) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
};

export const CounterContainer = () => {
  const { count, increment } = useCounter();
  return <Counter count={count} increment={increment} />;
};
