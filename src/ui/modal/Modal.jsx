import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import React from "react";

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  themeStyle: PropTypes.object,
};

function Modal({ children, onClose, themeStyle = null }) {
  const modalRef = useRef();

  // const themeStyle = useThemePicker();
  // console.log(themeStyle);

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
    <div
      ref={modalRef}
      className={themeStyle ? themeStyle.modal : styles.modal}
    >
      <div className={themeStyle ? themeStyle.content : styles.content}>
        <button
          onClick={onClose}
          className={themeStyle ? themeStyle.close : styles.close}
        >
          <IoClose
            className={themeStyle ? themeStyle.closeIcon : styles.closeIcon}
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
