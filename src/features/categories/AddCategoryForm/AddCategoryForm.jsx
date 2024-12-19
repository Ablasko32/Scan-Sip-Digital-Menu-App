import styles from "./AddCategoryForm.module.css";
import { CgClose } from "react-icons/cg";

function AddCategoryForm({ handleClose }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <button onClick={handleClose}>
          <CgClose color="#fff" size={20} />
        </button>
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
