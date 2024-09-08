import { FC, useState } from "react";
import { styles } from "./Home.css";
import { WorkerBox } from "../components/Worker";

export const Home: FC = () => {
  const [state, setState] = useState(1);

  return (
    <div className={styles.root}>
      <div className={styles.stack}>
        <button onClick={() => setState((prev) => ++prev)}>Add worker</button>
        <button onClick={() => setState((prev) => --prev)}>
          Remove worker
        </button>
      </div>
      <div className={styles.workersGrid}>
        {Array.from({ length: state }).map((_, index) => (
          <WorkerBox key={index} />
        ))}
      </div>
    </div>
  );
};
