import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import { CgClose } from "react-icons/cg";
import React from "react";

function AddItemForm({ handleClose }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <button onClick={handleClose}>
          <CgClose color="#fff" size={20} />
        </button>
        <h2>Add new item</h2>
      </div>

      <input type="text" placeholder="Item name" />
      <input type="text" placeholder="Item quantity" />
      <input type="text" placeholder="Item price" />
      <input type="file" accept="image/*" placeholder="Category name" />

      <button className={styles.submit} type="submit">
        Save
      </button>
    </form>
  );
}

export default AddItemForm;
