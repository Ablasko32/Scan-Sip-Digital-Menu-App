import getClickLocation from "../../../utils/getClickLocation.js";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./CategoryItem.module.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function CategoryItem({ item }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });

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
        {/* {item.image ? (
          <div>
            <img className={styles.categoryImg} src={item.image} />
          </div>
        ) : (
          <div></div>
        )} */}

        <p className={styles.categoryName}>{item.name}</p>
      </Link>
      <button onClick={handleOpenMenu} className={styles.categoryMenu}>
        <HiDotsVertical color="#fff" size={20} />
      </button>
      {isMenuOpen &&
        createPortal(
          <DropDownMenu
            type="categories"
            itemID={item.id}
            onClose={handleCloseMenu}
            clickLocation={clickLocation}
          />,
          document.body,
        )}
    </li>
  );
}

export default CategoryItem;
