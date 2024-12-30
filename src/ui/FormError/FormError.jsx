import styles from "./FormError.module.css";
import PropTypes from "prop-types";

FormError.propTypes = {
  errMessage: PropTypes.string,
};

function FormError({ errMessage }) {
  return <p className={`${styles.formError} `}>{errMessage}</p>;
}

export default FormError;
