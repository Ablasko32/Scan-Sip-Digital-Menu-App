import useCategories from "../../categories/CategoriesList/useCategories";
import useThemePicker from "../../../pages/Menus/useThemePicker";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../ui/Loader/Loader";
// import styles from "./MenuList.module.css";

function MenuList() {
  const { id: locationId } = useParams();

  const { categories, categoriesError, isLoadingCategories } =
    useCategories(locationId);

  const styles = useThemePicker();

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
