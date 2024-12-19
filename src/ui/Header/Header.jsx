import ProfileMenu from "../../features/profile/ProfileMenu/ProfileMenu";
import Controls from "../Controls/Controls";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Modal from "../../ui/modal/Modal";
import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Stats from "../Stats/Stats";
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
          {isModalOpen ? <IoClose size={30} /> : <CgProfile size={30} />}
        </button>
      </div>
      <div className={styles.controls}>
        <Stats />
        <Controls />
      </div>
      {isModalOpen &&
        createPortal(
          <Modal>
            <ProfileMenu />
          </Modal>,
          document.body,
        )}
    </header>
  );
}

export default Header;
