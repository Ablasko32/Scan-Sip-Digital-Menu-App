import styles from "./ConfirmModal.module.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const ConfirmModal = forwardRef(function ConfirmModal(
  { message, onConfirm, onCancel },
  ref,
) {
  function handleConfirm() {
    // console.log("IM IN MODAL CONFIRM");
    onConfirm();
    onCancel();
  }

  function handleCancel() {
    onCancel();
  }

  return createPortal(
    <div className={styles.confirmContainer}>
      <div ref={ref} className={styles.confirm}>
        <p>{message}</p>
        <div className={styles.buttonContainer}>
          <button onClick={handleConfirm} className={styles.confirmButton}>
            Yes
          </button>
          <button onClick={handleCancel} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
});

ConfirmModal.propTypes = {
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ConfirmModal;
