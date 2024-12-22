import { useEffect, useRef, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import styles from "./DropDownMenu.module.css";
import { FiEdit2 } from "react-icons/fi";

function DropDownMenu({ clickLocation, onClose }) {
  // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

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
    console.log("Dropdown button click");
  }

  return (
    <div
      ref={menuRef}
      className={styles.container}
      style={{ top: `${clickLocation.y}px`, right: `${clickLocation.x}px` }}
    >
      <button onClick={handleClick}>
        <FiEdit2 size={17} />
      </button>
      <button onClick={handleClick}>
        <IoTrashOutline size={17} />
      </button>
    </div>
  );
}

export default DropDownMenu;
