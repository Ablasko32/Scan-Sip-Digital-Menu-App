import useCategories from "../../categories/CategoriesList/useCategories";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import Loader from "../../../ui/Loader/Loader";
import styles from "./MenuList.module.css";
import { Link } from "react-router-dom";

function MenuList() {
  const { categories, categoriesError, isLoadingCategories } = useCategories();

  if (isLoadingCategories) return <Loader />;

  if (categoriesError)
    return <LoaderError ErrMessage={categoriesError.message} />;

  return (
    <ul className={styles.menuList}>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <Link to={`/menus/location/1/${category.id}`}>{category.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;
