import { CiClock2, CiLocationOn } from "react-icons/ci";
import styles from "./MenuHeader.module.css";

function MenuHeader() {
  return (
    <div className={styles.menuInfo}>
      <h1 className={styles.locationName}>Coffe name</h1>
      <p className={styles.menuDescription}>
        Description of nice coffe place to enjoj your warm stay,Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Temporibus commodi,
        doloribus.
      </p>
      <ul className={styles.menuDetails}>
        <li>
          <CiLocationOn size={20} />
          <span>Adress Adress 1.1..22</span>
        </li>
        <li>
          <CiClock2 size={18} />
          <span>Working Hours</span>
        </li>
      </ul>
    </div>
  );
}

export default MenuHeader;
