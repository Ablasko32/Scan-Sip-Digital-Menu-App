import CategoryItemsList from "../../features/menus/CategoryItemsList/CategoryItemsList";
import MenuFooter from "../../features/menus/MenuFooter/MenuFooter";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./MenuItems.module.css";
import { useRef } from "react";

function MenuItems() {
  const navigate = useNavigate();

  const topRef = useRef();
  function scrollToTop() {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div ref={topRef} className={styles.container}>
      <div>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <IoChevronBack size={30} color="#fff" />
        </button>
      </div>

      <CategoryItemsList handleScroll={scrollToTop} />
      <MenuFooter />
    </div>
  );
}

export default MenuItems;
