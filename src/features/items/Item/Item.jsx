// import categoryStyles from "../../categories/CategoryItem/CategoryItem.module.css";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu.jsx";
import getClickLocation from "../../../utils/getClickLocation.js";
import AddItemForm from "../AddItemForm/AddItemForm.jsx";
import formatPrice from "../../../utils/formatPrice.js";
import Modal from "../../../ui/modal/Modal.jsx";
import { HiDotsVertical } from "react-icons/hi";
import { createPortal } from "react-dom";
import styles from "./Item.module.css";
import { useState } from "react";

function Item({ item }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });
  const [isEditOpen, setEditOpen] = useState(false);

  function handleOpenEdit() {
    setEditOpen((prev) => !prev);
  }

  function handleOpenMenu(e) {
    // console.log(item);
    setClickLocation(() => {
      return getClickLocation(e);
    });
    setMenuOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <li className={` ${styles.listItem}`}>
      {item.image ? (
        <img className={styles.categoryImg} src={item.image} />
      ) : (
        <div></div>
      )}

      <div className={styles.itemData}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemDescription}>{item.description}</p>
        <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
      </div>

      <button onClick={handleOpenMenu} className={styles.itemMenu}>
        <HiDotsVertical size={20} color="#fff" />
      </button>
      {isMenuOpen && (
        <DropDownMenu
          editFunction={handleOpenEdit}
          type="items"
          itemID={item.id}
          onClose={handleCloseMenu}
          clickLocation={clickLocation}
        />
      )}
      {isEditOpen &&
        createPortal(
          <Modal onClose={handleOpenEdit}>
            <AddItemForm item={item} />
          </Modal>,
          document.body,
        )}
    </li>
  );
}

export default Item;
