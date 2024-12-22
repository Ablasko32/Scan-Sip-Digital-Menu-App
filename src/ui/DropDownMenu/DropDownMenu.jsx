import useDeleteCategory from "../../features/categories/useDeleteCategory";
import useDeleteItem from "../../features/items/useDeleteItem";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import styles from "./DropDownMenu.module.css";
import { useEffect, useRef } from "react";
import { FiEdit2 } from "react-icons/fi";

function DropDownMenu({ clickLocation, onClose, itemID, type }) {
  // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // one of two mutations happens based on type prop
  const { isPending: isDeletingCategory, mutate: deleteCategory } =
    useDeleteCategory();
  const { isPending: isDeletingItem, mutate: deleteItem } = useDeleteItem();

  const menuRef = useRef();
  useEffect(() => {
    function closeMenu(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target) || !menuRef.current) onClose();
    }

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu);
  }, [menuRef, onClose]);

  function handleClick() {
    if (!window.confirm("Are you sure you want to continiue?")) return;
    type === "items" ? deleteItem(itemID) : deleteCategory(itemID);
  }

  return (
    <div
      ref={menuRef}
      className={styles.container}
      style={{ top: `${clickLocation.y}px`, right: `${clickLocation.x}px` }}
    >
      <button>
        <FiEdit2 size={17} />
      </button>
      <button
        disabled={isDeletingCategory || isDeletingItem}
        onClick={handleClick}
      >
        <IoTrashOutline size={17} />
      </button>
      <button onClick={onClose}>
        <IoClose size={20} />
      </button>
    </div>
  );
}

export default DropDownMenu;
