import useThemePicker from "../../../pages/Menus/useThemePicker";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";

MenuDetailsPopUp.propTypes = {
  locationData: PropTypes.object,
};
function MenuDetailsPopUp({ locationData }) {
  const styles = useThemePicker();

  return (
    <div className={styles.popUpDetailsContainer}>
      <h3>Find out more!</h3>
      <div className={styles.infoContainer}>
        <p className={styles.infoDescription}>{locationData.description}</p>
      </div>
      <div className={styles.infoContainer}>
        <CiLocationOn className={styles.infoIcon} />{" "}
        <p>{locationData.address}</p>
      </div>
      <div className={styles.infoContainer}>
        <CiClock1 className={styles.infoIcon} />{" "}
        <p>{locationData.workingHours}</p>
      </div>
    </div>
  );
}

export default MenuDetailsPopUp;
