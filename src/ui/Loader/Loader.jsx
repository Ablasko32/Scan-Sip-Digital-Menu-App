import styles from "./Loader.module.css";
import PropTypes from "prop-types";

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};

function Loader({ fullScreen }) {
  return (
    <div
      className={`${styles.loader} ${fullScreen && styles.fullScreen}`}
    ></div>
  );
}

export default Loader;
