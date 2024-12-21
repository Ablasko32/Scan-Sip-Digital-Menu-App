import { CiClock2, CiLocationOn } from "react-icons/ci";
import styles from "./MenuHeader.module.css";

function MenuHeader({ locationData }) {
  return (
    <div className={styles.menuInfo}>
      <h1 className={styles.locationName}>{locationData.name}</h1>
      <p className={styles.menuDescription}>{locationData.description}</p>
      <ul className={styles.menuDetails}>
        <li>
          <CiLocationOn size={20} />
          <span>{locationData.address}</span>
        </li>
        <li>
          <CiClock2 size={18} />
          <span>{locationData.workingHours}</span>
        </li>
      </ul>
    </div>
  );
}

export default MenuHeader;
