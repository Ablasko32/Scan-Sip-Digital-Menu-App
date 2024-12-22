import styles from "./FormError.module.css";

function FormError({ errMessage }) {
  return <p className={styles.formError}>{errMessage}</p>;
}

export default FormError;
