import { HiDotsVertical } from "react-icons/hi";
import styles from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

function CategoryItem() {
  return (
    <li className={styles.listItem}>
      <Link to="/categories/items/1">
        <div>
          <img
            className={styles.categoryImg}
            src="https://images.unsplash.com/photo-1634473115508-4291d758cf03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <p>Wine</p>
      </Link>
      <p className={styles.categoryMenu}>
        <HiDotsVertical />
      </p>
    </li>
  );
}

export default CategoryItem;
