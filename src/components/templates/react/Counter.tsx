import styles from "./Counter.module.scss";

import { useCounter } from "./Counter.data";

export interface CounterProps {
  initialValue?: number;
}

export default function Counter({ initialValue = 0 }: CounterProps) {
  const { count, increment, decrement } = useCounter(initialValue);

  return (
    <section className={styles.counter}>
      <h2 className={styles.title}>React component</h2>

      <div className={styles.controls}>
        <button className={styles.button} onClick={decrement}>
          −
        </button>

        <span className={styles.value}>{count}</span>

        <button className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </section>
  );
}
