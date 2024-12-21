import { HiDotsVertical } from "react-icons/hi";
import styles from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
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
      <p className={styles.categoryMenu}>
        <HiDotsVertical />
      </p>
    </li>
  );
}

export default CategoryItem;
