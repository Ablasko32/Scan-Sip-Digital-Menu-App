import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import { CgClose } from "react-icons/cg";
import React from "react";

function LocationSettings({ handleClose }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <button onClick={handleClose}>
          <CgClose color="#fff" size={20} />
        </button>
        <h2>Update location data</h2>
      </div>

      <input type="text" placeholder="Category name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Working Hours" />

      <button className={styles.submit} type="submit">
        Save
      </button>
    </form>
  );
}

export default LocationSettings;
