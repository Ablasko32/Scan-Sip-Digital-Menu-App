import styles from "./LoaderError.module.css";
import { GoAlert } from "react-icons/go";

function LoaderError({ ErrMessage, fullScreen }) {
  return (
    <div className={`${styles.error} ${fullScreen && styles.fullScreen}`}>
      <p>
        {" "}
        <GoAlert />
        <span>{ErrMessage}</span>
      </p>
    </div>
  );
}

export default LoaderError;
