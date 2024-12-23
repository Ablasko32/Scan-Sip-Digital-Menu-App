import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import React from "react";

function Modal({ children, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function closeModal(e) {
      e.stopPropagation();
      if (e.target === modalRef.current) {
        onClose();
      }
    }

    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
      document.body.style.overflow = "auto";
    };
  }, [modalRef, onClose]);

  return (
    <div ref={modalRef} className={styles.modal}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.close}>
          <IoClose color="#fff" size={30} />
        </button>
        {/* adds onClose prop to children to close modal after mutation */}
        <div>{React.cloneElement(children, { onClose })}</div>
      </div>
    </div>
  );
}

export default Modal;
