import LocationSettings from "../../features/profile/LocationSettings/LocationSettings";
import QrCodeButton from "../QrCodeButton/QrCodeButton";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import styles from "./Controls.module.css";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import { useState } from "react";

function Controls() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  function handleOpenSettings() {
    setSettingsOpen((prev) => !prev);
  }

  return (
    <div className={styles.controls}>
      <Link to="/menus/location/1" className={styles.icon}>
        <MdOutlineRemoveRedEye size={30} />
      </Link>
      {/* generate qr code */}
      <QrCodeButton />
      <button onClick={handleOpenSettings} className={styles.icon}>
        <CiSettings color="#fff" size={30} />
      </button>
      {isSettingsOpen && (
        <Modal>
          <LocationSettings handleClose={handleOpenSettings} />
        </Modal>
      )}
    </div>
  );
}

export default Controls;
