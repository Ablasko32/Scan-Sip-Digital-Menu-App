import useUserLocationAndCategories from "../../features/categories/useUserLocationAndCategories.js";
import LocationSettings from "../../features/profile/LocationSettings/LocationSettings";
import useGetUser from "../../features/auth/useGetUser.js";
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

  const { userID } = useGetUser();

  const { data: locationData, isPending: isLoadingLocation } =
    useUserLocationAndCategories(userID);

  if (!locationData)
    return <p style={{ textAlign: "center" }}>Lets create your menu!</p>;

  return (
    <div className={styles.controls}>
      <Link
        to={`/menus/location/${locationData?.id || "demo"}`}
        className={styles.icon}
      >
        <MdOutlineRemoveRedEye size={30} color="rgba(255, 255, 255, 0.87)" />
      </Link>
      {/* generate qr code */}
      <QrCodeButton id={locationData?.id || "demo"} />
      <button
        disabled={isLoadingLocation}
        onClick={handleOpenSettings}
        className={styles.icon}
      >
        <CiSettings size={30} color="rgba(255, 255, 255, 0.87)" />
      </button>
      {isSettingsOpen && (
        <Modal onClose={handleOpenSettings}>
          <LocationSettings
            onClose={handleOpenSettings}
            locationData={locationData}
          />
        </Modal>
      )}
    </div>
  );
}

export default Controls;
