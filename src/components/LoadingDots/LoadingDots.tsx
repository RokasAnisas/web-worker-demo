import { FC } from "react";
import { styles } from "./LoadingDots.css";

export const LoadingDots: FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
    </div>
  );
};
