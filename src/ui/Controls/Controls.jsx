import useUserLocationAndCategories from "../../features/categories/useUserLocationAndCategories.js";
import LocationSettings from "../../features/profile/LocationSettings/LocationSettings";
import { useAuthContext } from "../../features/auth/AuthContext";
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

  const { userID } = useAuthContext();

  const { data: locationData, isPending: isLoadingLocation } =
    useUserLocationAndCategories(userID);

  if (!locationData) return;
  return (
    <div className={styles.controls}>
      <Link
        to={`/menus/location/${locationData?.id || "demo"}`}
        className={styles.icon}
      >
        <MdOutlineRemoveRedEye size={30} />
      </Link>
      {/* generate qr code */}
      <QrCodeButton id={locationData?.id || "demo"} />
      <button
        disabled={isLoadingLocation}
        onClick={handleOpenSettings}
        className={styles.icon}
      >
        <CiSettings color="#fff" size={30} />
      </button>
      {isSettingsOpen && (
        <Modal onClose={handleOpenSettings}>
          <LocationSettings />
        </Modal>
      )}
    </div>
  );
}

export default Controls;
