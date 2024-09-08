import { FC, useState } from "react";
import { styles } from "./Home.css";
import { WorkerBox } from "../components/Worker";

export const Home: FC = () => {
  const [state, setState] = useState(1);
  const [trigger, setTrigger] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.stack}>
        <input
          type="range"
          min={1}
          max={500}
          value={state}
          onChange={(e) => setState(+e.currentTarget.value)}
          style={{ width: "300px" }}
        />
        <button onClick={() => setState(0)}>Remove all workers</button>
        <button onClick={() => setTrigger((prev) => ++prev)}>
          Call all workers
        </button>
        <span>Total workers: {state}</span>
      </div>
      <div className={styles.workersGrid}>
        {Array.from({ length: state }).map((_, index) => (
          <WorkerBox key={index} triggerWorker={trigger} />
        ))}
      </div>
    </div>
  );
};
