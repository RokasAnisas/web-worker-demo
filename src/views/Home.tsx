import { FC, useState } from "react";
import { styles } from "./Home.css";
import { WorkerBox } from "../components/Worker";

export const Home: FC = () => {
  const [state, setState] = useState(1);
  const [trigger, setTrigger] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.stack}>
        <button onClick={() => setState((prev) => ++prev)}>Add worker</button>
        <button onClick={() => setState((prev) => --prev)}>
          Remove worker
        </button>
        <button onClick={() => setState(0)}>
          Remove all workers
        </button>
        <button onClick={() => setTrigger((prev) => ++prev)}>
          Call all workers
        </button>
        <span>Total workers: {state}</span>
      </div>
      <div className={styles.workersGrid}>
        {Array.from({ length: state }).map((_, index) => (
          <WorkerBox key={index} triggerWorker={trigger}  />
        ))}
      </div>
    </div>
  );
};
