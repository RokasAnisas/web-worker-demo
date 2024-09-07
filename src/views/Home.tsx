import { FC, useState } from "react";
import { styles } from "./Home.css";

const worker = new Worker(new URL("./worker.js", import.meta.url));

export const Home: FC = () => {
  const [state, setState] = useState(0);
  const [progress, setProgress] = useState(0);
  const [workerResult, setWorkerResult] = useState<number | "loading" | null>(
    0,
  );
  const [activeWorkers, setActiveWorkers] = useState(0);
  const [duration, setDuration] = useState(0);

  const getWorkerMessage = () => {
    const t0 = performance.now();
    setActiveWorkers((prev) => prev + 1);
    setWorkerResult("loading");
    worker.postMessage("start");
    worker.onmessage = (event) => {
      console.log(event.data);

      setProgress(event.data?.progress);
      if (event.data?.result) {
        setWorkerResult(event.data?.result);
        setDuration(performance.now() - t0);
        setActiveWorkers((prev) => prev - 1);
      }
    };
  };

  return (
    <div className={styles.root}>
      <p>Active Workers: {activeWorkers}</p>
      <h2>Worker result: {workerResult}</h2>
      {progress === 100 ? (
        <h2>Worker duration: {(duration / 1000).toFixed(2)} s</h2>
      ) : (
        <>Loading</>
      )}
      <div className={styles.loaderBody}>
        <div
          className={styles.loader}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        ></div>
      </div>
      <h2>{state}</h2>
      <button onClick={() => setState((prev) => ++prev)}>Increase</button>
      <button onClick={() => setState((prev) => --prev)}>Decrease</button>
      <button onClick={() => getWorkerMessage()} disabled={activeWorkers > 4}>
        Call worker
      </button>
    </div>
  );
};
