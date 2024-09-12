import { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { styles } from "./Worker.css";
import { LoadingDots } from "../LoadingDots";

interface Props {
  triggerWorker?: number;
}

export const WorkerBox: FC<Props> = ({ triggerWorker }) => {
  const worker = useRef<Worker | null>(null);
  // const worker = useMemo(
  //   () => new Worker(new URL("./webWorker.js", import.meta.url)),
  //   [],
  // );
  const prevTriggerWorkerRef = useRef(triggerWorker);
  const isMountedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [workerResult, setWorkerResult] = useState<number | "loading" | null>(
    0,
  );
  const [duration, setDuration] = useState(0);
  const [timeStarted, setTimeStarted] = useState<number | undefined>();

  const isLoading = useMemo(() => workerResult === "loading", [workerResult]);

  useEffect(() => {
    worker.current = new Worker(new URL("./webWorker.js", import.meta.url));

    return () => {
      worker.current?.terminate();
    };
  }, []);

  const progressOneDecimal = useMemo(() => progress.toFixed(0), [progress]);

  const getWorkerMessage = () => {
    if (!worker.current) return;

    const t0 = performance.now();
    setWorkerResult("loading");
    setTimeStarted(new Date().getTime());
    worker?.current?.postMessage("start");
    worker.current.onmessage = (event) => {
      setProgress(event.data?.progress);
      if (event.data?.result) {
        setWorkerResult(event.data?.result);
        setDuration(performance.now() - t0);
      }
    };
  };

  useEffect(() => {
    if (isMountedRef.current) {
      if (prevTriggerWorkerRef.current !== triggerWorker) {
        // Your effect logic here
        getWorkerMessage();
        console.log("triggerWorker changed:", triggerWorker);
      }
    } else {
      isMountedRef.current = true;
    }
    prevTriggerWorkerRef.current = triggerWorker;
  }, [triggerWorker]);

  const durationToSeconds = useMemo(
    () => (duration / 1000).toFixed(2),
    [duration],
  );

  const resultData = useMemo(
    () => [
      // {
      //   title: "Result",
      //   value: !isLoading ? workerResult : <LoadingDots />,
      // },
      {
        title: "Time",
        value: `${durationToSeconds} s`,
      },
    ],
    [durationToSeconds],
  );

  useLayoutEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDuration(new Date().getTime() - timeStarted!);
      }, 100);
      console.log("interval started");

      return () => clearInterval(interval);
    }
  }, [isLoading, timeStarted]);

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
        <span className={styles.loaderText}>{progressOneDecimal}%</span>
      </div>
      <button onClick={() => getWorkerMessage()} disabled={isLoading}>
        {isLoading ? <LoadingDots /> : "Call worker"}
      </button>
    </div>
  );
};
