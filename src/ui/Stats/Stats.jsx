import styles from "./Stats.module.css";

function Stats() {
  return (
    <div className={styles.stats}>
      <p className={styles.statInfo}>
        Total items: <span className={styles.statNum}>0</span>
      </p>
      <p className={styles.statInfo}>
        Last modified: <span className={styles.statNum}>10.10.2024</span>
      </p>
    </div>
  );
}

export default Stats;
