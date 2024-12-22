import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
// import styles from "./LocationSettings.module.css";

function LocationSettings() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.header}>
          <h2>Update location data</h2>
        </div>

        <input type="text" placeholder="Category name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Working Hours" />
        <label className={styles.fileLabel} htmlFor="fileImage">
          Upload image
        </label>
        <input
          id="fileImage"
          type="file"
          accept="image/*"
          placeholder="Working Hours"
        />

        <button className={styles.submit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default LocationSettings;
