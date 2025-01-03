import AddCategoryForm from "../AddCategoryForm/AddCategoryForm.jsx";
import getClickLocation from "../../../utils/getClickLocation.js";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu";
import Modal from "../../../ui/modal/Modal.jsx";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./CategoryItem.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

CategoryItem.propTypes = {
  item: PropTypes.object,
};

function CategoryItem({ item }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });

  const [isEditOpen, setEditOpen] = useState(false);

  function handleOpenEdit() {
    setEditOpen((prev) => !prev);
  }

  function handleOpenMenu(e) {
    setClickLocation(() => {
      return getClickLocation(e);
    });
    setMenuOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <li className={styles.listItem}>
      <Link to={`/categories/items/${item.id}`}>
        <p className={styles.categoryName}>{item.name}</p>
      </Link>

      <button onClick={handleOpenMenu} className={styles.categoryMenu}>
        <HiDotsVertical color="rgba(255, 255, 255, 0.87)" size={20} />
      </button>
      {isMenuOpen &&
        createPortal(
          <DropDownMenu
            editFunction={handleOpenEdit}
            type="categories"
            itemID={item.id}
            onClose={handleCloseMenu}
            clickLocation={clickLocation}
          />,
          document.body,
        )}
      {isEditOpen &&
        createPortal(
          <Modal onClose={handleOpenEdit}>
            <AddCategoryForm item={item} />
          </Modal>,
          document.body,
        )}
    </li>
  );
}

export default CategoryItem;
