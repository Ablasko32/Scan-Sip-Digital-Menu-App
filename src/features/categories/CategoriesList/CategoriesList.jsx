import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoriesList.module.css";
import { HiDotsVertical } from "react-icons/hi";

function CategoriesList() {
  return (
    <ul className={styles.categoryList}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ul>
  );
}

export default CategoriesList;
