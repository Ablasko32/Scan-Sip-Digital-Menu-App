import styles from "./LoaderError.module.css";
import { GoAlert } from "react-icons/go";
import PropTypes from "prop-types";

LoaderError.propTypes = {
  ErrMessage: PropTypes.string,
  fullScreen: PropTypes.bool,
};

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
