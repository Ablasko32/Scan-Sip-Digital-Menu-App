import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";

function LocationSettings() {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
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
