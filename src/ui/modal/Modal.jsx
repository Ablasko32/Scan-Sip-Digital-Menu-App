import useThemePicker from "../../pages/Menus/useThemePicker.js";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import React from "react";

function Modal({ children, onClose }) {
  const modalRef = useRef();

  const themeStyle = useThemePicker();
  console.log(themeStyle);

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
    <div ref={modalRef} className={themeStyle.modal || styles.modal}>
      <div className={themeStyle.content || styles.content}>
        <button onClick={onClose} className={themeStyle.close || styles.close}>
          <IoClose
            className={themeStyle.closeIcon || styles.closeIcon}
            size={30}
          />
        </button>
        {/* adds onClose prop to children to close modal after mutation */}
        <div>{React.cloneElement(children, { onClose })}</div>
      </div>
    </div>
  );
}

export default Modal;
