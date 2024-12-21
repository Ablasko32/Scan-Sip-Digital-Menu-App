import styles from "./AddCategoryForm.module.css";

function AddCategoryForm() {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>Add new category</h2>
      </div>

      <input type="text" placeholder="Category name" />
      <input type="file" accept="image/*" placeholder="Category name" />

      <button className={styles.submit} type="submit">
        Save
      </button>
    </form>
  );
}

export default AddCategoryForm;
