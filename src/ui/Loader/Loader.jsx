import styles from "./Loader.module.css";

function Loader({ fullScreen }) {
  return (
    <div
      className={`${styles.loader} ${fullScreen && styles.fullScreen}`}
    ></div>
  );
}

export default Loader;
