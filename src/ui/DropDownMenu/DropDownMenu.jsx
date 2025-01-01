import useDeleteCategory from "../../features/categories/useDeleteCategory";
import useDeleteItem from "../../features/items/useDeleteItem";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useEffect, useRef, useState } from "react";
import styles from "./DropDownMenu.module.css";
import { FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

DropDownMenu.propTypes = {
  clickLocation: PropTypes.object,
  onClose: PropTypes.func,
  itemID: PropTypes.number,
  type: PropTypes.string,
  editFunction: PropTypes.func,
};

function DropDownMenu({ clickLocation, onClose, itemID, type, editFunction }) {
  // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // one of two mutations happens based on type prop
  const { isPending: isDeletingCategory, mutate: deleteCategory } =
    useDeleteCategory();
  const { isPending: isDeletingItem, mutate: deleteItem } = useDeleteItem();

  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const menuRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    function closeMenu(e) {
      if (!menuRef.current) return;

      // if there is no modal ref i check if click is outside menu and then close
      if (!modalRef.current) {
        if (!menuRef.current.contains(e.target)) {
          // console.log("CLICK OUTSIDE MENU");
          onClose();
        }
      }

      // if there is modal ref i check if click is outside both
      if (
        modalRef.current &&
        !menuRef.current.contains(e.target) &&
        !modalRef.current.contains(e.target)
      ) {
        // console.log("CLICK OUTSIDE BOTH MENU AND MODAL");
        onClose();
      }
    }

    // Add event listener for click event
    document.addEventListener("click", closeMenu, true);

    // Cleanup event listener on component unmount
    return () => document.removeEventListener("click", closeMenu);
  }, [menuRef, onClose, modalRef]);

  function handleOpenConfirm() {
    setConfirmOpen(true);
  }
  function handleCloseConfirm() {
    setConfirmOpen(false);
  }

  function handleDelete() {
    // if (!window.confirm("Are you sure you want to continiue?")) return;
    // console.log("im DELETING");
    type === "items" ? deleteItem(itemID) : deleteCategory(itemID);
  }

  function handleOpenEdit() {
    editFunction();
    onClose();

    // console.log("EDIT CLICKED");
  }

  return (
    <>
      <div
        ref={menuRef}
        className={styles.container}
        style={{ top: `${clickLocation.y}px`, right: `${clickLocation.x}px` }}
      >
        <button onClick={handleOpenEdit}>
          <FiEdit2 size={17} />
        </button>
        <button
          disabled={isDeletingCategory || isDeletingItem}
          onClick={handleOpenConfirm}
        >
          <IoTrashOutline size={17} />
        </button>
        <button onClick={onClose}>
          <IoClose size={20} />
        </button>
      </div>
      {isConfirmOpen && (
        <ConfirmModal
          ref={modalRef}
          onCancel={handleCloseConfirm}
          message="Are you sure you want to delete?"
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}

export default DropDownMenu;
