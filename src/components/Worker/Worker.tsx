import { FC, useEffect, useMemo, useRef, useState } from "react";
import { styles } from "./Worker.css";

export const WorkerBox: FC = () => {
  const worker = useRef<Worker | null>(null);
  // const worker = useMemo(
  //   () => new Worker(new URL("./webWorker.js", import.meta.url)),
  //   [],
  // );
  const [progress, setProgress] = useState(0);
  const [workerResult, setWorkerResult] = useState<number | "loading" | null>(
    0,
  );
  const [duration, setDuration] = useState(0);

  const isLoading = useMemo(() => workerResult === "loading", [workerResult]);

  useEffect(() => {
    worker.current = new Worker(new URL("./webWorker.js", import.meta.url));

    return () => {
      worker.current?.terminate();
    };
  }, []);

  const getWorkerMessage = () => {
    if (!worker.current) return;

    const t0 = performance.now();
    setWorkerResult("loading");
    worker?.current?.postMessage("start");
    worker.current.onmessage = (event) => {
      setProgress(event.data?.progress);
      if (event.data?.result) {
        setWorkerResult(event.data?.result);
        setDuration(performance.now() - t0);
      }
    };
  };

  const durationToSeconds = useMemo(
    () => (duration / 1000).toFixed(2),
    [duration],
  );

  const resultData = useMemo(
    () => [
      {
        title: "Result",
        value: !isLoading ? workerResult : "...",
      },
      {
        title: "Time",
        value: !isLoading ? `${durationToSeconds} s` : "...",
      },
    ],
    [durationToSeconds, workerResult, isLoading],
  );

  return (
    <div className={styles.root}>
      {resultData.map((data, index) => (
        <div key={index} className={styles.resultGroup}>
          <span className={styles.resultTitle}>{data.title}:</span>
          <span className={styles.resultValue}>{data.value}</span>
        </div>
      ))}
      <div className={styles.loaderBody}>
        <div
          className={styles.loader}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        ></div>
      </div>
      <button onClick={() => getWorkerMessage()} disabled={isLoading}>
        Call worker
      </button>
    </div>
  );
};
