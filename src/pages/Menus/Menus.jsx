import styles from "./Menus.module.css";

function Menus() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeader}>
        <h1 className={styles.locationName}>Coffe name</h1>
        <p>Description of nice coffe place to enjoj your warm stay</p>
        <p>Adress Adress 1.1..22</p>
        <p>Working Hours</p>
      </div>

      <ul>
        <li>Wine</li>
        <li>Coffe</li>
        <li>Coffe</li>
        <li>Liquer</li>
      </ul>

      <div>
        <p>Created by Scan&Sip</p>
      </div>
    </div>
  );
}

export default Menus;
