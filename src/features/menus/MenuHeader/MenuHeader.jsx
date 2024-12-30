import { CiCircleInfo, CiClock2, CiLocationOn } from "react-icons/ci";
import MenuDetailsPopUp from "../MenuDetailsPopUp/MenuDetailsPopUp";
import useThemePicker from "../../../pages/Menus/useThemePicker";
import { IoShareSocialOutline } from "react-icons/io5";
// import styles from "./MenuHeader.module.css";
import Modal from "../../../ui/modal/Modal";
import PropTypes from "prop-types";
import { useState } from "react";

MenuHeader.propTypes = {
  locationData: PropTypes.object,
};
function MenuHeader({ locationData }) {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenMenu() {
    setModalOpen((prev) => !prev);
  }

  const styles = useThemePicker();

  return (
    <div className={styles.menuInfo}>
      <h1 className={styles.locationName}>{locationData.name}</h1>
      <p className={styles.menuDescription}>{locationData.description}</p>
      <ul onClick={handleOpenMenu} className={styles.menuDetails}>
        {/* <li>
          <CiLocationOn size={20} />
          <span>{locationData.address}</span>
        </li>
        <li>
          <CiClock2 size={18} />
          <span>{locationData.workingHours}</span>
        </li> */}
        <li>
          {" "}
          <CiCircleInfo size={20} strokeWidth={"0.7px"} />
          <span>Find out more!</span>
        </li>
      </ul>
      {isModalOpen && (
        <Modal themeStyle={styles} onClose={handleOpenMenu}>
          <MenuDetailsPopUp locationData={locationData} />
        </Modal>
      )}
    </div>
  );
}

export default MenuHeader;
