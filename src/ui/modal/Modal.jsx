import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ children, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    function closeModal(e) {
      e.stopPropagation();
      if (e.target === modalRef.current) {
        onClose();
      }
    }

    document.addEventListener("click", closeModal);

    return () => document.removeEventListener("click", closeModal);
  }, [modalRef, onClose]);

  return (
    <div ref={modalRef} className={styles.modal}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.close}>
          <IoClose color="#fff" size={30} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
