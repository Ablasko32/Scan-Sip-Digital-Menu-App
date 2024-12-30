import ProfileMenu from "../../features/profile/ProfileMenu/ProfileMenu";
import Controls from "../Controls/Controls";
import { CgProfile } from "react-icons/cg";
import Modal from "../../ui/modal/Modal";
import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isModalOpen, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      {/* navigacija */}
      <div className={styles.navigation}>
        <Link to="/" className={styles.logo}>
          Scan&Sip
        </Link>
        <button
          onClick={() => handleOpenModal()}
          className={styles.iconContainer}
        >
          <CgProfile size={30} />
        </button>
      </div>
      <div className={styles.controls}>
        <Controls />
      </div>
      {isModalOpen &&
        createPortal(
          <Modal onClose={handleOpenModal}>
            <ProfileMenu />
          </Modal>,
          document.body,
        )}
    </header>
  );
}

export default Header;
