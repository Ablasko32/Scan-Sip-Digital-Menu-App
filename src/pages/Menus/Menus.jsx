import MenuFooter from "../../features/menus/MenuFooter/MenuFooter";
import MenuHeader from "../../features/menus/MenuHeader/MenuHeader";
import MenuList from "../../features/menus/MenuList/MenuList";
import styles from "./Menus.module.css";

function Menus() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeader}></div>

      <MenuHeader />

      <MenuList />

      <MenuFooter />
    </div>
  );
}

export default Menus;
