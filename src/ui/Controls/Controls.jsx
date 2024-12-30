import useUserLocationAndCategories from "../../features/categories/useUserLocationAndCategories.js";
import {
  LiaCocktailSolid,
  LiaCoffeeSolid,
  LiaPizzaSliceSolid,
} from "react-icons/lia";
import LocationSettings from "../../features/profile/LocationSettings/LocationSettings";
import useGetUser from "../../features/auth/useGetUser.js";
import { CiBeerMugFull, CiSettings } from "react-icons/ci";
import QrCodeButton from "../QrCodeButton/QrCodeButton";
import { MdOutlineRemoveRedEye } from "react-icons/md";
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
    return (
      <div className={styles.icons}>
        <LiaCocktailSolid className={styles.iconSvg} />
        <CiBeerMugFull className={styles.iconSvg} />
        <LiaCoffeeSolid className={styles.iconSvg} />
        <LiaPizzaSliceSolid className={styles.iconSvg} />
      </div>
    );

  return (
    <div className={styles.controls}>
      <Link
        to={`/menus/location/${locationData?.id || "1"}`}
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
