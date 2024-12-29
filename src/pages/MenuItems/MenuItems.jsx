import CategoryItemsList from "../../features/menus/CategoryItemsList/CategoryItemsList";
import MenuItemView from "../../features/menus/MenuItemView/MenuItemView";
import MenuFooter from "../../features/menus/MenuFooter/MenuFooter";
import useThemePicker from "../Menus/useThemePicker";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import styles from "./MenuItems.module.css";
import Modal from "../../ui/modal/Modal";
import { useRef, useState } from "react";

function MenuItems() {
  const [isItemViewOpen, setItemViewOpen] = useState(false);
  const [viewedItem, setViewedItem] = useState(null);

  const navigate = useNavigate();

  const topRef = useRef();
  function scrollToTop() {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleOpen(item) {
    setItemViewOpen((prev) => {
      if (prev) {
        setViewedItem(null);
        return false;
      } else {
        setViewedItem(item);
        return true;
      }
    });
    setViewedItem(item);
  }

  const styles = useThemePicker();

  return (
    <div ref={topRef} className={styles.container}>
      <div>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <IoChevronBack size={30} color="#fff" className={styles.backIcon} />
        </button>
      </div>

      <CategoryItemsList onOpen={handleOpen} handleScroll={scrollToTop} />
      <MenuFooter />
      {isItemViewOpen && (
        <Modal onClose={handleOpen}>
          <MenuItemView item={viewedItem} />
        </Modal>
      )}
    </div>
  );
}

export default MenuItems;
