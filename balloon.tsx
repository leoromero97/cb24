import { useState } from "react";
import styles from "./balloons.module.css";

export default function BalloonAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBalloons, setShowBalloons] = useState(false);
  setTimeout(() => setShowBalloons(true), 1000);
  return (
    <div className={showBalloons ? styles.active : styles.balloons}>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      {children}
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
    </div>
  );
}
