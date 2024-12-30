import { CiClock1, CiLocationOn, CiWifiOn } from "react-icons/ci";
import useThemePicker from "../../../pages/Menus/useThemePicker";
import { PiCopyLight, PiTelegramLogo } from "react-icons/pi";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

MenuDetailsPopUp.propTypes = {
  locationData: PropTypes.object,
};
function MenuDetailsPopUp({ locationData }) {
  const styles = useThemePicker();

  async function copyClipboard(type) {
    await navigator.clipboard.writeText(
      type === "wifi" ? locationData.wifiPassword : locationData.contact,
    );
    toast.success(
      type === "wifi" ? "Wifi password copied" : "Contact info copied",
    );
  }

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
      {locationData.contact && (
        <div className={styles.infoContainer}>
          <PiTelegramLogo className={styles.infoIcon} />{" "}
          <p>{locationData.contact}</p>
          <button onClick={() => copyClipboard()}>
            <PiCopyLight className={`${styles.infoIcon}`} />
          </button>
        </div>
      )}

      {locationData.wifiPassword && (
        <div className={styles.infoContainer}>
          <CiWifiOn className={styles.infoIcon} />{" "}
          <p>{locationData.wifiPassword}</p>
          <button onClick={() => copyClipboard("wifi")}>
            <PiCopyLight className={`${styles.infoIcon}`} />
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuDetailsPopUp;
