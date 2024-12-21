import AddCategoryForm from "../../features/categories/AddCategoryForm/AddCategoryForm";
import CategoriesList from "../../features/categories/CategoriesList/CategoriesList";
import styles from "./Categories.module.css";
import Modal from "../../ui/modal/Modal";
import { createPortal } from "react-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

function Categories() {
  const [isAddOpen, setAddOpen] = useState(false);

  function handleOpenAdd() {
    setAddOpen((prev) => !prev);
  }

  return (
    <div className={styles.categories}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Categories</h2>
        <button onClick={handleOpenAdd} className={styles.addIcon}>
          <FiPlus size={20} color="#fff" />
        </button>
      </div>

      <CategoriesList />
      {isAddOpen &&
        createPortal(
          <Modal onClose={handleOpenAdd}>
            <AddCategoryForm handleClose={handleOpenAdd} />
          </Modal>,
          document.body,
        )}
    </div>
  );
}

export default Categories;
