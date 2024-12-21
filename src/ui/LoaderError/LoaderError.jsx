import styles from "./LoaderError.module.css";
import { GoAlert } from "react-icons/go";

function LoaderError({ ErrMessage }) {
  return (
    <div className={styles.error}>
      <p>
        {" "}
        <GoAlert />
        <span>{ErrMessage}</span>
      </p>
    </div>
  );
}

export default LoaderError;
